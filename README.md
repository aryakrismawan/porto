# 🌿 Portfolio Arya Krismawan — Biophilic Tech & Cloudflare Edge

Portfolio profesional modern dengan tema **Nature / Biophilic Tech**, dirancang untuk performa ultra-tinggi menggunakan arsitektur **Cloudflare Pages** (Frontend) dan **Cloudflare Pages Functions** (Backend API di Edge).

---

## 🌟 Fitur Utama

1. **Biophilic Aesthetics & Glassmorphism**:
   - Skema warna hutan pinus mendalam (*Forest Night*) & opsi kabut segar (*Morning Mist*).
   - Kanvas interaktif spora alami & dedaunan yang merespons pergerakan kursor mouse.
   - Pembangkit suara desau angin hutan sintetis menggunakan **Web Audio API** tanpa perlu file audio eksternal.
2. **Arsitektur Cloudflare Edge (Frontend + Backend)**:
   - **Frontend**: Didistribusikan secara instan ke lebih dari 285+ data center global Cloudflare Anycast dengan latensi sub-detik.
   - **Backend API (`/functions/api/contact.js`)**: Serverless Pages Function di Edge untuk validasi formulir kontak, proteksi honeypot anti-spam, dan integrasi webhook opsional (Discord/Slack).
   - **Telemetri Langsung (`/functions/api/health.js`)**: Menampilkan Ray ID, lokasi data center Cloudflare terdekat (misal: CGK Jakarta / SIN Singapura), dan latensi aktual secara real-time.
3. **UX Ramah Pengguna & Aksesibilitas**:
   - Zero Jargon Error: Penanganan kendala jaringan dengan pesan empatik dan solutif.
   - Tipografi modern Google Fonts (*Outfit* & *Plus Jakarta Sans*).
   - 100% responsif pada perangkat ponsel pintar, tablet, maupun layar desktop lebar.
   - Skor SEO & Core Web Vitals optimal dengan semantic HTML5 dan metadata Schema.org JSON-LD.

---

## 📁 Struktur Berkas

```text
├── _headers                   # Konfigurasi Security Headers & Cache Cloudflare
├── _redirects                 # Konfigurasi routing fallback Cloudflare
├── index.html                 # Struktur utama halaman web (Semantic & SEO-ready)
├── package.json               # Konfigurasi script npm & dependensi
├── robots.txt                 # Aturan crawling mesin pencari
├── sitemap.xml                # Peta situs XML untuk indexing Google
├── wrangler.toml              # Konfigurasi Cloudflare Pages
├── assets/
│   └── images/                # Asset gambar resolusi tinggi (Avatar & Showcase)
│       ├── avatar.jpg
│       ├── project-canopy.jpg
│       ├── project-florasense.jpg
│       └── project-terraedge.jpg
├── functions/
│   └── api/
│       ├── contact.js         # Backend Edge API: Penangan formulir kontak
│       └── health.js          # Backend Edge API: Telemetri kesehatan edge
├── scripts/
│   └── main.js                # Interaktivitas JS, Canvas, Web Audio, Theme & Form
└── styles/
    └── index.css              # Design system lengkap, token variabel CSS & animasi
```

---

## 💻 Cara Menjalankan Secara Lokal

1. **Jalankan Cloudflare Pages Dev**:
   ```bash
   npm run dev
   ```
   Server lokal Cloudflare Pages akan berjalan di `http://localhost:8788`, lengkap dengan endpoint backend `/api/contact` dan `/api/health`.

---

## 🚀 Panduan Upload ke GitHub

Pastikan Anda telah memiliki akun di [GitHub](https://github.com/).

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Beri nama repositori, misalnya: `arya-nature-portfolio`.
3. Pilih visibilitas **Public** (atau **Private**).
4. **Jangan** centang "Add a README file" (karena repositori lokal sudah memilikinya).
5. Klik **Create repository**.

### Langkah 2: Hubungkan & Push dari Komputer Lokal
Jalankan perintah berikut di terminal (PowerShell) pada folder ini:

```bash
# 1. Inisialisasi git lokal (jika belum)
git init

# 2. Tambahkan seluruh berkas ke staging
git add .

# 3. Buat commit pertama
git commit -m "feat: inisiasi web portfolio biophilic tech dengan cloudflare edge"

# 4. Ganti nama branch utama ke main
git branch -M main

# 5. Hubungkan ke repositori GitHub Anda (ganti URL di bawah dengan URL repositori Anda)
git remote add origin https://github.com/AryaDoi/arya-nature-portfolio.git

# 6. Upload (push) kode ke GitHub
git push -u origin main
```

---

## ☁️ Panduan Deploy ke Cloudflare Pages (Frontend & Backend)

Cloudflare Pages mendukung integrasi otomatis melalui GitHub. Setiap kali Anda melakukan `git push`, Cloudflare akan mendeploy pembaruan secara otomatis dalam hitungan detik.

### Metode Rekomendasi: Integrasi GitHub (CI/CD Otomatis)

1. **Masuk ke Cloudflare Dashboard**:
   - Buka [dash.cloudflare.com](https://dash.cloudflare.com/).
2. **Pilih menu Pages**:
   - Pada sidebar kiri, pilih **Workers & Pages** > klik tombol **Create application** > pilih tab **Pages**.
   - Klik **Connect to Git**.
3. **Pilih Repositori**:
   - Berikan izin ke akun GitHub Anda, lalu pilih repositori `arya-nature-portfolio`.
   - Klik **Begin setup**.
4. **Konfigurasi Build**:
   - **Project name**: `arya-nature-portfolio` (atau sesuai keinginan).
   - **Production branch**: `main`.
   - **Framework preset**: `None` (karena kita menggunakan Vanilla HTML/CSS/JS murni).
   - **Build command**: Kosongkan (tidak perlu build step).
   - **Build output directory**: `.` (titik / root).
5. **Klik Save and Deploy**:
   - Cloudflare akan otomatis mengenali folder `functions/` sebagai Pages Functions (backend edge).
   - Dalam 30 detik, website Anda akan aktif secara langsung dengan domain gratis: `https://arya-nature-portfolio.pages.dev`.

### Metode Alternatif: Deploy Langsung via Terminal (Wrangler CLI)

Jika ingin mendeploy langsung dari komputer tanpa menghubungkan GitHub:

```bash
# Login ke Cloudflare (hanya perlu sekali)
npx wrangler login

# Deploy langsung folder saat ini
npm run deploy
```

---

## 🛡️ Keamanan & Integrasi Lanjutan

- **Security Headers**: File `_headers` telah dipasang secara otomatis untuk mengamankan situs dari serangan XSS, clickjacking, dan mime sniffing.
- **Notifikasi Form Kontak**: Jika ingin menerima pesan form langsung ke Discord atau Slack, tambahkan Environment Variable `NOTIFICATION_WEBHOOK` di Cloudflare Dashboard:
  - Buka Proyek Pages di Cloudflare > **Settings** > **Environment variables** > **Add variable** > Name: `NOTIFICATION_WEBHOOK`, Value: `URL Webhook Discord/Slack Anda`.

---

🌿 *Dirancang dengan ketelitian teknis dan estetika alami oleh Arya Krismawan.*
