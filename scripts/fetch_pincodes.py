import os
import sys

def main():
    print("Please download the 'All India Pincode Directory' from data.gov.in")
    print("and place the CSV file at: data/raw/pincode_directory.csv")
    print("URL: https://data.gov.in/resource/all-india-pincode-directory")
    print("\nIf you have already downloaded it, you can proceed to run data/build_post_offices.py")

    os.makedirs(os.path.join("data", "raw"), exist_ok=True)
    os.makedirs(os.path.join("data", "processed"), exist_ok=True)

if __name__ == "__main__":
    main()
