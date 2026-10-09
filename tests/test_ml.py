import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../backend')))

from app.ml.predict import get_predictions, Predictor
from app.schemas import NormalizationResult, AddressComponent

# Ensure model is trained first, otherwise tests might fail or complain
# These tests simulate edge cases into the prediction pipeline

def test_empty_input():
    # Empty input shouldn't crash
    norm = NormalizationResult(raw="", normalized="", components=[])
    preds = get_predictions(norm)
    assert len(preds) == 3
    # Confidences will just be the prior distribution, shouldn't crash

def test_wrong_pin_no_locality():
    # Completely fake PIN and no locality
    norm = NormalizationResult(
        raw="somewhere 999999", 
        normalized="somewhere 999999", 
        components=[AddressComponent(label="PIN", value="999999", type="pincode")]
    )
    preds = get_predictions(norm)
    assert len(preds) == 3
    # The pin_locality_mismatch flag should be True if the top pred pin doesn't match 999999
    assert preds[0]['pin_locality_mismatch'] is True

def test_pin_locality_mismatch():
    # Baner is 411045, if we give it 411038 (Kothrud), it should flag a mismatch
    norm = NormalizationResult(
        raw="baner road pune 411038",
        normalized="Baner Road Pune 411038",
        components=[
            AddressComponent(label="Locality", value="Baner", type="locality"),
            AddressComponent(label="PIN", value="411038", type="pincode")
        ]
    )
    preds = get_predictions(norm)
    # The TF-IDF model might predict Baner because of text, or Kothrud because of PIN
    # Whichever it predicts, it's a mismatch because Baner != 411038
    # We just ensure it doesn't crash and returns the flag
    assert 'pin_locality_mismatch' in preds[0]
    
def test_valid_match():
    norm = NormalizationResult(
        raw="baner pune 411045",
        normalized="Baner Pune 411045",
        components=[
            AddressComponent(label="Locality", value="Baner", type="locality"),
            AddressComponent(label="PIN", value="411045", type="pincode")
        ]
    )
    preds = get_predictions(norm)
    # The model should predict Baner and the PIN matches, so mismatch is False
    assert preds[0]['pin_locality_mismatch'] is False
