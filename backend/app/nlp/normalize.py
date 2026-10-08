import re
from typing import List
from app.schemas import NormalizationResult, AddressComponent
from app.nlp.abbreviations import expand_abbreviations, extract_pincode
from app.nlp.components import extract_unit, extract_road, extract_landmark
from app.nlp.fuzzy import fuzzy_match_locality

def _remove_substring(text: str, sub: str) -> str:
    if not sub: return text
    # Replace the substring (case insensitive) with empty string
    pattern = re.compile(re.escape(sub), re.IGNORECASE)
    return pattern.sub('', text).strip(' ,')

def normalize_address(raw: str, known_localities: List[str] = None) -> NormalizationResult:
    if known_localities is None:
        known_localities = []

    # 1. Clean punctuation and multiple spaces
    cleaned = re.sub(r'[^\w\s,\-]', ' ', raw)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    
    # 2. Expand abbreviations
    expanded = expand_abbreviations(cleaned)
    
    # 3. Extract components
    components = []
    remaining_text = expanded
    
    # PIN code
    pincode = extract_pincode(remaining_text)
    if pincode:
        components.append(AddressComponent(label="PIN", value=pincode, type="pincode"))
        remaining_text = _remove_substring(remaining_text, pincode)
        
    # Landmark
    landmark = extract_landmark(remaining_text)
    if landmark:
        # Avoid treating landmark's locality as the delivery locality
        components.append(AddressComponent(label="Landmark", value=landmark.title(), type="landmark"))
        remaining_text = _remove_substring(remaining_text, landmark)
        
    # Unit
    unit = extract_unit(remaining_text)
    if unit:
        components.append(AddressComponent(label="Flat/Unit", value=unit.title(), type="unit"))
        remaining_text = _remove_substring(remaining_text, unit)
        
    # Road
    road = extract_road(remaining_text)
    if road:
        components.append(AddressComponent(label="Road", value=road.title(), type="road"))
        remaining_text = _remove_substring(remaining_text, road)
        
    # Try fuzzy matching remaining tokens for locality
    # We will split remaining text into chunks (by comma) or words and try to match
    chunks = [c.strip() for c in remaining_text.split(',') if c.strip()]
    locality = None
    
    if known_localities:
        for chunk in chunks:
            match = fuzzy_match_locality(chunk, known_localities, threshold=75.0)
            if match:
                locality = match
                break
                
    if locality:
        components.append(AddressComponent(label="Locality", value=locality.title(), type="locality"))
        remaining_text = _remove_substring(remaining_text, chunk) # remove the chunk that matched
    else:
        # Fallback: if no locality matched but we have chunks left, take the last significant chunk
        # Assuming format often ends with Locality, City, State
        if chunks:
            potential_locality = chunks[0] # taking first remaining as a guess
            if len(potential_locality) > 2:
                components.append(AddressComponent(label="Locality", value=potential_locality.title(), type="locality"))

    normalized = expanded.title()
    
    return NormalizationResult(
        raw=raw,
        normalized=normalized,
        components=components
    )
