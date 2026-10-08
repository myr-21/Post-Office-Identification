from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.db.database import Base
from datetime import datetime
import uuid

def generate_uuid():
    return str(uuid.uuid4())

class Config(Base):
    __tablename__ = "config"
    id = Column(Integer, primary_key=True, index=True)
    auto_route_threshold = Column(Float, default=0.85)
    review_floor = Column(Float, default=0.55)

class Prediction(Base):
    __tablename__ = "predictions"
    id = Column(String, primary_key=True, default=generate_uuid)
    created_at = Column(DateTime, default=datetime.utcnow)
    raw_address = Column(String, index=True)
    normalized_address = Column(String)
    pincode = Column(String)
    post_office = Column(String)
    district = Column(String)
    state = Column(String)
    confidence = Column(Float)
    status = Column(String) # auto_approved, needs_review, manually_verified, corrected
    operator = Column(String, nullable=True)
    
class ReviewItem(Base):
    __tablename__ = "review_items"
    id = Column(String, primary_key=True, default=generate_uuid)
    prediction_id = Column(String, ForeignKey("predictions.id"))
    priority = Column(String)
    reason = Column(String)
    status = Column(String, default="pending") # pending, in_review, resolved, escalated
    created_at = Column(DateTime, default=datetime.utcnow)
    
    prediction = relationship("Prediction")
