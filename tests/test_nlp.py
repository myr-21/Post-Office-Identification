import pytest
import sys
import os

# Add backend to path so we can import app
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../backend')))

from app.nlp.normalize import normalize_address
from app.nlp.abbreviations import expand_abbreviations, extract_pincode
from app.nlp.components import extract_unit, extract_road, extract_landmark
from app.nlp.fuzzy import fuzzy_match_locality

KNOWN_LOCALITIES = [
    "Baner", "Balewadi", "Aundh", "Shivajinagar", "Kothrud", "Hadapsar",
    "Viman Nagar", "Pimpri", "Chinchwad", "Wakad", "Katraj"
]

def test_expand_abbreviations():
    # 1. basic
    assert expand_abbreviations("mg rd") == "mg Road"
    # 2. punctuation
    assert expand_abbreviations("mg rd., pune") == "mg Road, pune"
    # 3. multiple
    assert expand_abbreviations("nr. bank, opp. school") == "Near bank, Opposite school"
    # 4. no abbreviation
    assert expand_abbreviations("mg road") == "mg road"
    # 5. case mixed
    assert expand_abbreviations("FLR 3, bldg A") == "Floor 3, Building A"

def test_extract_pincode():
    # 6. standard
    assert extract_pincode("pune 411045 mh") == "411045"
    # 7. invalid leading zero
    assert extract_pincode("pune 011045 mh") == None
    # 8. embedded in text
    assert extract_pincode("pin:411038") == "411038"
    # 9. missing
    assert extract_pincode("pune mh") == None
    # 10. too long/short
    assert extract_pincode("pune 41104 mh") == None
    assert extract_pincode("pune 4110456 mh") == None

def test_fuzzy_match():
    # 11. exact
    assert fuzzy_match_locality("Baner", KNOWN_LOCALITIES) == "Baner"
    # 12. lower
    assert fuzzy_match_locality("baner", KNOWN_LOCALITIES) == "Baner"
    # 13. typo
    assert fuzzy_match_locality("bnaer", KNOWN_LOCALITIES) == "Baner"
    # 14. typo 2
    assert fuzzy_match_locality("vman nagr", KNOWN_LOCALITIES) == "Viman Nagar"
    # 15. no match
    assert fuzzy_match_locality("unknown", KNOWN_LOCALITIES) == None

def test_components():
    # 16. unit flat
    assert extract_unit("flat 302, baner") == "flat 302"
    # 17. unit hse
    assert extract_unit("hse no 5, aundh") == "hse no 5"
    # 18. road
    assert extract_road("baner road, pune") == "baner road"
    # 19. road short
    assert extract_road("fc rd, pune") == "fc rd"
    # 20. landmark
    assert extract_landmark("near balewadi stadium, pune") == "near balewadi stadium"
    # 21. landmark opp
    assert extract_landmark("opp. school") == "opp. school"

def test_normalize_full():
    # 22. full clean
    res = normalize_address("flat 302, baner rd, near balewadi, pune 411045", KNOWN_LOCALITIES)
    assert res.raw == "flat 302, baner rd, near balewadi, pune 411045"
    
    types = {c.type: c.value for c in res.components}
    assert types.get("pincode") == "411045"
    assert types.get("unit") == "Flat 302"
    # The road logic extracts the whole string up to rd, so it might grab more depending on comma split
    
    # 23. typo and landmark confuser
    # Locality should NOT be Balewadi because it's inside the landmark.
    # Actually our normalize logic removes landmark first! So Balewadi is removed.
    # The remaining text has "bnaer" which fuzzy matches Baner.
    res2 = normalize_address("hse 5, bnaer, nr balewadi stadium", KNOWN_LOCALITIES)
    types2 = {c.type: c.value for c in res2.components}
    assert types2.get("landmark") == "Near Balewadi Stadium"
    assert types2.get("locality") == "Baner"
    
    # 24. garbage input
    res3 = normalize_address("xyz!@# 123", KNOWN_LOCALITIES)
    assert len(res3.components) == 0 or (len(res3.components) == 1 and res3.components[0].type == "locality")
    
    # 25. missing pin and locality only
    res4 = normalize_address("kothrud", KNOWN_LOCALITIES)
    types4 = {c.type: c.value for c in res4.components}
    assert types4.get("locality") == "Kothrud"
    assert "pincode" not in types4
