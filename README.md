# MATAF TI 2026 — Portal Informasi Mahasiswa Baru

Website "Your Digital Guide to the Journey" untuk mahasiswa baru Teknologi
Informasi UNISA Yogyakarta selama rangkaian MATAF/OSPEK TI 2026.

Dibangun dengan **React + Vite + Tailwind CSS**. Semua konten (agenda,
dresscode, pengumuman, tugas, FAQ, panitia, kontak) ada di **satu file data**
sehingga panitia yang tidak paham coding tetap bisa update informasi.

## 🚀 Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## ✏️ Cara mengubah informasi (PENTING — baca ini dulu)

Semua data ada di **`src/data/mataf-data.js`**. Panitia hanya perlu edit file
ini, tidak perlu menyentuh file lain.

- `events` → agenda, dresscode, rundown, dan barang bawaan per tanggal.
  Sistem TODAY/TOMORROW otomatis mengambil dari tanggal hari ini (`Date`
  browser pengguna), jadi tinggal isi tanggal (`date: "2026-08-21"`) dengan
  benar.
- `announcements` → pengumuman, taruh yang terbaru di paling atas array.
- `assignments` → daftar tugas beserta deadline (format ISO,
  `"2026-08-22T23:59:00"`).
- `faqs`, `guide`, `committee`, `contacts`, `locationInfo`, `SITE` → sesuai
  namanya masing-masing.

Cari teks berformat `[ISI ...]` — itu adalah placeholder yang **wajib
diganti** sebelum website dipublikasikan. Semua data pada 5 hari contoh
adalah **DEMO DATA**, silakan sesuaikan jumlah hari dan isinya dengan
rundown MATAF yang sebenarnya (tambah/hapus objek di array `events`).

Setiap perubahan pada file ini otomatis muncul di semua halaman terkait
(Home, Agenda, Dresscode, Rundown, dst) — tidak perlu edit berulang.

## 🎨 Mengubah warna resmi

Buka `tailwind.config.js`, bagian `colors.navy`, `colors.trail`, dan
`colors.amber` — ganti kode hex sesuai palet resmi MATAF TI 2026 jika sudah
ditentukan.

## 📦 Struktur folder

```
src/
  components/   → Navbar, Footer, Countdown, Checklist, dll (reusable)
  pages/        → 1 file = 1 halaman (Home, Agenda, Dresscode, ...)
  data/         → mataf-data.js — SATU-SATUNYA file yang perlu diedit panitia
  hooks/        → localStorage & countdown logic
```

## ✅ Fitur yang sudah tersedia

- Sistem tanggal otomatis (Today/Tomorrow) berbasis `events`
- Countdown real-time ke kegiatan berikutnya & deadline tugas
- Checklist interaktif barang bawaan (tersimpan di LocalStorage, tidak hilang saat browser ditutup)
- Dark mode / Light mode (tersimpan di LocalStorage)
- Pengumuman dengan kategori + search + filter
- FAQ dengan search
- Global search (tombol 🔍 atau `Ctrl+K` / `Cmd+K`)
- Notification bell menampilkan 5 pengumuman terbaru
- Journey progress + achievement sederhana (gamifikasi) berbasis hari yang sudah lewat
- Responsive penuh: 360px sampai desktop besar
- Easter egg: ketik `sudo mataf` di halaman manapun 🚀

## 🌐 Deployment (pilih salah satu, semua gratis)

### Vercel (rekomendasi — paling mudah)
1. Push folder ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) → **New Project** → import repo.
3. Vercel otomatis mendeteksi Vite. Klik **Deploy**.
4. Setiap kali panitia push perubahan ke GitHub (misal edit `mataf-data.js`), Vercel otomatis build ulang.

### Netlify
1. Push ke GitHub, lalu import repo di [netlify.com](https://netlify.com).
2. Build command: `npm run build`, Publish directory: `dist`.

### GitHub Pages
1. `npm run build` menghasilkan folder `dist/`.
2. Deploy isi folder `dist/` ke branch `gh-pages` (bisa pakai package
   `gh-pages` atau GitHub Actions).

## ⚠️ Sebelum publikasi — checklist panitia

- [ ] Ganti semua teks `[ISI ...]` di `mataf-data.js`
- [ ] Ganti/tambah/hapus objek `events` sesuai jumlah hari MATAF sebenarnya
- [ ] Ganti link WhatsApp & Instagram di `SITE` dan `contacts`
- [ ] Ganti palet warna resmi di `tailwind.config.js` (jika ada)
- [ ] Cek ulang seluruh halaman di HP asli, bukan cuma browser desktop
