# Object Diagram

```mermaid
classDiagram
    object PredictionInstance {
        id = "PR-12345"
        raw_address = "bnaer, pne, 411045"
        normalized_address = "Baner Pune 411045"
        district = "Pune"
        state = "Maharashtra"
        pincode = "411045"
        post_office = "Baner S.O"
        confidence = 0.65
        operator = "System"
        status = "needs_review"
        created_at = "2026-10-09T10:00:00Z"
    }

    object ReviewItemInstance {
        id = "REV-67890"
        prediction_id = "PR-12345"
        priority = "high"
        reason = "low_confidence"
        status = "pending"
        created_at = "2026-10-09T10:00:01Z"
    }

    object PostOfficeInstance {
        id = "PO-411045-baner"
        name = "Baner S.O"
        pincode = "411045"
        district = "Pune"
        state = "Maharashtra"
        region = "Pune Region"
        division = "Pune City West"
        status = "active"
        mappingVersion = "V1"
    }

    PredictionInstance -- ReviewItemInstance : triggers >
    PredictionInstance -- PostOfficeInstance : predicts >
```
