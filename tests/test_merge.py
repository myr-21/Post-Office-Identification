import sys
import os
import pytest
import pandas as pd

# Add backend to path so we can import app
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../backend')))

from app.ml.merge import adapt_prediction
from app.schemas import NormalizationResult, AddressComponent

def test_adapt_prediction():
    # Mock some data
    mock_offices_df = pd.DataFrame([
        {
            "id": "PO-411029-new",
            "name": "New Office",
            "pincode": "411029",
            "district": "Pune",
            "state": "Maharashtra"
        }
    ]).set_index("id")
    
    # Old prediction returning a deprecated PIN (e.g. 411038)
    top_3_preds = [
        {
            "rank": 1,
            "id": "PO-411038-old",
            "postOffice": "Old Office",
            "pincode": "411038",
            "district": "Pune",
            "state": "Maharashtra",
            "confidence": 0.95
        },
        {
            "rank": 2,
            "id": "PO-411001-other",
            "postOffice": "Other Office",
            "pincode": "411001",
            "district": "Pune",
            "state": "Maharashtra",
            "confidence": 0.04
        }
    ]
    
    merges_dict = {
        "PO-411038-old": "PO-411029-new"
    }
    
    norm_result = NormalizationResult(
        raw="test address",
        normalized="Test Address",
        components=[]
    )
    
    updated_preds, was_merged = adapt_prediction(
        norm_result, top_3_preds, merges_dict, offices_df=mock_offices_df
    )
    
    assert was_merged is True
    assert len(updated_preds) == 2
    
    # Check that rank 1 got updated
    assert updated_preds[0]["id"] == "PO-411029-new"
    assert updated_preds[0]["pincode"] == "411029"
    assert updated_preds[0]["postOffice"] == "New Office"
    assert updated_preds[0]["confidence"] == 0.95
    assert updated_preds[0]["merged_from"] == "PO-411038-old"
    
    # Check that rank 2 is untouched
    assert updated_preds[1]["id"] == "PO-411001-other"
    assert updated_preds[1]["pincode"] == "411001"
    assert "merged_from" not in updated_preds[1]

def test_no_merge_needed():
    top_3_preds = [
        {
            "rank": 1,
            "id": "PO-411001-other",
            "postOffice": "Other Office",
            "pincode": "411001",
            "district": "Pune",
            "state": "Maharashtra",
            "confidence": 0.95
        }
    ]
    
    norm_result = NormalizationResult(
        raw="test address",
        normalized="Test Address",
        components=[]
    )
    
    updated_preds, was_merged = adapt_prediction(
        norm_result, top_3_preds, merges_dict={"old": "new"}
    )
    
    assert was_merged is False
    assert updated_preds[0]["id"] == "PO-411001-other"
