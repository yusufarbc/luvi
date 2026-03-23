import os
import sys

# Luvi Bilişim - Video Sıkıştırma Scripti (Optimized)
try:
    from moviepy.editor import VideoFileClip
except ImportError:
    try:
        from moviepy import VideoFileClip
    except ImportError:
        print("HATA: 'moviepy' kütüphanesi yüklü değil.")
        print("Çözüm: pip install moviepy")
        sys.exit(1)

base_path = "public"
files = [
    "bg.mp4",
    "Futuristic_Digital_Network_Animation.mp4",
    "Cinematic_Tech_Loop_Generation.mp4"
]

def compress_videos():
    for filename in files:
        input_file = os.path.join(base_path, filename)
        output_file = os.path.join(base_path, filename.replace(".mp4", ".webm"))
        
        if os.path.exists(input_file):
            print(f"---> Sıkıştırılıyor: {input_file}")
            try:
                # Arka plan videoları için 1000k-800k bitrate ve 24 fps idealdir.
                clip = VideoFileClip(input_file)
                # Sesi kapat (audio=False) çünkü arka planda gerek yok, boyutu düşürür.
                # '800k' bitrate ile 3.9MB'lık bir MP4'ü ~1MB civarına indirebiliriz.
                clip = clip.without_audio()
                clip.write_videofile(output_file, codec="libvpx", bitrate="800k", fps=24)
                clip.close()
                print(f"BAŞARILI: {output_file} optimize edildi.")
            except Exception as e:
                print(f"HATA oluştu ({filename}): {e}")
        else:
            print(f"UYARI: {input_file} bulunamadı.")

if __name__ == "__main__":
    print("Video sıkıştırma işlemi başlatılıyor...")
    compress_videos()
    print("İşlem tamamlandı.")
