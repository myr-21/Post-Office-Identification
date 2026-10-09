# PostRoute AI: AI-Powered Delivery Post Office Identification System

PostRoute AI is an intelligent address resolution and routing system designed for internal use by post-office staff. It predicts the correct PIN code and delivery post office from incomplete, noisy, or handwritten-transcribed Indian address text. It features confidence scoring and auto-routes low-confidence predictions to an operator review queue. It also adapts to historical PIN code merges to gracefully handle deprecated PIN codes.

This is a final-year engineering project for D. Y. Patil College of Engineering, Akurdi (SPPU), Dept. of Information Technology.

---

## Honest Implementation Status (Phase 0)

Currently, the project is a **prototype** under active development.
- **Data Coverage**: Restricted to a subset of the Pune region (110 post offices across 51 unique PINs).
- **ML Performance**: The model currently achieves high accuracy *only* on a synthetic test set. Real-world handwritten accuracy is untested. The confidence calibration requires improvement, as current logic uses heuristic boosting.
- **Database**: Uses SQLite by default. PostgreSQL is supported via environment variables but is not the default.
- **PIN Merges**: Simulated for demonstration purposes (India Post merge history is not public).
- **Deployment**: The current public demo on Vercel runs entirely in **Mock Mode**, using static mock data without hitting the ML backend.

## Tech Stack & Architecture

**Frontend**:
- React 19, TanStack Start (SSR via Nitro), TanStack Router, TanStack Query
- Tailwind CSS v4, shadcn/ui, Recharts
- Build Tool: Vite 8, Bun

**Backend**:
- FastAPI (Python 3.13), Uvicorn, Pydantic
- SQLAlchemy + Alembic (Default: SQLite)
- NLP & ML: scikit-learn (TF-IDF + Logistic Regression), RapidFuzz, Pandas

**Architecture**:
The system is divided into an SSR frontend that communicates with a FastAPI Python backend. The backend manages the SQLite database (for predictions, merges, and review items) and serves the ML model predictions. Low-confidence predictions (below `AUTO_ROUTE_THRESHOLD`) are flagged for human review in the database.

## Prerequisites

- **Frontend**: Bun (v1.1+)
- **Backend**: Python 3.13+, optionally Docker & Docker Compose

## Local Development Setup

### 1. Backend (FastAPI + ML)

Navigate to the repository root:
```bash
# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate # Mac/Linux

# Install requirements
pip install -r requirements.txt

# Run database migrations (SQLite by default)
cd backend
alembic upgrade head
cd ..

# Start the server (runs on http://localhost:8000)
uvicorn backend.app.main:app --reload --port 8000
```

### 2. Frontend (React + TanStack Start)

In a new terminal at the repository root:
```bash
# Install dependencies
bun install

# Configure environment variables
cp .env.example .env

# Start the development server (runs on http://localhost:5173)
bun run dev
```

> **Note**: To connect the frontend to the real backend, ensure `VITE_USE_MOCK=false` in your `.env` file. If `VITE_USE_MOCK=true`, the frontend will use static prototype data.

## Docker Compose Setup

*Docker compose setup is currently planned for a future phase and is not fully implemented.* 
Once implemented, you will be able to start the full stack using:
```bash
docker-compose up --build
```

## Environment Variables

Copy `.env.example` to `.env`. Key variables include:

- `VITE_API_URL`: The URL of the FastAPI backend (e.g., `http://localhost:8000`).
- `VITE_USE_MOCK`: Set to `true` to use mock data, `false` to hit the real API.
- `DATABASE_URL`: Connection string for SQLAlchemy (defaults to `sqlite:///./backend/data/app.db`).
- `AUTO_ROUTE_THRESHOLD`: Float (e.g. `0.85`), confidence required to bypass human review.
- `REVIEW_FLOOR`: Float (e.g. `0.55`), minimum confidence to display; below this is considered a complete failure.
- `CORS_ORIGINS`: Comma-separated list of allowed origins.

## How to Train & Evaluate the Model

The ML pipeline scripts are located in the `scripts/` directory. They must be run from the repository root.

```bash
# Train the model (reads from data/ and saves to models/)
python scripts/train_model.py

# Evaluate the model (generates metrics in models/metrics.json)
python scripts/evaluate_model.py
```

## Running Tests

*Testing infrastructure is currently partial. Full test coverage will be added in upcoming phases.*

```bash
# Run Python backend tests
pytest tests/
```

## API Endpoints (Partial List)

- `GET /health` - System health check
- `GET /api/config` - Get system configuration thresholds
- `POST /api/predict` - Submit an address for prediction
- `GET /api/review-queue` - Fetch items pending human review
- *(More endpoints planned in Phase 3)*

## Project Structure

```
├── backend/
│   ├── alembic/       # Database migrations
│   └── app/           # FastAPI application (api, db, ml, nlp)
├── data/              # Raw and processed CSV datasets
├── models/            # Serialized ML models (.pkl) and metrics
├── scripts/           # Training and evaluation scripts
├── src/               # Frontend source code (React + TanStack)
├── tests/             # Pytest test suite
├── .env.example       # Example environment variables
└── README.md          # This file
```

## Limitations & Scope

- **Data**: The model is trained on a synthetic subset of 110 post offices in the Pune region. Accuracy on real-world, handwritten data is currently unknown.
- **PIN Merges**: The merge history is simulated since actual India Post merge data is not publicly available.
- **Vercel Demo**: The live deployment is locked to "Mock Mode" and does not run the ML backend.
- **Costs**: The project is strictly built using zero-cost, open-source, CPU-only tools. No external paid APIs (like Google Maps or OpenAI) are used.
