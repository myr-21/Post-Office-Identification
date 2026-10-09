import os
import json
import pickle
import pandas as pd
import numpy as np
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.calibration import CalibratedClassifierCV
from sklearn.pipeline import Pipeline
import sys
sys.path.append('backend')
from app.ml.features import TextPINExtractor
from sklearn.metrics import f1_score

def load_data(split_name):
    path = os.path.join("data", "processed", f"{split_name}.csv")
    df = pd.read_csv(path)
    return df['raw_address'].fillna("").values, df['true_post_office'].values

def main():
    print("Loading data...")
    X_train, y_train = load_data('train')
    X_val, y_val = load_data('val')
    
    print(f"Training on {len(X_train)} samples, validating on {len(X_val)} samples.")
    
    # 1. TF-IDF + LogisticRegression
    pipeline_lr = Pipeline([
        ('pin_extractor', TextPINExtractor()),
        ('tfidf', TfidfVectorizer(analyzer='char_wb', ngram_range=(2, 5), max_features=20000)),
        ('clf', LogisticRegression(max_iter=1000, random_state=42))
    ])
    
    print("Training Model 1: TF-IDF + Logistic Regression...")
    pipeline_lr.fit(X_train, y_train)
    y_val_pred_lr = pipeline_lr.predict(X_val)
    f1_lr = f1_score(y_val, y_val_pred_lr, average='macro')
    print(f"Model 1 Val Macro-F1: {f1_lr:.4f}")
    
    # 2. TF-IDF + Calibrated LinearSVC
    pipeline_svc = Pipeline([
        ('pin_extractor', TextPINExtractor()),
        ('tfidf', TfidfVectorizer(analyzer='char_wb', ngram_range=(2, 5), max_features=20000)),
        ('clf', CalibratedClassifierCV(estimator=LinearSVC(random_state=42, dual=False), cv=3))
    ])
    
    print("Training Model 2: TF-IDF + Calibrated LinearSVC...")
    pipeline_svc.fit(X_train, y_train)
    y_val_pred_svc = pipeline_svc.predict(X_val)
    f1_svc = f1_score(y_val, y_val_pred_svc, average='macro')
    print(f"Model 2 Val Macro-F1: {f1_svc:.4f}")
    
    best_pipeline = pipeline_svc if f1_svc > f1_lr else pipeline_lr
    best_name = "Calibrated LinearSVC" if f1_svc > f1_lr else "Logistic Regression"
    print(f"\nSelecting best model: {best_name}")
    
    os.makedirs("models", exist_ok=True)
    with open("models/postroute_v1.pkl", "wb") as f:
        pickle.dump(best_pipeline, f)
        
    print("Best model saved to models/postroute_v1.pkl")
    print("Run `scripts/evaluate_model.py` next for full test set evaluation.")

if __name__ == "__main__":
    main()
