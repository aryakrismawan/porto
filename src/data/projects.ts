export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  deskripsi: string;
  keyInsight: string[];
  outcome: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: "ramahmurahberkah",
    title: "RMB - Ramah Murah Berkah",
    subtitle: "Platform E-Commerce & Toko Indonesia di Korea Selatan",
    category: "E-Commerce",
    description:
      "Platform toko online dan katalog produk Indonesia untuk komunitas di Korea Selatan dengan navigasi interaktif, katalog lengkap, dan alur pemesanan yang responsif.",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare"],
    liveUrl: "https://ramahmurahberkah.com",
    githubUrl: "https://github.com",
    deskripsi:
      "Ramah Murah Berkah (RMB) adalah platform web e-commerce yang dirancang untuk mempermudah Warga Negara Indonesia (WNI) di Korea Selatan dalam mendapatkan produk nusantara secara daring. Platform ini menghadirkan pengalaman berbelanja yang praktis, transparan, dan terstruktur untuk berbagai kategori mulai dari bumbu masakan tradisional, makanan instan, hingga kebutuhan pokok sehari-hari.",
    keyInsight: [
      "Mayoritas pengguna bertransaksi melalui smartphone di sela jam istirahat kerja, sehingga alur pemilihan produk hingga checkout harus dibuat seringkas mungkin tanpa formulir yang berbelit-belit.",
      "Koneksi jaringan internasional antara Korea dan Indonesia menuntut optimasi bundle JavaScript serta caching pada edge network agar katalog dapat dimuat seketika tanpa jeda.",
      "Kategorisasi produk lokal yang intuitif dan visual yang jelas terbukti langsung meningkatkan kepercayaan pelanggan dalam bertransaksi secara online.",
    ],
    outcome: [
      "Peningkatan kecepatan dan kemudahan pemesanan produk nusantara bagi komunitas diaspora Indonesia di Korea Selatan.",
      "Kecepatan muat halaman rata-rata di bawah 1.5 detik berkat pemanfaatan edge network Cloudflare.",
      "Pengalaman pengguna yang responsif, stabil, dan konsisten di seluruh tipe perangkat mobile maupun desktop.",
    ],
  },
  {
    id: 2,
    slug: "megs-web",
    title: "MEGS Web",
    subtitle: "Aplikasi Web Interaktif & Showcase Digital",
    category: "Web Application",
    description:
      "Aplikasi web interaktif dengan performa optimal, antarmuka modern, dan pengalaman pengguna yang halus dihosting di jaringan global Cloudflare Pages.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    liveUrl: "https://megs-web.pages.dev/",
    githubUrl: "https://github.com",
    deskripsi:
      "MEGS Web merupakan aplikasi web modern yang dibangun untuk menghadirkan pengalaman visual interaktif berkecepatan tinggi. Menggabungkan arsitektur frontend berbasis React dan TypeScript dengan styling Tailwind CSS murni, situs ini dirancang dengan standar kualitas tinggi untuk menampilkan informasi produk dan layanan secara profesional.",
    keyInsight: [
      "Penerapan konsep dark glassmorphism memerlukan hierarki kontras yang presisi agar visual tetap elegan tanpa mengorbankan kenyamanan membaca.",
      "Arsitektur komponen modular dan type-safe mempermudah pemeliharaan jangka panjang serta ekspansi fitur di masa mendatang.",
      "Deployment terintegrasi dengan Cloudflare Pages menghasilkan waktu Time to First Byte (TTFB) global yang konsisten sangat rendah.",
    ],
    outcome: [
      "Skor performa dan aksesibilitas Google Lighthouse mencapai 95+ di seluruh pengujian.",
      "Waktu respon antarmuka instan dengan transisi visual yang halus pada 60fps.",
      "Kode yang bersih, terstruktur, dan siap dikembangkan lebih lanjut dengan standar industri frontend terkini.",
    ],
  },
];
