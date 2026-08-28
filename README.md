# Warda — Portfolio

Portofolio pribadi dibangun dengan Vite + Tailwind CSS + JavaScript murni (tanpa framework).

## Cara menjalankan (di VS Code)

1. Extract folder ini, buka di VS Code.
2. Buka terminal (Ctrl + `), lalu jalankan:
   ```
   npm install
   npm run dev
   ```
3. Buka link yang muncul di terminal (biasanya http://localhost:5173).

## Build untuk deploy (Netlify/Vercel dll)

```
npm run build
```
Hasilnya ada di folder `dist/` — itu yang di-upload/deploy.

## Yang perlu kamu ganti

- **Link sosial media & email** — di `index.html`, bagian hero (cari `github.com/username`, `linkedin.com/in/username`, `instagram.com/username`, `namamu@email.com`).
- **Foto profil** — ganti `src/assets/hero.svg` dengan foto asli kamu (bisa `.jpg`/`.png`, tinggal update nama file di `index.html` bagian About).
- **Screenshot proyek** — ganti `src/assets/project-1.png` (SIPADI) dan `src/assets/project-2.svg` (IMST) dengan screenshot asli.
- **CV/Resume** — taruh file PDF kamu di folder `public/` dengan nama `CV-Warda.pdf` (harus persis nama itu, atau ubah link di bagian Resume pada `index.html`).
- **Tautan proyek** — link `smartagroculture.id` di bagian Projects sudah mengarah ke SIPADI, tambahkan link GitHub kalau ada.

## Struktur folder

```
warda-portfolio/
├─ index.html          ← semua konten & teks halaman
├─ tailwind.config.js  ← warna & tema
├─ postcss.config.js
├─ vite.config.js
├─ src/
│  ├─ style.css        ← styling tambahan (tag, tombol ikon, animasi scroll)
│  ├─ main.js          ← logic: menu mobile, animasi reveal, tahun footer
│  └─ assets/          ← taruh foto & screenshot di sini
└─ public/              ← taruh file CV PDF di sini
```
