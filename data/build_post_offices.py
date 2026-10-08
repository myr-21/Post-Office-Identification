import os
import pandas as pd
import hashlib

def generate_stable_id(row):
    # Create a stable ID based on pin and office name to handle updates
    base_string = f"{row['pincode']}_{row['officename']}".lower().encode('utf-8')
    return f"PO-{row['pincode']}-{hashlib.md5(base_string).hexdigest()[:6]}"

def main():
    raw_path = os.path.join("data", "raw", "pincode_directory.csv")
    out_path = os.path.join("data", "processed", "post_offices.csv")
    
    if not os.path.exists(raw_path):
        print(f"Error: {raw_path} not found.")
        print("Please run scripts/fetch_pincodes.py and follow instructions.")
        return

    print("Loading raw dataset...")
    df = pd.read_csv(raw_path, encoding='latin1', dtype=str)
    
    # Standardise column names (lowercase, remove spaces)
    df.columns = [c.strip().lower().replace(" ", "") for c in df.columns]
    
    print(f"Initial row count: {len(df)}")
    
    # Filter to Maharashtra
    df = df[df['statename'].str.lower() == 'maharashtra']
    
    # Filter to specific districts
    target_districts = ['pune', 'satara', 'ahmednagar', 'raigarh', 'solapur', 'thane', 'mumbai', 'mumbai suburban']
    df = df[df['districtname'].str.lower().isin(target_districts)]
    
    # Filter to Delivery offices
    df = df[df['delivery'].str.lower() == 'delivery']
    
    # Deduplicate
    df = df.drop_duplicates(subset=['officename', 'pincode'])
    
    # Generate stable IDs
    df['id'] = df.apply(generate_stable_id, axis=1)
    
    # Keep and rename necessary columns
    # We want: id, name, pincode, district, state, region, division, status, mappingVersion, latitude, longitude
    # Some of these might not exist in the raw dataset, so we fill with defaults where appropriate
    
    cols_to_keep = {
        'id': 'id',
        'officename': 'name',
        'pincode': 'pincode',
        'districtname': 'district',
        'statename': 'state',
        'regionname': 'region',
        'divisionname': 'division'
    }
    
    out_df = pd.DataFrame()
    for raw_col, new_col in cols_to_keep.items():
        if raw_col in df.columns:
            out_df[new_col] = df[raw_col]
        else:
            out_df[new_col] = ''
    
    out_df['status'] = 'active'
    out_df['mappingVersion'] = 'V1'
    
    # Mock lat/lon as we don't have it in the standard dataset reliably
    out_df['latitude'] = 18.5204
    out_df['longitude'] = 73.8567
    
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    out_df.to_csv(out_path, index=False)
    
    print("\n--- Processing Summary ---")
    print(f"Total delivery post offices: {len(out_df)}")
    print(f"Unique PIN codes: {out_df['pincode'].nunique()}")
    
    offices_per_pin = out_df.groupby('pincode').size()
    print(f"Avg offices per PIN: {offices_per_pin.mean():.2f}")
    print(f"Max offices per PIN: {offices_per_pin.max()}")
    print(f"\nSaved to: {out_path}")

if __name__ == "__main__":
    main()
