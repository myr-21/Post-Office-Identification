import os
import pandas as pd
import numpy as np
from rapidfuzz import process, fuzz
import sys
import time

sys.path.append('backend')
from app.ml.predict import Predictor
from app.nlp.components import normalize_address

def evaluate_fuzzy(test_df, offices_df):
    print("\n--- Evaluating Fuzzy Matching Baseline ---")
    choices = offices_df['name'].tolist()
    ids = offices_df.index.tolist()
    
    correct_top1 = 0
    correct_top3 = 0
    total = len(test_df)
    
    start_time = time.time()
    for _, row in test_df.iterrows():
        text = normalize_address(str(row['raw_address'])).normalized
        true_id = row['true_post_office']
        
        results = process.extract(text, choices, scorer=fuzz.token_set_ratio, limit=3)
        pred_ids = [ids[choices.index(r[0])] for r in results]
        
        if true_id in pred_ids:
            correct_top3 += 1
            if pred_ids[0] == true_id:
                correct_top1 += 1
                
    elapsed = time.time() - start_time
    print(f"Top-1 Accuracy: {correct_top1/total:.4f}")
    print(f"Top-3 Accuracy: {correct_top3/total:.4f}")
    print(f"Time taken: {elapsed:.2f}s")
    return correct_top1/total, correct_top3/total

def evaluate_ml(test_df):
    print("\n--- Evaluating ML Model ---")
    predictor = Predictor()
    predictor.load()
    
    correct_top1 = 0
    correct_top3 = 0
    total = len(test_df)
    
    pin_present_correct = 0
    pin_present_total = 0
    
    pin_absent_correct = 0
    pin_absent_total = 0
    
    start_time = time.time()
    for _, row in test_df.iterrows():
        raw_text = str(row['raw_address'])
        true_id = row['true_post_office']
        
        norm_result = normalize_address(raw_text)
        has_pin = any(c.type == 'pincode' for c in norm_result.components)
        
        preds = predictor.predict(norm_result)
        pred_ids = [p['id'] for p in preds]
        
        if true_id in pred_ids:
            correct_top3 += 1
            if pred_ids[0] == true_id:
                correct_top1 += 1
                if has_pin:
                    pin_present_correct += 1
                else:
                    pin_absent_correct += 1
                    
        if has_pin:
            pin_present_total += 1
        else:
            pin_absent_total += 1
                
    elapsed = time.time() - start_time
    print(f"Overall Top-1 Accuracy: {correct_top1/total:.4f}")
    print(f"Overall Top-3 Accuracy: {correct_top3/total:.4f}")
    if pin_present_total > 0:
        print(f"Top-1 (PIN Present): {pin_present_correct/pin_present_total:.4f}")
    if pin_absent_total > 0:
        print(f"Top-1 (PIN Absent): {pin_absent_correct/pin_absent_total:.4f}")
    print(f"Time taken: {elapsed:.2f}s")
    
    print("\nAccuracy by Noise Level:")
    for level in test_df['noise_level'].unique():
        subset = test_df[test_df['noise_level'] == level]
        correct = 0
        for _, row in subset.iterrows():
            norm_result = normalize_address(str(row['raw_address']))
            preds = predictor.predict(norm_result)
            if preds[0]['id'] == row['true_post_office']:
                correct += 1
        print(f" - {level}: {correct/len(subset):.4f} ({len(subset)} samples)")

if __name__ == '__main__':
    test_path = 'data/processed/test.csv'
    offices_path = 'data/processed/post_offices.csv'
    if not os.path.exists(test_path):
        print('Test data not found.')
        sys.exit(1)
    test_df = pd.read_csv(test_path)
    offices_df = pd.read_csv(offices_path).set_index('id')
    print(f'Loaded {len(test_df)} test samples.')
    evaluate_fuzzy(test_df, offices_df)
    evaluate_ml(test_df)
