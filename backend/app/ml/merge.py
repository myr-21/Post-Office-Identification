from typing import List, Dict, Any, Tuple
from app.schemas import NormalizationResult

def adapt_prediction(
    norm_result: NormalizationResult,
    top_3_preds: List[Dict[str, Any]],
    merges_dict: Dict[str, str],
    offices_df=None
) -> Tuple[List[Dict[str, Any]], bool]:
    """
    Adapts predictions if an office/PIN has been merged.
    merges_dict: Dict mapping old_office_id -> new_office_id.
    offices_df: DataFrame of current post offices to lookup new details (optional, but needed for full detail replacement).
    """
    updated_preds = []
    was_merged = False
    
    for pred in top_3_preds:
        # We assume pred contains an 'id' or we match by 'postOffice' / 'pincode' combo
        # For simplicity, if we have the office_id we can just map it.
        # But our current predict output doesn't include the raw office ID, let's inject it.
        office_id = pred.get('id')
        if not office_id:
            # Reconstruct dummy id or assume postOffice string if id is missing
            office_id = f"PO-{pred['pincode']}-{pred['postOffice'].lower().replace(' ', '')}"
            
        if office_id in merges_dict:
            was_merged = True
            new_id = merges_dict[office_id]
            
            # If we have offices_df, fetch the new details
            if offices_df is not None and new_id in offices_df.index:
                new_office = offices_df.loc[new_id]
                updated_preds.append({
                    "rank": pred['rank'],
                    "id": new_id,
                    "postOffice": new_office['name'],
                    "pincode": new_office['pincode'],
                    "district": new_office['district'],
                    "state": new_office['state'],
                    "confidence": pred['confidence'], # keeping original confidence
                    "merged_from": office_id
                })
            else:
                # Fallback if no office lookup is provided
                updated_preds.append({
                    "rank": pred['rank'],
                    "id": new_id,
                    "postOffice": "Merged Office",
                    "pincode": "Updated PIN",
                    "district": pred['district'],
                    "state": pred['state'],
                    "confidence": pred['confidence'],
                    "merged_from": office_id
                })
        else:
            updated_preds.append(pred)
            
    return updated_preds, was_merged
