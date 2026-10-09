# Data Provenance & Processing

## 1. Raw Data (`data/raw/pincode_directory.csv`)
The file `pincode_directory.csv` claims to be a subset of the official "All India Pincode Directory" from data.gov.in. 
However, **it is only a small snippet of 114 rows** covering specific delivery post offices in the Pune region and neighbouring areas.
It is completely static, and the exact query or filters used to export this snippet were not documented by the original authors. It does not contain latitude/longitude coordinates.

If you need the full dataset for production, download it from [data.gov.in (All India Pincode Directory)](https://data.gov.in/resource/all-india-pincode-directory) or the CivicDataLab CKAN mirror, replace `data/raw/pincode_directory.csv`, and rerun the processing script.

## 2. Processed Data (`data/processed/post_offices.csv`)
The `data/build_post_offices.py` script normalises the raw CSV and filters it to Maharashtra delivery offices in target districts (primarily Pune), resulting in 110 unique offices across 51 PIN codes.

**Important Data Adjustments:**
- **Lat/Lon Coordinates:** The original raw data lacks geospatial coordinates. Earlier versions of this system populated every office with the exact same coordinates (the centre of Pune). This has been removed. Latitude and Longitude are now left null (`''`) so that the UI can gracefully disable map markers rather than showing fake, identical locations.

## 3. Synthetic Address Generation (`data/generate_synthetic_addresses.py`)
Because real, noisy, handwritten Indian addresses contain PII and are not publicly available, we generate a synthetic dataset for model training.

**Group-Based Splitting:** 
To prevent data leakage during model training, the synthetic dataset is split into `train`, `val`, and `test` based on **group keys** (e.g., the specific building/landmark template). This ensures that if a model sees "Flat 101, Crystal Tower" in training, it does not see "Flat 102, Crystal Tower" in testing, which forces it to actually learn locality mapping rather than memorising buildings.
