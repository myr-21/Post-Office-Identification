import os
import sys
import pandas as pd

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../backend')))
from app.db.database import SessionLocal
from app.db import models

def main():
    print("Seeding database...")
    db = SessionLocal()
    
    path = os.path.join("data", "processed", "post_offices.csv")
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
        
    df = pd.read_csv(path)
    
    added = 0
    for _, row in df.iterrows():
        # Check if exists
        exists = db.query(models.PostOffice).filter(models.PostOffice.id == row['id']).first()
        if not exists:
            lat = row['latitude'] if pd.notna(row['latitude']) and str(row['latitude']).strip() != '' else None
            lon = row['longitude'] if pd.notna(row['longitude']) and str(row['longitude']).strip() != '' else None
            
            po = models.PostOffice(
                id=str(row['id']),
                name=str(row['name']),
                pincode=str(row['pincode']),
                district=str(row['district']),
                state=str(row['state']),
                region=str(row['region']),
                division=str(row['division']),
                latitude=float(lat) if lat is not None else None,
                longitude=float(lon) if lon is not None else None,
                status=str(row['status']),
                mappingVersion=str(row['mappingVersion'])
            )
            db.add(po)
            added += 1
            
    db.commit()
    print(f"Added {added} post offices.")
    
if __name__ == "__main__":
    main()
