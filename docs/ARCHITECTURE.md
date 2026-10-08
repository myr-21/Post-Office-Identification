# PostRoute AI Architecture

## Overview
PostRoute AI is an AI-powered Delivery Post Office Identification System. It predicts the correct PIN code and delivery post office from incomplete or noisy Indian address text. It features a React-based frontend and a Python/FastAPI backend with a machine learning model.

---

## 1. System Architecture

```mermaid
graph TD
    UI[Frontend: React + Tailwind v4 + TanStack]
    API[Backend: FastAPI]
    DB[(SQLite/PostgreSQL)]
    NLP[NLP Module]
    ML[ML Pipeline: TF-IDF + Logistic Regression]

    UI -->|HTTP POST /api/predict| API
    API --> NLP
    NLP -->|NormalizationResult| ML
    ML -->|Top 3 Predictions| API
    API --> DB
    API -->|Prediction JSON| UI
```

---

## 2. API Flow

```mermaid
sequenceDiagram
    participant Operator
    participant UI as Frontend
    participant API as FastAPI Backend
    participant NLP as Preprocessing
    participant ML as ML Model
    participant DB as Database

    Operator->>UI: Enters raw address
    UI->>API: POST /api/predict {rawAddress}
    API->>NLP: normalize_address(rawAddress)
    NLP-->>API: NormalizationResult
    API->>ML: predict(NormalizationResult)
    ML-->>API: Top 3 Candidates
    API->>API: Adapt for Merges & Calculate Status
    API->>DB: Insert Prediction & ReviewItem (if needed)
    DB-->>API: Saved Models
    API-->>UI: Prediction JSON
    UI-->>Operator: Display Result & Badges
```

---

## 3. Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    CONFIG {
        int id PK
        float auto_route_threshold
        float review_floor
    }
    
    PREDICTIONS {
        string id PK
        datetime created_at
        string raw_address
        string normalized_address
        string pincode
        string post_office
        string district
        string state
        float confidence
        string status
        string operator
    }
    
    REVIEW_ITEMS {
        string id PK
        string prediction_id FK
        string priority
        string reason
        string status
        datetime created_at
    }

    PREDICTIONS ||--o| REVIEW_ITEMS : "has"
```
