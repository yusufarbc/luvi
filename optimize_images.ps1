$ffmpeg = "C:\Users\yusuf\Projects\luvi\node_modules\ffmpeg-static\ffmpeg.exe"
$dir = "c:\Users\yusuf\Projects\luvi\src\content\news\topkapi-holidayinn-bt-bulusma"

# 1.webp (Cover) - Resize to 2560 width
Write-Host "Optimizing 1.webp (Cover)..."
& $ffmpeg -i (Join-Path $dir "1.webp") -vf "scale=2560:-1" -q:v 75 (Join-Path $dir "1_new.webp") -y
Move-Item (Join-Path $dir "1_new.webp") (Join-Path $dir "1.webp") -Force

# 3, 4, 5, 6 (Gallery) - Resize to 1920 width
$galleryItems = @("3.webp", "4.webp", "5.webp", "6.webp")
foreach ($item in $galleryItems) {
    Write-Host "Optimizing $item..."
    $src = Join-Path $dir $item
    $tmp = Join-Path $dir ($item + "_new.webp")
    & $ffmpeg -i $src -vf "scale=1920:-1" -q:v 75 $tmp -y
    Move-Item $tmp $src -Force
}

Write-Host "Optimization complete."
