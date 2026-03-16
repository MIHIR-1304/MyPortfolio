from PIL import Image
import math
import sys

def remove_bg(input_path, output_path, bg_color=(34, 41, 47), threshold=30, spread=40):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    
    for item in datas:
        # Distance between current color and bg color
        dist = math.sqrt(
            (item[0] - bg_color[0]) ** 2 +
            (item[1] - bg_color[1]) ** 2 +
            (item[2] - bg_color[2]) ** 2
        )
        
        if dist < threshold:
            # Fully transparent
            new_data.append((item[0], item[1], item[2], 0))
        elif dist < threshold + spread:
            # Antialiasing: partial transparency
            alpha_factor = (dist - threshold) / spread
            new_alpha = int(item[3] * alpha_factor)
            new_data.append((item[0], item[1], item[2], new_alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_bg("public/new-logo.png", "public/new-logo-transparent.png")
    print("Background removed successfully!")
