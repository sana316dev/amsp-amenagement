import base64, io, pathlib, re
from PIL import Image

root = pathlib.Path(__file__).resolve().parent.parent
tpl = (root / "proposition/template.html").read_text(encoding="utf-8")

def font64(path):
    return base64.b64encode(pathlib.Path(path).read_bytes()).decode()

def img64(path, width, height=None, quality=72):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    if height:
        target_ratio = width / height
        ratio = w / h
        if ratio > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            im = im.crop((left, 0, left + new_w, h))
        else:
            new_h = int(w / target_ratio)
            top = max(0, int((h - new_h) * 0.35))
            im = im.crop((0, top, w, top + new_h))
    im = im.resize((width, height if height else int(im.size[1] * width / im.size[0])), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return base64.b64encode(buf.getvalue()).decode()

subs = {
    "__FRAUNCES__": font64(root / "src/fonts/fraunces-latin.woff2"),
    "__MANROPE__": font64(root / "src/fonts/manrope-latin.woff2"),
    "__HERO__": img64(root / "public/images/hero.jpg", 1180, 780, 70),
    "__CUISINE__": img64(root / "public/images/cuisine-1.jpg", 430, 320, 68),
    "__AGENCEMENT__": img64(root / "public/images/hero-agencement.jpg", 430, 320, 68),
    "__SDB__": img64(root / "public/images/salle-de-bain-2.jpg", 430, 320, 68),
}

out = tpl
for k, v in subs.items():
    out = out.replace(k, v)

assert "__" not in re.sub(r"__[a-z]+__", "", out), "placeholder manquant"

dest = root / "public/proposition-commerciale-amsp.html"
dest.write_text(out, encoding="utf-8")
print("written", dest, round(dest.stat().st_size / 1024), "KB")
for k, v in subs.items():
    print(k, round(len(v) / 1024), "KB")
