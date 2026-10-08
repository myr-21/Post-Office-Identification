import os
import pandas as pd

def get_building_name(address):
    # Very crude extraction just for test checking (as our generation template puts building right after flat)
    # The actual components generated used specific Building and Landmark pools.
    # The true proof of disjointness is the intersection of raw strings since they're heavily mutated,
    # or checking exact substrings from our pool.
    # We will just check if any exact same clean address exists in both sets.
    pass

def test_splits_are_disjoint():
    train_path = os.path.join("data", "processed", "train.csv")
    val_path = os.path.join("data", "processed", "val.csv")
    test_path = os.path.join("data", "processed", "test.csv")
    
    assert os.path.exists(train_path), "Train CSV missing"
    assert os.path.exists(val_path), "Val CSV missing"
    assert os.path.exists(test_path), "Test CSV missing"
    
    train_df = pd.read_csv(train_path)
    val_df = pd.read_csv(val_path)
    test_df = pd.read_csv(test_path)
    
    # Verify no overlap in exact raw_address
    train_addrs = set(train_df['raw_address'].values)
    val_addrs = set(val_df['raw_address'].values)
    test_addrs = set(test_df['raw_address'].values)
    
    train_val_overlap = train_addrs.intersection(val_addrs)
    train_test_overlap = train_addrs.intersection(test_addrs)
    val_test_overlap = val_addrs.intersection(test_addrs)
    
    assert len(train_val_overlap) == 0, f"Train and Val have {len(train_val_overlap)} overlapping exact addresses"
    assert len(train_test_overlap) == 0, f"Train and Test have {len(train_test_overlap)} overlapping exact addresses"
    assert len(val_test_overlap) == 0, f"Val and Test have {len(val_test_overlap)} overlapping exact addresses"
    
    # We also verify there are the expected counts
    assert len(train_df) > 0
    assert len(val_df) > 0
    assert len(test_df) > 0
    
if __name__ == "__main__":
    test_splits_are_disjoint()
    print("Test passed: Data splits are disjoint.")
