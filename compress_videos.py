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

def compress_videos():
    # Find all mp4 files in the public folder
    try:
        files = [f for f in os.listdir(base_path) if f.endswith(".mp4")]
    except Exception as e:
        print(f"HATA: {base_path} dizini okunamadı: {e}")
        return
    
    for filename in files:
        input_file = os.path.join(base_path, filename)
        output_file = os.path.join(base_path, filename.replace(".mp4", ".webm"))
        
        # Check if webm already exists to avoid re-processing
        if os.path.exists(output_file):
            print(f"---> ATLANITOR (Zaten var): {output_file}")
            continue

        if os.path.exists(input_file):
            print(f"---> Sıkıştırılıyor: {input_file}")
            try:
                clip = VideoFileClip(input_file)
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
