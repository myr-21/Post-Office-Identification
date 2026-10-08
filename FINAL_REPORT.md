# PostRoute AI - Final Report

## Project Status

The "AI-Powered Delivery Post Office Identification System" (PostRoute AI) has been fully implemented spanning 10 phases. The frontend is built on React 19 + TanStack, and the backend is powered by FastAPI + Scikit-Learn.

## How to Start the App

### Option 1: Local Development

1. **Start the Backend**

   ```bash
   cd backend
   pip install -r requirements.txt
   PYTHONPATH=. uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Start the Frontend**
   ```bash
   # In another terminal at the project root
   bun install
   cp .env.example .env # Ensure VITE_API_URL=http://localhost:8000 and VITE_USE_MOCK=false
   bun run dev
   ```

### Option 2: Docker

We provide a `backend/Dockerfile` that containerizes the FastAPI app and model. You can build and run it using:

```bash
docker build -t postroute-backend ./backend
docker run -p 8000:8000 postroute-backend
```

## Running Tests

- **Frontend**: Run `bun run lint` and `bun run build` to verify type safety and syntax.
- **Backend**: Run `pytest tests/` from the project root. This runs:
  - `test_nlp.py`: Exhaustive validation of the normalization, abbreviation expansion, and fuzzy matching.
  - `test_merge.py`: Validation of the PIN mapping adapter.
  - `test_data_splits.py`: Verifies synthetic dataset splits do not leak.

## How Data Flows

1. User inputs a raw address string in the frontend.
2. The frontend sends a `POST /api/predict` request to the backend.
3. The backend routes the string through `normalize_address()` to expand abbreviations, extract components, and fuzzy match localities.
4. The normalized text is passed to the ML Pipeline (Character N-Gram TF-IDF + Logistic Regression) which outputs top 3 predictions with probabilities.
5. The `adapt_prediction` module checks if the predicted PIN has been merged or deprecated in the mapping history. If so, it replaces it and alerts the operator.
6. The prediction is evaluated against thresholds (retrieved from `GET /api/config`). If below thresholds, it gets flagged for review.
7. Results are logged to the SQLite database and returned to the UI.

## Manual Steps Reminder

- If you intend to use the full India Post dataset, please remember to download it from `data.gov.in` and place it at `data/raw/pincode_directory.csv` as per the initial manual instructions, then re-run `python data/build_post_offices.py` and `python scripts/train_model.py`.

## Audit Checklist

- [x] UI and backend cleanly separated via REST API
- [x] Thresholds loaded dynamically from the backend configuration
- [x] Exhaustive NLP tests implemented
- [x] High-performance ML pipeline trained
- [x] Clean commit history and documentation
