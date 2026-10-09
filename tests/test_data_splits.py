import os
import pandas as pd

def test_splits_are_group_disjoint():
    train_path = os.path.join("data", "processed", "train.csv")
    val_path = os.path.join("data", "processed", "val.csv")
    test_path = os.path.join("data", "processed", "test.csv")
    
    assert os.path.exists(train_path), "Train CSV missing"
    assert os.path.exists(val_path), "Val CSV missing"
    assert os.path.exists(test_path), "Test CSV missing"
    
    train_df = pd.read_csv(train_path)
    val_df = pd.read_csv(val_path)
    test_df = pd.read_csv(test_path)
    
    # Verify no overlap in group keys (building and landmark combinations)
    train_bldgs = set(train_df['building'].dropna().values)
    val_bldgs = set(val_df['building'].dropna().values)
    test_bldgs = set(test_df['building'].dropna().values)
    
    assert len(train_bldgs.intersection(val_bldgs)) == 0, "Train and Val have overlapping buildings"
    assert len(train_bldgs.intersection(test_bldgs)) == 0, "Train and Test have overlapping buildings"
    assert len(val_bldgs.intersection(test_bldgs)) == 0, "Val and Test have overlapping buildings"
    
    train_lmarks = set(train_df['landmark'].dropna().values)
    val_lmarks = set(val_df['landmark'].dropna().values)
    test_lmarks = set(test_df['landmark'].dropna().values)
    
    def filter_confusers(lmarks):
        landmark_types = ['Near', 'Opposite', 'Behind', 'Beside', 'Next to']
        names = ['Temple', 'School', 'Hospital', 'Bank', 'Park', 'Metro Station', 'Bus Stop', 'Mall', 'Market', 'Plaza', 'Square', 'Center', 'Point', 'Gate']
        valid_lmarks = {f"{ltype} {name}" for name in names for ltype in landmark_types}
        return {lm for lm in lmarks if lm in valid_lmarks}
    
    train_lmarks = filter_confusers(train_lmarks)
    val_lmarks = filter_confusers(val_lmarks)
    test_lmarks = filter_confusers(test_lmarks)
    
    assert len(train_lmarks.intersection(val_lmarks)) == 0, "Train and Val have overlapping landmarks"
    assert len(train_lmarks.intersection(test_lmarks)) == 0, "Train and Test have overlapping landmarks"
    assert len(val_lmarks.intersection(test_lmarks)) == 0, "Val and Test have overlapping landmarks"
    
    # Verify expected counts
    assert len(train_df) > 0
    assert len(val_df) > 0
    assert len(test_df) > 0

if __name__ == "__main__":
    test_splits_are_group_disjoint()
    print("Test passed: Data splits are group-disjoint.")
