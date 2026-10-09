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

class AddressInput(BaseModel):
    rawAddress: str
    state: Optional[str] = None
    district: Optional[str] = None
    pincode: Optional[str] = None
    mode: Literal["automatic", "assisted"] = "automatic"

class ReviewDecision(BaseModel):
    decision: Literal["approve", "correct", "reject", "escalate"]
    correctedPincode: Optional[str] = None
    correctedPostOffice: Optional[str] = None
    reason: Optional[str] = None
