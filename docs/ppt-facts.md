# PPT Presentation Facts & Demo Script

## Fast Facts for Slides
- **Project Name**: AI-Powered Delivery Post Office Identification System (PostRoute AI)
- **Dataset (Pune Subset)**: 110 Delivery Post Offices.
- **Synthetic Training Size**: 3,921 noisy address permutations.
- **Algorithm Choice**: TF-IDF (Character N-Grams) + Calibrated Linear Support Vector Classifier (LinearSVC).
- **Why LinearSVC?**: Neural networks (LLMs) are overkill and slow. TF-IDF effortlessly captures phonetic misspellings (e.g. `Bnaer` -> `Baner`), computes in milliseconds, and fits in limited academic hardware.
- **Top-1 Accuracy**: 92.2% (Compared to a 39.7% baseline fuzzy-string match).
- **Auto-Route Success**: 99.57% accuracy for parcels automatically routed above the 0.85 threshold limit.
- **Tech Stack**: React, Vite, TanStack (Frontend) + Python, FastAPI, scikit-learn, SQLite (Backend).
- **Test Coverage**: Fully integrated `pytest` testing for ML evaluation, normalizers, and API REST endpoints.

## Step-by-Step Viva Demo Script

**Scenario 1: Clean Auto-Route**
- *Input*: `Flat 402, Baner Road, Pune 411045`
- *Expected Output*: Predicts `Baner S.O` with 98% confidence. Status -> `auto_approved`.

**Scenario 2: Typo-Heavy Auto-Route**
- *Input*: `Bnaer opposit Dmart pne 411045`
- *Expected Output*: Predicts `Baner S.O` with ~88% confidence. Status -> `auto_approved`. Demonstrates phonetic robustness of TF-IDF.

**Scenario 3: Low-Confidence -> Review**
- *Input*: `Some random shop near temple Pune`
- *Expected Output*: Predicts a random office but with ~30% confidence. Status -> `needs_review`.

**Scenario 4: Wrong PIN -> Review (Mismatch)**
- *Input*: `Baner Road Pune 411038`
- *Expected Output*: ML model confidence is artificially suppressed due to `TextPINExtractor` collision. Status -> `needs_review` with reason `pin_locality_mismatch`.

**Scenario 5: Simulated Merge Conflict**
- *Input*: `Kothrud Pune 411038`
- *Expected Output*: Model predicts `Kothrud (411038)`. Interceptor detects historical merge and rewrites to `A.R. Shala S.O (411004)`. Status -> `needs_review` with reason `mapping_conflict`.

**Scenario 6: Pure Gibberish (Validation Error)**
- *Input*: `abc`
- *Expected Output*: UI/API throws a Validation Error: "Address is too short to analyze".
