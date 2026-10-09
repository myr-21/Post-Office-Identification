from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.db import models
from app.db.database import engine, get_db
from app.schemas import AddressInput, NormalizationResult
from app.nlp.normalize import normalize_address
from app.ml.predict import get_predictions
from app.ml.merge import adapt_prediction
from datetime import datetime
import json

# Ensure tables are created
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="PostRoute AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize default config if not present
def get_or_create_config(db: Session):
    config = db.query(models.Config).first()
    if not config:
        config = models.Config(auto_route_threshold=0.85, review_floor=0.55)
        db.add(config)
        db.commit()
        db.refresh(config)
    return config

# Simulate a merge (for phase 5)
SIMULATED_MERGES = {
    # If 411038 (Kothrud) was merged into 411029 (New Office)
    "PO-411038-kothrud": "PO-411029-new" 
}

# Known localities for normalization
# Ideally loaded from database/post_offices.csv, hardcoded a few for now
KNOWN_LOCALITIES = ["Baner", "Balewadi", "Aundh", "Shivajinagar", "Kothrud", "Hadapsar", "Viman Nagar", "Pimpri", "Chinchwad", "Wakad", "Katraj"]

@app.get("/api/config")
def read_config(db: Session = Depends(get_db)):
    config = get_or_create_config(db)
    return {
        "autoRouteThreshold": config.auto_route_threshold,
        "reviewFloor": config.review_floor
    }

@app.post("/api/predict")
def predict_address(input_data: AddressInput, db: Session = Depends(get_db)):
    # 1. Normalize
    norm_result = normalize_address(input_data.rawAddress, KNOWN_LOCALITIES)
    
    # 2. ML Prediction
    top_3_preds = get_predictions(norm_result)
    
    # 3. Merge Adaptation
    updated_preds, was_merged = adapt_prediction(norm_result, top_3_preds, SIMULATED_MERGES)
    
    # 4. Status and reason logic
    config = get_or_create_config(db)
    
    top_pred = updated_preds[0]
    confidence = top_pred['confidence']
    
    status = "auto_approved"
    reason = None
    priority = "low"
    
    if confidence < config.auto_route_threshold:
        status = "needs_review"
        if confidence < config.review_floor:
            reason = "low_confidence"
            priority = "high"
        else:
            reason = "ambiguous_locality"
            priority = "medium"
            
    if top_pred.get('pin_locality_mismatch'):
        status = "needs_review"
        reason = "pin_locality_mismatch"
        priority = "high"
            
    if was_merged:
        status = "needs_review"
        reason = "mapping_conflict"
        priority = "high"
        
    # Save Prediction to DB
    db_pred = models.Prediction(
        raw_address=input_data.rawAddress,
        normalized_address=norm_result.normalized,
        pincode=top_pred['pincode'],
        post_office=top_pred['postOffice'],
        district=top_pred['district'],
        state=top_pred['state'],
        confidence=confidence,
        status=status,
    )
    db.add(db_pred)
    db.commit()
    db.refresh(db_pred)
    
    if status == "needs_review":
        db_review = models.ReviewItem(
            prediction_id=db_pred.id,
            priority=priority,
            reason=reason,
            status="pending"
        )
        db.add(db_review)
        db.commit()
    
    # Return formatted JSON matching TS
    return {
        "id": db_pred.id,
        "createdAt": db_pred.created_at.isoformat() + "Z",
        "rawAddress": db_pred.raw_address,
        "normalization": norm_result.dict(),
        "pincode": db_pred.pincode,
        "postOffice": db_pred.post_office,
        "district": db_pred.district,
        "state": db_pred.state,
        "confidence": db_pred.confidence,
        "status": db_pred.status,
        "candidates": [
            {
                "rank": p["rank"],
                "postOffice": p["postOffice"],
                "pincode": p["pincode"],
                "district": p["district"],
                "state": p["state"],
                "confidence": p["confidence"]
            } for p in updated_preds
        ],
        "explanation": [
            {"label": "Normalized", "detail": norm_result.normalized, "matched": True}
        ]
    }

@app.get("/api/review-queue")
def get_review_queue(db: Session = Depends(get_db)):
    items = db.query(models.ReviewItem).filter(models.ReviewItem.status == "pending").order_by(models.ReviewItem.created_at.desc()).all()
    results = []
    for item in items:
        pred = item.prediction
        results.append({
            "id": item.id,
            "parcelId": "PRC-NEW",
            "createdAt": item.created_at.isoformat() + "Z",
            "priority": item.priority,
            "reason": item.reason,
            "rawAddress": pred.raw_address,
            "normalizedAddress": pred.normalized_address,
            "district": pred.district,
            "state": pred.state,
            "pincode": pred.pincode,
            "postOffice": pred.post_office,
            "confidence": pred.confidence,
            "operator": pred.operator or "Test Operator",
            "mapping": {
                "current": "V3",
                "historical": "V2",
                "conflict": None
            },
            "candidates": [
                {
                    "rank": 1,
                    "postOffice": pred.post_office,
                    "pincode": pred.pincode,
                    "confidence": pred.confidence
                }
            ]
        })
    return results
