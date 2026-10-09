# Model Evaluation Report

## Synthetic Data (Generated with systematic noise)
- **Top-1 Accuracy:** 0.9222
- **Top-3 Accuracy:** 0.9899
- **Top-5 Accuracy:** 0.9909
- **Macro F1:** 0.9218
- **Weighted F1:** 0.9218
- **PIN-level Accuracy:** 0.9384
- **Expected Calibration Error (ECE):** 0.2326
- **Avg Latency per Prediction:** 0.33 ms

### Baseline vs ML Model
| Model | Top-1 Accuracy |
|---|---|
| Baseline Heuristic | 0.3970 |
| TF-IDF ML Model | 0.9222 |

### Accuracy by Noise Level
- High: 0.8697
- Low: 0.9399
- Clean: 0.9911
- Medium: 0.9004

### Auto-Route Threshold Analysis
| Threshold | Route Rate | Accuracy on Routed |
|---|---|---|
| 0.5 | 80.20% | 96.73% |
| 0.6 | 72.42% | 97.91% |
| 0.7 | 62.83% | 98.39% |
| 0.8 | 43.43% | 99.30% |
| 0.85 | 23.54% | 99.57% |
| 0.9 | 11.31% | 100.00% |
| 0.95 | 0.00% | 0.00% |

*(Threshold of 0.85 is chosen to balance high auto-route rate with >95% accuracy on routed cases)*

## Realistic Handwritten Data
> NOT YET EVALUATED - awaiting data/realistic_test.csv
