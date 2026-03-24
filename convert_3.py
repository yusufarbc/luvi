from moviepy import VideoFileClip
import os

input_file = r'c:\Users\YUSUFTALHAARABACI\Github\luvi\public\banner\21985-323496013.mp4'
output_file = r'c:\Users\YUSUFTALHAARABACI\Github\luvi\public\banner\3.webm'

print(f"Converting {input_file} to {output_file}...")
with VideoFileClip(input_file) as video:
    # Resize to 720p if needed, but 800k is fine for original resolution too
    video.without_audio().write_videofile(
        output_file, 
        codec='libvpx', 
        bitrate='800k',
        fps=24,
        threads=4
    )
print("Conversion complete.")
