import os
import pickle
import numpy as np
import pandas as pd
from app.schemas import NormalizationResult
from typing import List, Dict, Any
from app.ml.features import TextPINExtractor

MODEL_PATH = os.path.join(os.path.dirname(__file__), "../../../models/postroute_v1.pkl")
OFFICES_PATH = os.path.join(os.path.dirname(__file__), "../../../data/processed/post_offices.csv")

class Predictor:
    def __init__(self):
        self.model = None
        self.offices_df = None
        
    def load(self):
        if self.model is None:
            with open(MODEL_PATH, "rb") as f:
                self.model = pickle.load(f)
            self.offices_df = pd.read_csv(OFFICES_PATH, dtype=str).set_index('id')
            
    def predict(self, norm_result: NormalizationResult) -> List[Dict[str, Any]]:
        self.load()
        
        # We trained on the raw address (or normalized string). 
        # Using norm_result.normalized or raw.
        # Here we'll use the normalized string as it represents a clean version.
        text = norm_result.normalized
        
        prob = self.model.predict_proba([text])[0]
        classes = self.model.classes_
        
        extracted_pin = None
        for comp in norm_result.components:
            if comp.type == "pincode" and len(comp.value) == 6:
                extracted_pin = comp.value
                break
        
        # Get top 3
        top3_idx = np.argsort(prob)[-3:][::-1]
        
        results = []
        for rank, idx in enumerate(top3_idx):
            office_id = classes[idx]
            confidence = float(prob[idx])
            
            # Look up office details
            if office_id in self.offices_df.index:
                office = self.offices_df.loc[office_id]
                results.append({
                    "rank": rank + 1,
                    "id": office_id,
                    "postOffice": office['name'],
                    "pincode": office['pincode'],
                    "district": office['district'],
                    "state": office['state'],
                    "confidence": confidence
                })
            else:
                # Fallback if somehow not found
                results.append({
                    "rank": rank + 1,
                    "id": office_id,
                    "postOffice": office_id,
                    "pincode": "",
                    "district": "",
                    "state": "",
                    "confidence": confidence
                })
        
        # Check for PIN mismatch on the top prediction
        top_pred_pin = results[0]['pincode'] if len(results) > 0 else None
        if extracted_pin and top_pred_pin and str(extracted_pin) != str(top_pred_pin):
            results[0]['pin_locality_mismatch'] = True
        else:
            results[0]['pin_locality_mismatch'] = False
                
        return results

predictor = Predictor()

def get_predictions(norm_result: NormalizationResult) -> List[Dict[str, Any]]:
    return predictor.predict(norm_result)

if __name__ == "__main__":
    from app.schemas import AddressComponent
    
    # Simple test
    norm = NormalizationResult(
        raw="baner road pune 411045",
        normalized="Baner Road Pune 411045",
        components=[
            AddressComponent(label="Road", value="Baner Road", type="road"),
            AddressComponent(label="PIN", value="411045", type="pincode")
        ]
    )
    
    preds = get_predictions(norm)
    for p in preds:
        print(f"Rank {p['rank']}: {p['postOffice']} ({p['pincode']}) - Conf: {p['confidence']:.4f}")
