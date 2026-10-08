import re
from typing import List, Dict

def extract_unit(text: str) -> str | None:
    match = re.search(r'\b(flat|hse|house|plot|shop|room|rm|block|apt|apartment)\s*\.?\s*(no\.?)?\s*[\w\-\/]+\b', text, re.IGNORECASE)
    if match:
        return match.group(0)
    return None

def extract_road(text: str) -> str | None:
    # Look for patterns ending with road, rd, marg, path, lane, street, st
    match = re.search(r'\b[\w\s]+\b\s+(road|rd|marg|path|lane|street|st)\b', text, re.IGNORECASE)
    if match:
        return match.group(0)
    return None

def extract_landmark(text: str) -> str | None:
    # Extract anything starting with near, opp, behind, etc. up to a comma or end
    match = re.search(r'\b(near|opp|opposite|behind|beside|adj|adjacent)\b[^,]*', text, re.IGNORECASE)
    if match:
        return match.group(0)
    return None
