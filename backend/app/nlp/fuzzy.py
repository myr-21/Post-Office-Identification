from rapidfuzz import process, fuzz, utils
import re

def is_landmark(text: str) -> bool:
    """Detect if a string chunk represents a landmark."""
    landmark_keywords = [
        'near', 'nr', 'opposite', 'opp', 'behind', 'beside', 'next to', 'adj', 'adjacent'
    ]
    lower_text = text.lower()
    for kw in landmark_keywords:
        if re.search(rf'\b{kw}\b', lower_text):
            return True
    return False

def fuzzy_match_locality(token: str, known_localities: list[str], threshold: float = 75.0) -> str | None:
    """
    Fuzzy match a token against known localities using Jaro-Winkler or WRatio.
    Returns the matched locality if score >= threshold, else None.
    """
    if not token or not known_localities:
        return None
        
    # We use WRatio to handle minor differences like spaces and case
    match = process.extractOne(token, known_localities, scorer=fuzz.WRatio, processor=utils.default_process)
    if match and match[1] >= threshold:
        return match[0]
    return None
