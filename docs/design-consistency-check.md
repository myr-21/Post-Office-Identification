# Design Consistency Check

## 1. Use Case Diagram
- **Actors**: Operator, Admin, System (Mapped to concepts in `src/services/postroute.ts`).
- **Use Cases**: Submit Address (maps to `POST /api/predict`), Review Prediction (maps to `POST /api/review/{id}/resolve`). All valid and implemented.

## 2. Class Diagram
- **Prediction**: Matches `Prediction` table in `backend/app/db/models.py`.
- **ReviewItem**: Matches `ReviewItem` table in `backend/app/db/models.py`.
- **PostOffice**: Matches `PostOffice` table in `backend/app/db/models.py`.
- **SystemConfig**: Matches `Config` table in `backend/app/db/models.py`.
- **ReviewDecision**: Matches `ReviewDecision` pydantic model in `backend/app/schemas.py`.

## 3. Object Diagram
- Concrete values match the real output produced by `POST /api/predict` when given noisy input.

## 4. Sequence Diagrams
- **Predict Flow**: Accurately maps the transition from `backend/app/main.py` -> `normalize_address` -> `get_predictions` -> `adapt_prediction`.
- **Review Flow**: Accurately maps `resolve_review` in `backend/app/main.py`.

## 5. Activity Diagram
- Matches the if/else logic in `backend/app/main.py` (`predict_address` function).

## 6. ER Diagram
- Strictly matches SQLAlchemy models. Foreign keys (like `prediction_id` in `ReviewItem`) accurately reflect the one-to-many / one-to-one mapping.

## 7. Component Diagram
- Correctly outlines React + FastAPI + SQLite + Pickled Scikit-Learn model.

**Mismatch Report**:
- **Zero Mismatches**. The design diagrams perfectly reflect the final shipped code architecture!
