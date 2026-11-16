# Panduan Deployment ke Cloudflare Pages

Dokumentasi ini menjelaskan langkah-langkah mudah untuk men-deploy website portofolio ini ke **Cloudflare Pages** menggunakan metode **Static HTML Export**.

---

## 1. Persiapan Repository Git

Pastikan perubahan terbaru sudah di-commit dan di-push ke repository GitHub Anda:
```bash
git add .
git commit -m "feat: migrate to typescript and configure cloudflare pages static export"
git push origin <nama-branch-anda>
```

---

## 2. Langkah Setup di Dashboard Cloudflare Pages

1. **Buka Cloudflare Dashboard**:
   - Kunjungi [dash.cloudflare.com](https://dash.cloudflare.com/) dan login ke akun Anda.
2. **Navigasi ke Pages**:
   - Di menu sebelah kiri, pilih **Workers & Pages**.
   - Klik tombol **Create application**, lalu pilih tab **Pages**.
   - Pilih **Connect to Git**.
3. **Pilih Repository**:
   - Pilih akun GitHub Anda dan pilih repository `my-portofolio`.
   - Klik **Begin setup**.
4. **Konfigurasi Build Settings**:
   - **Project name**: `my-portofolio` (atau sesuai keinginan Anda)
   - **Production branch**: `master` (atau branch utama Anda)
   - **Framework preset**: Pilih **`Next.js (Static HTML Export)`**
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (biarkan kosong / default)
5. **Tambahkan Environment Variable**:
   - Buka bagian **Environment variables (advanced)**.
   - Tambahkan variable berikut:
     - **Variable name**: `NODE_VERSION`
     - **Value**: `20`
   > *Catatan: Menentukan `NODE_VERSION=20` memastikan lingkungan build Cloudflare Pages menggunakan versi Node.js LTS yang kompatibel.*
6. **Deploy**:
   - Klik tombol **Save and Deploy**.
   - Tunggu proses build selesai (biasanya memakan waktu 1–2 menit).
   - Setelah selesai, Cloudflare akan memberikan URL publik gratis (misal: `https://my-portofolio.pages.dev`).

---

## 3. Menghubungkan Custom Domain (Opsional)

Jika Anda memiliki domain sendiri (misalnya `budisetiawan.dev`):
1. Buka project Anda di dashboard Cloudflare Pages.
2. Masuk ke tab **Custom domains**.
3. Klik **Set up a custom domain**.
4. Masukkan nama domain Anda dan ikuti panduan DNS yang diberikan Cloudflare.

---

## 4. Pengujian Lokal Sebelum Push

Anda dapat memverifikasi hasil static export secara lokal kapan saja:
```bash
# 1. Pengecekan tipe data TypeScript
npm run type-check

# 2. Pengecekan linter
npm run lint

# 3. Build static export (menghasilkan folder out/)
npm run build
```
Folder `out/` yang dihasilkan adalah replika persis dari apa yang akan disajikan oleh CDN Cloudflare Pages.
