import os
import json
import pickle
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, f1_score
from sklearn.base import BaseEstimator, TransformerMixin

# A simple custom transformer to add exact pin match boosting?
# Actually, since we want a simple pipeline that works with predict.py,
# a standard TF-IDF + LR on the normalized text string is easiest and performs well.

def load_data(split_name):
    path = os.path.join("data", "processed", f"{split_name}.csv")
    df = pd.read_csv(path)
    # We should train to predict the true_post_office (ID)
    # We'll just use the raw_address as input for now, 
    # but in reality we would use normalized_address. 
    # Since we are simulating, let's just train on raw_address directly as the text feature.
    return df['raw_address'].fillna(""), df['true_post_office']

def main():
    print("Loading data...")
    X_train, y_train = load_data('train')
    X_val, y_val = load_data('val')
    X_test, y_test = load_data('test')
    
    print(f"Training on {len(X_train)} samples, {len(set(y_train))} classes...")
    
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(analyzer='char_wb', ngram_range=(2, 5), max_features=20000)),
        ('clf', LogisticRegression(max_iter=1000, random_state=42))
    ])
    
    pipeline.fit(X_train, y_train)
    
    print("Evaluating...")
    
    # Calculate metrics on test set
    y_pred = pipeline.predict(X_test)
    y_prob = pipeline.predict_proba(X_test)
    
    acc = accuracy_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred, average='weighted')
    
    # Calculate Top-3 Accuracy
    classes = pipeline.classes_
    top3_preds = np.argsort(y_prob, axis=1)[:, -3:] # indices of top 3
    
    top3_acc = 0
    for i, true_label in enumerate(y_test):
        true_idx = np.where(classes == true_label)[0]
        if len(true_idx) > 0 and true_idx[0] in top3_preds[i]:
            top3_acc += 1
    top3_acc /= len(y_test)
    
    metrics = {
        "accuracy": acc,
        "f1": f1,
        "top3_accuracy": top3_acc
    }
    
    print(f"Test Accuracy: {acc:.4f} (Requirement: > 0.85)")
    print(f"Test F1 Score: {f1:.4f}")
    print(f"Test Top-3 Acc: {top3_acc:.4f}")
    
    os.makedirs("models", exist_ok=True)
    with open("models/postroute_v1.pkl", "wb") as f:
        pickle.dump(pipeline, f)
        
    with open("models/metrics.json", "w") as f:
        json.dump(metrics, f, indent=2)
        
    print("Model saved to models/postroute_v1.pkl")
    print("Metrics saved to models/metrics.json")

if __name__ == "__main__":
    main()
