import os
from PIL import Image

base_path = "public/images/features"
files = ["technopark.png", "datacenter.png", "innovation.png"]

def convert_to_webp():
    for filename in files:
        input_file = os.path.join(base_path, filename)
        output_file = input_file.replace(".png", ".webp")
        
        if os.path.exists(input_file):
            print(f"Converting {input_file} to WebP...")
            img = Image.open(input_file)
            # Optimize and save as WebP
            img.save(output_file, "WEBP", quality=85)
            # Optionally remove PNG (user said to convert)
            os.remove(input_file)
            print(f"Success: {output_file} created.")
        else:
            print(f"Warning: {input_file} not found.")

if __name__ == "__main__":
    convert_to_webp()
