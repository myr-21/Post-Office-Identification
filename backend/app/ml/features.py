import re
from sklearn.base import BaseEstimator, TransformerMixin

class TextPINExtractor(BaseEstimator, TransformerMixin):
    # A simple custom transformer to add the extracted PIN token to the end of the text
    # This replaces the hacky +20 rule.
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        X_out = []
        for text in X:
            text = str(text)
            match = re.search(r'\b\d{6}\b', text)
            if match:
                # Append a special token so the model learns it
                text = f"{text} PIN_{match.group(0)}"
            X_out.append(text)
        return X_out
