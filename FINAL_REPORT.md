# AI-Powered Delivery Post Office Identification System (PostRoute AI)
**Final Year Engineering Project Report**
*D. Y. Patil College of Engineering, Akurdi (SPPU) - Department of Information Technology*

## 1. Abstract
The "AI-Powered Delivery Post Office Identification System" (PostRoute AI) is designed to resolve ambiguities in poorly formatted, handwritten, or incomplete delivery addresses. By leveraging Natural Language Processing (NLP) and Machine Learning (ML), the system accurately predicts the correct delivery post office and PIN code, reducing manual sorting errors and accelerating parcel routing.

## 2. System Architecture
The system employs a modern decoupled architecture:
*   **Frontend**: React (Vite) + TanStack Start, providing a responsive dashboard for operators to review flagged parcels.
*   **Backend**: FastAPI (Python), serving REST endpoints for address prediction, configuration, and review queues.
*   **Database**: SQLite via SQLAlchemy, storing Post Office records, prediction histories, and historical mapping changes.
*   **ML Pipeline**: Scikit-Learn based TF-IDF feature extraction coupled with a Calibrated Linear Support Vector Classifier (LinearSVC).

## 3. Data Pipeline & Processing
*   **Data Source**: Clean post office directory containing metadata (Name, Pincode, District, State, Region).
*   **Synthetic Generation**: To simulate real-world noise, a synthetic address generator applies realistic perturbations (typos, abbreviations, missing PINs, incorrect landmarks).
*   **Data Integrity**: Group-based splitting ensures that specific geographic localities are disjoint across training and test sets, strictly preventing data leakage.

## 4. Machine Learning Model
The ML pipeline explicitly models PINs and text:
1.  **Normalization**: Custom heuristics expand abbreviations (e.g., "rd" -> "Road") and extract structural tokens (Unit, Locality, City, PIN).
2.  **Feature Extraction (`TextPINExtractor`)**: A custom scikit-learn transformer intercepts explicit 6-digit PINs and injects them as structural features for the TF-IDF vectorizer.
3.  **Classifier**: `CalibratedClassifierCV` wraps a `LinearSVC`, offering robust probability distributions required for the auto-routing threshold.

### Evaluation Metrics (Synthetic Dataset)
*   **Top-1 Accuracy**: 92.2% (vs 39.7% Baseline)
*   **Top-3 Accuracy**: 98.9%
*   **Expected Calibration Error (ECE)**: 0.2326
*   **Auto-Route Threshold Analysis**: At a 0.85 confidence threshold, the system auto-routes ~23.5% of parcels with a 99.57% accuracy rate, pushing the rest to the manual review queue.

## 5. Conflict Resolution & Mapping
The system elegantly handles edge cases:
*   **PIN Locality Mismatch**: If an explicit PIN contradicts the textual locality prediction, it flags the prediction with `pin_locality_mismatch` and routes it to manual review.
*   **Historical Mapping Changes**: Simulated historical merges (e.g., Kothrud S.O merging) are detected. Outdated predictions are automatically rewritten to the new authoritative mapping.

## 6. API Endpoints
*   `GET /api/config`: Fetches the auto-route and review floor thresholds.
*   `POST /api/predict`: Normalizes address, runs ML inference, applies mapping conflicts, and saves to DB.
*   `GET /api/review-queue`: Fetches flagged predictions (low confidence, mismatches).
*   `POST /api/review/{id}/resolve`: Allows an operator to manually approve, correct, or reject a flagged parcel.
*   `GET /api/mapping-changes`: Surfacing historical mapping merges.

## 7. Future Scope
*   Integration with Live India Post APIs for real-time tracking.
*   Migration to a robust RDBMS (PostgreSQL) and scalable deployment (AWS/Docker).
*   Collection of an organic dataset of real handwritten addresses (`realistic_test.csv`) to further refine hyperparameter tuning.
