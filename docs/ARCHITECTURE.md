# Architecture Document

## Modules and Interfaces
- **Frontend (React/TanStack)**: Provides the user interface for operators to submit addresses and review flagged items. Interfaces with the backend via REST API.
- **Backend (FastAPI)**: Exposes endpoints for prediction, config, and review management.
- **NLP Normalization**: Cleanses raw text, extracts structural features (PIN, Locality, City).
- **ML Predictor**: Uses TF-IDF and Logistic Regression to predict the post office ID based on textual features.
- **Merge Handler**: Intercepts historical PIN/Locality changes and rewrites outdated predictions to their new authoritative mappings.
- **Database (SQLite)**: Persists `PostOffice` directories, `Prediction` histories, and `ReviewItem` queues.

## Design Decisions
1. **TF-IDF + Logistic Regression (LinearSVC)**: Chosen over deep learning because it handles character-level phonetic misspellings (e.g. `Bnaer` vs `Baner`) efficiently, computes in milliseconds, and fits hardware constraints without GPUs.
2. **SQLite Default**: Simplifies deployment and initialization for a final year project demo without requiring a heavy Postgres docker setup.
3. **Merge Layer Separation**: The merge layer is separated from the ML model so that the model doesn't need constant retraining every time a post office closes or merges. Historical weights remain valid, and the merge layer acts as an authoritative proxy.

## Requirement-to-Module Traceability
- **Address Submission**: Frontend `predictAddress` -> Backend `POST /api/predict`.
- **Prediction Accuracy**: NLP Normalization + ML Predictor.
- **Historical PIN Updates**: Merge Handler + `mapping_changes.csv`.
- **Manual Review**: Frontend Review Queue -> Backend `GET /api/review-queue` and `POST /api/review/{id}/resolve`.
