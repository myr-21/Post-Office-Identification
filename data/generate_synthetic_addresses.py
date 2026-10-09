import os
import pandas as pd
import numpy as np
import random
import argparse

# Fixed seed for reproducibility
random.seed(42)
np.random.seed(42)

def generate_noise(text, noise_level):
    if not text or noise_level == 'clean':
        return text
    
    text = str(text)
    
    # Noise operations
    def swap_chars(s):
        if len(s) < 2: return s
        idx = random.randint(0, len(s) - 2)
        return s[:idx] + s[idx+1] + s[idx] + s[idx+2:]
        
    def drop_char(s):
        if len(s) < 2: return s
        idx = random.randint(0, len(s) - 1)
        return s[:idx] + s[idx+1:]
        
    def duplicate_char(s):
        if not s: return s
        idx = random.randint(0, len(s) - 1)
        return s[:idx] + s[idx] + s[idx] + s[idx+1:]

    # Apply noise based on level
    num_ops = 1 if noise_level == 'low' else (2 if noise_level == 'medium' else 3)
    
    for _ in range(num_ops):
        op = random.choice([swap_chars, drop_char, duplicate_char])
        text = op(text)
        
    # Occasionally change case
    if random.random() < 0.3:
        text = text.lower()
    elif random.random() < 0.1:
        text = text.upper()
        
    return text

def apply_abbreviations(text):
    if not text: return text
    abbrevs = {
        'road': 'rd', 'near': 'nr', 'opposite': 'opp', 
        'society': 'soc', 'apartment': 'apt', 'nagar': 'ngr',
        'maharashtra': 'mh', 'floor': 'flr', 'building': 'bldg'
    }
    words = text.lower().split()
    new_words = []
    for w in words:
        # 50% chance to abbreviate if possible
        if w in abbrevs and random.random() < 0.5:
            new_words.append(abbrevs[w])
        else:
            new_words.append(w)
    # Match original casing roughly
    if text.istitle():
        return ' '.join(new_words).title()
    elif text.isupper():
        return ' '.join(new_words).upper()
    return ' '.join(new_words)

def generate_addresses(offices_df, num_per_office=60):
    flat_types = ['Flat No', 'HNo', 'House', 'Plot', 'Room', 'Shop']
    building_types = ['Society', 'Apartments', 'Complex', 'Residency', 'Enclave', 'Heights', 'Tower']
    road_types = ['Road', 'Lane', 'Street', 'Marg', 'Path']
    landmark_types = ['Near', 'Opposite', 'Behind', 'Beside', 'Next to']
    
    # We need to ensure train/val/test splits don't leak building/landmark combinations
    # We will generate a pool of buildings and landmarks, and assign them to splits.
    buildings = list(set(
        [f"{name} {btype}" for name in ['Alpha', 'Beta', 'Shree', 'Sai', 'Om', 'Ganesh', 'Lake', 'Park', 'Royal', 'Silver', 'Golden', 'Diamond', 'Emerald', 'Ruby', 'Pearl', 'Crystal', 'Sapphire', 'Opal', 'Topaz', 'Jade'] for btype in building_types]
    ))
    
    landmarks = list(set(
        [f"{ltype} {name}" for name in ['Temple', 'School', 'Hospital', 'Bank', 'Park', 'Metro Station', 'Bus Stop', 'Mall', 'Market', 'Plaza', 'Square', 'Center', 'Point', 'Gate'] for ltype in landmark_types]
    ))
    
    # Split the pools
    train_bldgs, val_bldgs, test_bldgs = np.split(np.random.permutation(buildings), [int(len(buildings)*0.7), int(len(buildings)*0.85)])
    train_lmarks, val_lmarks, test_lmarks = np.split(np.random.permutation(landmarks), [int(len(landmarks)*0.7), int(len(landmarks)*0.85)])
    
    splits = [
        ('train', train_bldgs, train_lmarks, int(num_per_office * 0.7)),
        ('val', val_bldgs, val_lmarks, int(num_per_office * 0.15)),
        ('test', test_bldgs, test_lmarks, num_per_office - int(num_per_office * 0.7) - int(num_per_office * 0.15))
    ]
    
    data = []
    
    for split_name, bldg_pool, lmark_pool, n_samples in splits:
        for _, office in offices_df.iterrows():
            locality = office['name'].replace(' S.O', '').replace(' H.O', '').replace(' B.O', '')
            
            for _ in range(n_samples):
                # Pick components
                flat = f"{random.choice(flat_types)} {random.randint(1, 999)}"
                bldg = random.choice(bldg_pool)
                road = f"{random.choice(['Main', 'Link', 'Station', 'Market'])} {random.choice(road_types)}"
                lmark = f"{random.choice(landmark_types)} {random.choice(lmark_pool)}"
                
                # Sometime use a different locality as a confuser landmark
                if random.random() < 0.1:
                    confuser = random.choice(offices_df['name'].values).replace(' S.O', '').replace(' H.O', '')
                    lmark = f"Near {confuser}"
                
                # Determine noise profile
                noise_level = random.choice(['clean', 'low', 'medium', 'high'])
                is_noisy = noise_level != 'clean'
                applied_noise_ops = []
                
                components = {
                    'flat': flat,
                    'bldg': bldg,
                    'road': road,
                    'locality': locality,
                    'lmark': lmark,
                    'city': office['district'],
                    'district': office['district'],
                    'state': office['state'],
                    'pin': str(office['pincode'])
                }
                
                # Apply drop noise
                if is_noisy:
                    if random.random() < 0.3: 
                        components['state'] = ''
                        applied_noise_ops.append('drop_state')
                    if random.random() < 0.2: 
                        components['district'] = ''
                        applied_noise_ops.append('drop_district')
                    if random.random() < 0.1: 
                        components['pin'] = ''
                        applied_noise_ops.append('drop_pin')
                    if random.random() < 0.2: 
                        components['road'] = ''
                        applied_noise_ops.append('drop_road')
                
                # Format string
                order = ['flat', 'bldg', 'road', 'lmark', 'locality', 'city', 'district', 'state', 'pin']
                if is_noisy and random.random() < 0.2:
                    # Reorder slightly
                    random.shuffle(order[:4]) # shuffle local parts
                    applied_noise_ops.append('shuffle_order')
                
                address_parts = []
                for k in order:
                    val = components[k]
                    if not val: continue
                    
                    if is_noisy:
                        old_val = val
                        val = apply_abbreviations(val)
                        if val != old_val:
                            applied_noise_ops.append('abbreviated')
                        
                        old_val2 = val
                        val = generate_noise(val, noise_level)
                        if val != old_val2:
                            applied_noise_ops.append('char_noise')
                        
                    address_parts.append(val)
                
                separator = ", " if noise_level in ['clean', 'low'] else " "
                if noise_level == 'high': 
                    separator = random.choice([", ", " ", "-", ",, "])
                    applied_noise_ops.append('messy_separator')
                
                raw_address = separator.join(address_parts)
                
                data.append({
                    'raw_address': raw_address,
                    'true_pincode': office['pincode'],
                    'true_post_office': office['id'],
                    'split': split_name,
                    'noise_level': noise_level,
                    'is_noisy': is_noisy,
                    'building': bldg,
                    'landmark': lmark,
                    'noise_ops': '|'.join(applied_noise_ops)
                })
                
    return pd.DataFrame(data)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--num', type=int, default=60, help='Number of addresses per post office')
    args = parser.parse_args()
    
    input_path = os.path.join("data", "processed", "post_offices.csv")
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found. Run data/build_post_offices.py first.")
        return
        
    print("Loading post offices...")
    offices_df = pd.read_csv(input_path, dtype=str)
    
    print(f"Generating synthetic addresses ({args.num} per office)...")
    addresses_df = generate_addresses(offices_df, args.num)
    
    print("Saving splits...")
    out_dir = os.path.join("data", "processed")
    
    for split in ['train', 'val', 'test']:
        split_df = addresses_df[addresses_df['split'] == split].drop(columns=['split'])
        out_path = os.path.join(out_dir, f"{split}.csv")
        split_df.to_csv(out_path, index=False)
        print(f"{split}.csv: {len(split_df)} rows")
        
    print("Done!")

if __name__ == "__main__":
    main()
