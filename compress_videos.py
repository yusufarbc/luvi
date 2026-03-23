import os
try:
    # MoviePy v2.x import
    from moviepy import VideoFileClip
except ImportError:
    try:
        # MoviePy v1.x fallback
        from moviepy.editor import VideoFileClip
    except ImportError:
        import traceback
        print("HATA: 'moviepy' kütüphanesi yüklü değil veya hatalı.")
        print("Lütfen şu komutu çalıştırın: python -m pip install moviepy")
        traceback.print_exc()
        exit(1)

# Dosya yolları (public klasörü içinde)
base_path = "public"
files = [
    "Futuristic_Digital_Network_Animation.mp4",
    "Cinematic_Tech_Loop_Generation.mp4"
]

def convert():
    for filename in files:
        input_file = os.path.join(base_path, filename)
        output_file = os.path.join(base_path, filename.replace(".mp4", ".webm"))
        
        if os.path.exists(input_file):
            print(f"---> Dönüştürülüyor: {input_file}")
            try:
                clip = VideoFileClip(input_file)
                # WebM formatına çevir (2000k bitrate sıkıştırma sağlar)
                clip.write_videofile(output_file, codec="libvpx", bitrate="2000k")
                print(f"BAŞARILI: {output_file} oluşturuldu.")
            except Exception as e:
                print(f"HATA oluştu ({filename}): {e}")
        else:
            print(f"UYARI: {input_file} bulunamadı.")

if __name__ == "__main__":
    print("Luvi Bilişim - Video Sıkıştırma Scripti")
    print("---------------------------------------")
    convert()
    print("---------------------------------------")
    print("İşlem tamamlandı.")
