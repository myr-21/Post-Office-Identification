import re

class BaselineHeuristicPredictor:
    def __init__(self, offices_df):
        # Expects a DataFrame of offices with 'id', 'name', 'pincode', 'district', 'state'
        self.offices = offices_df.to_dict('records')
        for office in self.offices:
            office['localityKey'] = re.sub(r' (S\.O|H\.O|B\.O)$', '', office['name']).lower()

    def predict_single(self, raw_address):
        lower = str(raw_address).lower()
        # Extract 6-digit pin if present
        pin_match = re.search(r'\b\d{6}\b', lower)
        pin_token = pin_match.group(0) if pin_match else None
        
        scored = []
        for office in self.offices:
            score = 0.04
            locality_key = office['localityKey']
            at = lower.find(locality_key)
            
            if at >= 0:
                prefix = lower[max(0, at - 14):at]
                is_landmark = bool(re.search(r'\b(near|nr|opp|opposite|behind|beside)\b[\s.,-]*$', prefix))
                score += 0.3 if is_landmark else 0.9
                score += max(0, 0.08 - at / 400.0)
            elif locality_key[:5] in lower and len(locality_key) >= 5:
                score += 0.25
                
            if str(office.get('district', '')).lower() in lower:
                score += 0.2
                
            if pin_token and pin_token == str(office['pincode']):
                score += 0.55
                
            scored.append({'office': office, 'score': score})
            
        scored.sort(key=lambda x: x['score'], reverse=True)
        return scored[0]['office']['id']
    
    def predict(self, raw_addresses):
        return [self.predict_single(addr) for addr in raw_addresses]
