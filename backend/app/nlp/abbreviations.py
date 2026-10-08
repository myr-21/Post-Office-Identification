import re

EXPANSIONS = {
    'rd': 'Road', 'rd.': 'Road',
    'hse': 'House', 'h.no': 'House', 'hno': 'House', 'no': 'No',
    'nr': 'Near', 'nr.': 'Near',
    'opp': 'Opposite', 'opp.': 'Opposite', 'oppst': 'Opposite',
    'soc': 'Society', 'soc.': 'Society',
    'apt': 'Apartment', 'apt.': 'Apartment', 'apts': 'Apartments',
    'blk': 'Block',
    'ngr': 'Nagar',
    'mh': 'Maharashtra', 'maha': 'Maharashtra',
    'pn': 'Pune',
    'bk': 'Budruk', 'bk.': 'Budruk',
    'flr': 'Floor',
    'wkd': 'Wakad',
    'blwadi': 'Balewadi',
    'pcmc': 'Pimpri Chinchwad',
    'bldg': 'Building',
    'rm': 'Room',
    'st': 'Street'
}

def expand_abbreviations(text: str) -> str:
    if not text:
        return text
    
    # Clean multiple spaces and punctuation
    text = re.sub(r'\s+', ' ', text)
    
    tokens = text.split(' ')
    expanded = []
    
    for token in tokens:
        clean_token = token.lower().strip(',.')
        if clean_token in EXPANSIONS:
            # Preserve trailing comma if any
            suffix = ',' if token.endswith(',') else ''
            expanded.append(EXPANSIONS[clean_token] + suffix)
        else:
            expanded.append(token)
            
    return ' '.join(expanded)

def extract_pincode(text: str) -> str | None:
    # Look for 6 consecutive digits that do not start with 0 (Indian PIN codes don't start with 0)
    match = re.search(r'\b[1-9][0-9]{5}\b', text)
    if match:
        return match.group(0)
    return None
