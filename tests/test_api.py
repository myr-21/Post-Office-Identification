import pytest
from fastapi.testclient import TestClient
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../backend')))
from app.main import app

client = TestClient(app)

def test_api_config():
    response = client.get("/api/config")
    assert response.status_code == 200
    data = response.json()
    assert "autoRouteThreshold" in data
    assert "reviewFloor" in data

def test_api_predict():
    payload = {
        "rawAddress": "baner road pune 411045",
        "mode": "automatic"
    }
    response = client.post("/api/predict", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "id" in data
    assert "status" in data
    assert "candidates" in data
    assert len(data["candidates"]) > 0

def test_api_review_queue():
    response = client.get("/api/review-queue")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    if len(data) > 0:
        assert "id" in data[0]
        assert "reason" in data[0]
        
def test_api_review_resolve():
    # First create a prediction that gets flagged
    payload = {
        "rawAddress": "xyz unknown 999999",
        "mode": "automatic"
    }
    pred_res = client.post("/api/predict", json=payload)
    
    # Get review queue
    q_res = client.get("/api/review-queue")
    queue = q_res.json()
    assert len(queue) > 0
    item_id = queue[0]["id"]
    
    # Resolve it
    resolve_payload = {
        "decision": "correct",
        "correctedPincode": "411045",
        "correctedPostOffice": "Baner"
    }
    res = client.post(f"/api/review/{item_id}/resolve", json=resolve_payload)
    assert res.status_code == 200
    assert res.json()["success"] is True

def test_api_mapping_conflict():
    payload = {
        "rawAddress": "kothrud pune 411038",
        "mode": "automatic"
    }
    response = client.post("/api/predict", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "needs_review"
    
def test_api_mapping_changes():
    response = client.get("/api/mapping-changes")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 2
    assert "previousMapping" in data[0]
