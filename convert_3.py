from moviepy import VideoFileClip
import os

input_file = r'c:\Users\YUSUFTALHAARABACI\Github\luvi\public\banner\21118-315137091.mp4'
output_file = r'c:\Users\YUSUFTALHAARABACI\Github\luvi\public\banner\3.webm'

print(f"Converting {input_file} to {output_file}...")
with VideoFileClip(input_file) as video:
    video.without_audio().write_videofile(
        output_file, 
        codec='libvpx', 
        bitrate='800k',
        fps=24,
        threads=4
    )
print("Conversion complete.")
