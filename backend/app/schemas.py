from pydantic import BaseModel, Field
from typing import List, Optional, Literal

class AddressComponent(BaseModel):
    label: str
    value: str
    type: Literal["unit", "locality", "road", "city", "district", "state", "pincode", "landmark"]

class NormalizationResult(BaseModel):
    raw: str
    normalized: str
    components: List[AddressComponent]

# Future types will be added here
