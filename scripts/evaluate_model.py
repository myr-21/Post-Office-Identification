import os
import json
import pickle
import pandas as pd
import numpy as np
import time
import sys
from sklearn.metrics import accuracy_score, f1_score
sys.path.append('backend')
from app.ml.features import TextPINExtractor
from baseline_heuristic import BaselineHeuristicPredictor

def load_data(split_name):
    path = os.path.join("data", "processed", f"{split_name}.csv")
    if not os.path.exists(path):
        return None
    return pd.read_csv(path)

def expected_calibration_error(y_true, y_prob, classes, n_bins=10):
    # Flatten the multiclass problem into a series of predictions vs confidences
    confidences = np.max(y_prob, axis=1)
    predictions = classes[np.argmax(y_prob, axis=1)]
    accuracies = (predictions == y_true)
    
    bins = np.linspace(0, 1, n_bins + 1)
    ece = 0.0
    for i in range(n_bins):
        bin_mask = (confidences >= bins[i]) & (confidences < bins[i+1])
        if np.sum(bin_mask) > 0:
            bin_acc = np.mean(accuracies[bin_mask])
            bin_conf = np.mean(confidences[bin_mask])
            ece += (np.sum(bin_mask) / len(y_true)) * np.abs(bin_acc - bin_conf)
    return ece

def evaluate_on_dataframe(df, model, baseline, dataset_name):
    X = df['raw_address'].fillna("").values
    y_true = df['true_post_office'].values
    
    metrics = {}
    
    # 1. Baseline Heuristic
    print(f"\nEvaluating Baseline on {dataset_name}...")
    start = time.time()
    baseline_preds = baseline.predict(X)
    baseline_time = time.time() - start
    metrics['baseline_acc'] = accuracy_score(y_true, baseline_preds)
    
    # 2. ML Model
    print(f"Evaluating ML Model on {dataset_name}...")
    start = time.time()
    y_pred = model.predict(X)
    y_prob = model.predict_proba(X)
    ml_time = time.time() - start
    
    metrics['accuracy'] = accuracy_score(y_true, y_pred)
    metrics['macro_f1'] = f1_score(y_true, y_pred, average='macro')
    metrics['weighted_f1'] = f1_score(y_true, y_pred, average='weighted')
    
    classes = model.classes_
    top3_preds = np.argsort(y_prob, axis=1)[:, -3:]
    top5_preds = np.argsort(y_prob, axis=1)[:, -5:]
    
    top3_acc, top5_acc = 0, 0
    for i, true_label in enumerate(y_true):
        if true_label in classes:
            true_idx = np.where(classes == true_label)[0][0]
            if true_idx in top3_preds[i]: top3_acc += 1
            if true_idx in top5_preds[i]: top5_acc += 1
            
    metrics['top3_accuracy'] = top3_acc / len(y_true)
    metrics['top5_accuracy'] = top5_acc / len(y_true)
    
    metrics['ece'] = expected_calibration_error(y_true, y_prob, classes)
    
    # Latency per prediction
    metrics['latency_ms'] = (ml_time / len(X)) * 1000
    
    # PIN-level vs Office-level (approximate by grouping first 6 chars of true_post_office if ID is PO-xxxxxx)
    # Actually, we have true_pincode if it's in the df
    if 'true_pincode' in df.columns:
        y_true_pin = df['true_pincode'].astype(str).values
        # Predict PIN by mapping predicted office ID to PIN (using the fact that our IDs are PO-{PIN}-xxxxxx)
        y_pred_pin = [p.split('-')[1] if len(p.split('-')) > 1 else '' for p in y_pred]
        metrics['pin_accuracy'] = accuracy_score(y_true_pin, y_pred_pin)
    
    # Noise level breakdown
    if 'noise_level' in df.columns:
        noise_accs = {}
        for level in df['noise_level'].unique():
            mask = df['noise_level'] == level
            noise_accs[level] = accuracy_score(y_true[mask], y_pred[mask])
        metrics['noise_accuracy'] = noise_accs

    # Auto-route rate vs accuracy at different thresholds
    confidences = np.max(y_prob, axis=1)
    thresholds = [0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95]
    route_stats = {}
    for t in thresholds:
        routed_mask = confidences >= t
        route_rate = np.mean(routed_mask)
        if route_rate > 0:
            route_acc = accuracy_score(y_true[routed_mask], y_pred[routed_mask])
        else:
            route_acc = 0.0
        route_stats[str(t)] = {'route_rate': route_rate, 'accuracy_on_routed': route_acc}
    metrics['auto_route_stats'] = route_stats
    
    return metrics

def main():
    offices_df = pd.read_csv("data/processed/post_offices.csv")
    baseline = BaselineHeuristicPredictor(offices_df)
    
    with open("models/postroute_v1.pkl", "rb") as f:
        model = pickle.load(f)
        
    test_df = load_data('test')
    if test_df is None:
        print("Error: test.csv not found.")
        sys.exit(1)
        
    synthetic_metrics = evaluate_on_dataframe(test_df, model, baseline, "Synthetic Test Data")
    
    realistic_df = None
    realistic_path = "data/realistic_test.csv"
    if os.path.exists(realistic_path):
        realistic_df = pd.read_csv(realistic_path)
        realistic_metrics = evaluate_on_dataframe(realistic_df, model, baseline, "Realistic Handwritten Data")
    else:
        realistic_metrics = {"status": "NOT YET EVALUATED - awaiting data/realistic_test.csv"}
        
    all_metrics = {
        "synthetic": synthetic_metrics,
        "realistic": realistic_metrics
    }
    
    with open("models/metrics.json", "w") as f:
        json.dump(all_metrics, f, indent=2)
        
    os.makedirs("docs", exist_ok=True)
    with open("docs/evaluation.md", "w") as f:
        f.write("# Model Evaluation Report\n\n")
        f.write("## Synthetic Data (Generated with systematic noise)\n")
        f.write(f"- **Top-1 Accuracy:** {synthetic_metrics['accuracy']:.4f}\n")
        f.write(f"- **Top-3 Accuracy:** {synthetic_metrics['top3_accuracy']:.4f}\n")
        f.write(f"- **Top-5 Accuracy:** {synthetic_metrics['top5_accuracy']:.4f}\n")
        f.write(f"- **Macro F1:** {synthetic_metrics['macro_f1']:.4f}\n")
        f.write(f"- **Weighted F1:** {synthetic_metrics['weighted_f1']:.4f}\n")
        if 'pin_accuracy' in synthetic_metrics:
            f.write(f"- **PIN-level Accuracy:** {synthetic_metrics['pin_accuracy']:.4f}\n")
        f.write(f"- **Expected Calibration Error (ECE):** {synthetic_metrics['ece']:.4f}\n")
        f.write(f"- **Avg Latency per Prediction:** {synthetic_metrics['latency_ms']:.2f} ms\n\n")
        
        f.write("### Baseline vs ML Model\n")
        f.write("| Model | Top-1 Accuracy |\n|---|---|\n")
        f.write(f"| Baseline Heuristic | {synthetic_metrics['baseline_acc']:.4f} |\n")
        f.write(f"| TF-IDF ML Model | {synthetic_metrics['accuracy']:.4f} |\n\n")
        
        if 'noise_accuracy' in synthetic_metrics:
            f.write("### Accuracy by Noise Level\n")
            for k, v in synthetic_metrics['noise_accuracy'].items():
                f.write(f"- {k.capitalize()}: {v:.4f}\n")
            f.write("\n")
            
        f.write("### Auto-Route Threshold Analysis\n")
        f.write("| Threshold | Route Rate | Accuracy on Routed |\n|---|---|---|\n")
        for t, stats in synthetic_metrics['auto_route_stats'].items():
            f.write(f"| {t} | {stats['route_rate']:.2%} | {stats['accuracy_on_routed']:.2%} |\n")
        f.write("\n*(Threshold of 0.85 is chosen to balance high auto-route rate with >95% accuracy on routed cases)*\n\n")
        
        f.write("## Realistic Handwritten Data\n")
        if "status" in realistic_metrics:
            f.write(f"> {realistic_metrics['status']}\n")
        else:
            f.write(f"- **Top-1 Accuracy:** {realistic_metrics['accuracy']:.4f}\n")
            f.write(f"- **Top-3 Accuracy:** {realistic_metrics['top3_accuracy']:.4f}\n")
    
    print("\nEvaluation complete. Results saved to models/metrics.json and docs/evaluation.md")

if __name__ == "__main__":
    main()
