# PostRoute AI (AI-Powered Delivery Post Office Identification System)

## Overview

PostRoute AI is an intelligent system designed to predict the correct PIN code and delivery post office from incomplete or noisy Indian address text. It adapts when India Post merges PIN codes, calculates a confidence score for each prediction, and routes low-confidence cases to a staff review queue. The primary users are post-office staff and operators.

## Architecture (4 Layers)

1. **Frontend**: React 19, TanStack Start/Router, Tailwind v4, shadcn/ui.
2. **Backend**: FastAPI (Python), RESTful API, PostgreSQL database.
3. **NLP Preprocessing**: Normalization, fuzzy matching, abbreviation expansion, component extraction.
4. **Machine Learning Model**: TF-IDF n-grams + LogisticRegression (or equivalent) for predicting delivery post offices, with a fallback baseline heuristic.

## Tech Stack

- Frontend: React 19, bun, Vite, TanStack
- Backend: Python 3.10+, FastAPI, SQLAlchemy, Alembic
- ML/NLP: scikit-learn, rapidfuzz, pandas
- Infrastructure: Docker, Docker Compose

## Setup Instructions

### Environment Variables

Copy `.env.example` to `.env` and adjust the values as needed.

### Running Locally with Docker

```bash
docker compose up --build
```

This will start the PostgreSQL database, the FastAPI backend, and the React frontend.

## Project Structure

- `src/` - Frontend codebase
- `backend/` - FastAPI and ML backend
- `data/` - Raw and processed datasets
- `ml_artifacts/` - Trained models and evaluation metrics
- `docs/` - System documentation, UML diagrams, evaluation reports

## How to Run Tests

**Backend Tests:**

```bash
cd backend
pytest
```

**Frontend Lint/Build:**

```bash
bun run lint
bun run build
```

## Screenshots

_(Placeholder for screenshots)_

## Implementation Status

- Phase 1: Repo hygiene & config - **In Progress**
- Phase 2: Data generation - Planned
- Phase 3: NLP module - Planned
- Phase 4: ML model - Planned
- Phase 5: Merge handler - Planned
- Phase 6: Database + FastAPI - Planned
- Phase 7: Frontend integration - Planned
- Phase 8: Tests, CI, Docker - Planned
- Phase 9: Design documentation - Planned
- Phase 10: Final deliverables - Planned
