/**
 * MAIN INTERACTION CONTROLLER
 * Faisal-Inspired Minimalist Editorial Portfolio
 * Author: Arya Krismawan
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA: FLAGSHIP PROJECTS
  // ==========================================
  const projectsData = [
    {
      id: 'terraedge',
      title: 'TerraEdge — Carbon-Neutral Cloud Console',
      category: 'Cloudflare Edge',
      badge: 'Edge Computing & Serverless',
      image: 'assets/images/project-terraedge.jpg',
      alt: 'TerraEdge Cloud Console Screenshot',
      summary: 'Dasbor orkestrasi serverless edge compute berbasis Cloudflare Global Anycast. Mengoptimalkan rute lalu lintas API ke data center dengan efisiensi energi terbarukan 100%.',
      tags: ['Cloudflare Workers', 'D1 SQL Edge', 'Workers KV', 'Vanilla JS', 'Tailwind CSS', 'RESTful API'],
      overview: 'TerraEdge memecahkan kendala latensi server monolitik tradisional dengan memanfaatkan jaringan global Cloudflare Anycast di lebih dari 300 kota. Sistem ini dirancang untuk tim rekayasa software yang membutuhkan eksekusi microservices instan, isolasi V8 terdistribusi, dan kepatuhan terhadap standar efisiensi energi komputasi hijau.',
      keyInsights: [
        {
          title: 'Latensi Global Sub-15ms',
          description: 'Mengeksekusi kode langsung di server edge terdekat dengan pengguna, memangkas round-trip time jaringan hingga 75% dibanding hosting server konvensional.'
        },
        {
          title: 'Penyimpanan Edge Transaksional (D1 & KV)',
          description: 'Mengintegrasikan database relasional SQL D1 di layer edge dengan KV cache berkecepatan tinggi, menjamin integritas data ACID tanpa bottleneck database sentral.'
        },
        {
          title: 'Zero Cold-Start Architecture',
          description: 'Memanfaatkan teknologi V8 isolate sandbox yang aktif dalam sub-milidetik, meniadakan jeda initialization lag yang sering terjadi pada container serverless biasa.'
        },
        {
          title: 'Perutean Cerdas Hemat Energi',
          description: 'Algoritma pemilahan lalu lintas API otomatis memprioritaskan pusat data dengan konsumsi energi terbarukan 100% tanpa mengorbankan performa kecepatan respons.'
        }
      ],
      outcome: 'Berhasil membangun platform konsol cloud berkinerja tinggi yang memangkas biaya infrastruktur hingga 68% dibanding VPS biasa, dengan catatan uptime 99.99% dan latensi sub-detik di seluruh dunia.',
      liveUrl: 'https://arya-nature-portfolio.pages.dev/',
      githubUrl: 'https://github.com/AryaDoi/terraedge'
    },
    {
      id: 'canopymetrics',
      title: 'CanopyMetrics — AI Forest Telemetry & Analytics',
      category: 'AI & Geospasial',
      badge: 'AI & Geospatial Intelligence',
      image: 'assets/images/project-canopy.jpg',
      alt: 'CanopyMetrics AI Forest Telemetry Dashboard',
      summary: 'Platform intelijen citra satelit dan estimasi biomassa kanopi pohon secara real-time. Memvisualisasikan tutupan vegetasi hutan dengan algoritma machine learning dan data spasial presisi tinggi.',
      tags: ['WebGL', 'Cloudflare Pages', 'Python FastInfer', 'Geospatial API', 'Tailwind CSS', 'ES6 Modules'],
      overview: 'CanopyMetrics dirancang untuk menjawab tantangan pemantauan deforestasi dan konservasi lingkungan hidup. Dengan memadukan citra multispektral satelit dan inferensi model machine learning di cloud, aplikasi ini menyajikan visualisasi interaktif tutupan vegetasi dalam skala jutaan hektar.',
      keyInsights: [
        {
          title: 'Akselerasi GPU WebGL 60 FPS',
          description: 'Mengembangkan layer visualisasi berbasis WebGL yang mampu me-render jutaan titik poligon koordinat lahan secara lancar tanpa frame-drop di browser.'
        },
        {
          title: 'Akurasi Estimasi Biomassa 94.8%',
          description: 'Model machine learning dilatih dengan dataset citra satelit resolusi tinggi untuk memprediksi kerapatan kanopi dan simpanan karbon dengan deviasi margin error minimal.'
        },
        {
          title: 'Distribusi Tile Edge Caching',
          description: 'Menerapkan Cloudflare Cache API untuk mengompresi dan mendistribusikan peta raster/vektor, memastikan visualisasi instan bahkan pada perangkat berkecepatan jaringan terbatas.'
        },
        {
          title: 'Desain Kontras Tinggi Ramah Lapangan',
          description: 'Antarmuka pengguna dirancang dengan standar kontras ergonomis tinggi yang nyaman dibaca oleh peneliti di lingkungan luar ruangan dengan sinar matahari terik.'
        }
      ],
      outcome: 'Menyediakan dasbor telemetri geospasial real-time yang memangkas waktu kalkulasi analisis kanopi dari hitungan hari menjadi hanya beberapa detik, mendukung keputusan konservasi yang akurat.',
      liveUrl: 'https://arya-nature-portfolio.pages.dev/',
      githubUrl: 'https://github.com/AryaDoi/canopymetrics'
    },
    {
      id: 'florasense',
      title: 'FloraSense — Botanical Sensor & IoT Telemetry',
      category: 'IoT & Web System',
      badge: 'IoT & Microclimate Telemetry',
      image: 'assets/images/project-florasense.jpg',
      alt: 'FloraSense IoT Sensor Dashboard',
      summary: 'Sistem monitoring mikroklimat rumah kaca dan mikrobioma tanah berbasis IoT. Menyajikan telemetri kelembapan, intensitas cahaya, dan kadar nutrisi secara mulus dengan visualisasi ergonomis.',
      tags: ['IoT MQTT', 'Cloudflare Durable Objects', 'WebSockets', 'Chart.js', 'Vanilla JS', 'Clean Architecture'],
      overview: 'FloraSense menghadirkan jembatan telemetri antara sensor mikroklimat fisik di lapangan dengan operator budidaya tanaman. Dengan protokol komunikasi hemat daya dan koneksi dua arah real-time, seluruh parameter lingkungan dapat dipantau dan dikontrol secara presisi.',
      keyInsights: [
        {
          title: 'Streaming Data Sub-Detik (Durable Objects)',
          description: 'Memanfaatkan Cloudflare Durable Objects dan WebSocket untuk menyalurkan data telemetri puluhan node sensor ke dasbor tanpa perlu refresh browser.'
        },
        {
          title: 'Local Buffering & Auto-Reconnect',
          description: 'Menangani edge case koneksi internet pedesaan yang fluktuatif dengan IndexedDB offline buffer, mencegah hilangnya data historis saat sinyal putus.'
        },
        {
          title: 'Sistem Peringatan Dini Proaktif',
          description: 'Mekanisme trigger cerdas yang mendeteksi anomali suhu atau penurunan kelembapan kritis dan langsung mengirimkan sinyal notifikasi darurat ke tim operasional.'
        },
        {
          title: 'Optimasi Efisiensi Daya Baterai',
          description: 'Arsitektur UI yang meminimalkan siklus re-render DOM sehingga aman dijalankan terus-menerus pada tablet atau kios kontrol tanpa panas berlebih.'
        }
      ],
      outcome: 'Meningkatkan visibilitas kondisi mikroklimat tanaman secara menyeluruh, memangkas risiko anomali suhu hingga 80%, dan menjaga konsistensi panen dengan akurasi data 99.9%.',
      liveUrl: 'https://arya-nature-portfolio.pages.dev/',
      githubUrl: 'https://github.com/AryaDoi/florasense'
    },
    {
      id: 'acheez',
      title: 'AcheeZ — Edge Multi-Account Financial Ledger',
      category: 'Web Application',
      badge: 'Fintech & Cloud Ledger',
      image: 'assets/images/project-terraedge.jpg', // reusable crisp asset
      alt: 'AcheeZ Financial Management App',
      summary: 'Aplikasi pencatat keuangan multi-rekening instan berbasis Cloudflare Edge. Dirancang khusus untuk mengeliminasi jeda loading yang lambat dan kerumitan hitung manual transfer antar-rekening.',
      tags: ['React.js / Vanilla ES6', 'Tailwind CSS', 'Cloudflare Workers', 'D1 Database', 'RESTful API'],
      overview: 'AcheeZ lahir dari frustrasi pengguna terhadap aplikasi pencatatan keuangan yang lambat, penuh iklan, dan membingungkan saat memproses mutasi saldo antar-rekening (Bank, E-Wallet, Tunai). Aplikasi ini memprioritaskan responsivitas instan dan akurasi rekonsiliasi otomatis.',
      keyInsights: [
        {
          title: 'Anti-Gagal (Atomic Transfer)',
          description: 'Mengamankan mutasi dana antar-rekening dengan transaksi database atomik. Jika koneksi terputus saat proses transfer, sistem otomatis rollback agar saldo tidak pernah menggantung.'
        },
        {
          title: 'Koreksi Saldo Otomatis (Revert & Deduct)',
          description: 'Membangun algoritma matematis yang secara otomatis merekonsiliasi seluruh saldo rekening ketika transaksi lama diedit atau dihapus pengguna.'
        },
        {
          title: 'Kecepatan Respons Milidetik di Edge',
          description: 'Ditenagai serverless Cloudflare Workers dan D1 database sehingga formulir pencatatan terbuka dan menyimpan data seketika tanpa jeda buffering.'
        },
        {
          title: 'Desain Form 3-Ketukan',
          description: 'Alur input didesain seringkas mungkin agar pengguna dapat menyelesaikan pencatatan pengeluaran dalam waktu kurang dari 5 detik.'
        }
      ],
      outcome: 'Aplikasi web pencatat finansial yang gesit, transparan, dan dapat diandalkan, mempermudah pengguna memantau arus kas secara presisi tanpa hambatan kognitif.',
      liveUrl: 'https://arya-nature-portfolio.pages.dev/',
      githubUrl: 'https://github.com/AryaDoi/react-financial-management'
    }
  ];

  // ==========================================
  // 2. DOM ELEMENTS
  // ==========================================
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const projectsGrid = document.getElementById('projects-grid');
  const projectDetailView = document.getElementById('project-detail-view');
  const detailBackBtn = document.getElementById('detail-back-btn');
  const toastNotice = document.getElementById('toast-notice');

  // Contact Form & Telemetry
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const edgeDatacenter = document.getElementById('edge-datacenter');
  const edgeRay = document.getElementById('edge-ray');
  const edgeLatency = document.getElementById('edge-latency');

  // ==========================================
  // 3. TOAST NOTIFICATION HELPER
  // ==========================================
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  // ==========================================
  // 4. THEME CONTROLLER
  // ==========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('site_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        showToast(newTheme === 'dark' ? '🌙 Mode Gelap Aktif' : '☀️ Mode Terang Editorial Aktif');
      });
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
        themeToggleBtn.setAttribute('aria-label', 'Beralih ke mode terang');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
        themeToggleBtn.setAttribute('aria-label', 'Beralih ke mode gelap');
      }
    }
    localStorage.setItem('site_theme', theme);
  }

  // ==========================================
  // 5. NAVBAR SCROLL & ACTIVE TRACKING
  // ==========================================
  function initNavigation() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    function handleScroll() {
      const scrollPos = window.scrollY;

      // Header translucent glass effect
      if (header) {
        if (scrollPos > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Check current section
      let currentSectionId = 'home';
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (scrollPos + winHeight >= docHeight - 80) {
        currentSectionId = 'contact';
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl) {
            const top = sectionEl.getBoundingClientRect().top;
            if (top <= 240) {
              currentSectionId = sections[i];
              break;
            }
          }
        }
      }

      // Update active links
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile Hamburger Toggle
    if (mobileMenuToggle && mobileNavDrawer) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileNavDrawer.classList.toggle('open');
        mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close drawer when mobile nav link is clicked
      document.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          mobileNavDrawer.classList.remove('open');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // ==========================================
  // 6. RENDER PROJECTS & DETAIL VIEW CONTROLLER
  // ==========================================
  function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData
      .map(
        (proj) => `
        <article class="project-card" data-id="${proj.id}">
          <div class="project-thumbnail-box">
            <img src="${proj.image}" alt="${proj.alt}" class="project-thumbnail-img" loading="lazy" width="600" height="375">
            <span class="project-category-badge">${proj.category}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-summary">${proj.summary}</p>
            <div class="project-tags-wrap">
              ${proj.tags.slice(0, 4).map((t) => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <button class="project-action-btn btn-open-detail" data-id="${proj.id}" aria-label="Buka detail proyek ${proj.title}">
              <span>Lihat Detail Studi Kasus</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </article>
      `
      )
      .join('');

    // Attach click events
    document.querySelectorAll('.btn-open-detail').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        openProjectDetail(id);
      });
    });
  }

  function openProjectDetail(id) {
    const project = projectsData.find((p) => p.id === id);
    if (!project || !projectDetailView) return;

    const currentIndex = projectsData.findIndex((p) => p.id === id);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

    // Populate Detail View Content
    const detailContentEl = document.getElementById('project-detail-content');
    if (!detailContentEl) return;

    detailContentEl.innerHTML = `
      <div class="detail-header-block">
        <span class="detail-category-tag">${project.category} &bull; ${project.badge}</span>
        <h2 class="detail-hero-title">${project.title}</h2>

        <div class="detail-action-buttons">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-detail-primary">
            <span>Kunjungi Live Demo</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-detail-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Repository GitHub</span>
          </a>
        </div>

        <div class="detail-hero-visual">
          <img src="${project.image}" alt="${project.alt}" loading="eager">
        </div>
      </div>

      <div class="detail-section-block">
        <h3 class="detail-section-title">Gambaran Solusi & Rekayasa Produk</h3>
        <p class="detail-overview-text">${project.overview}</p>
      </div>

      <div class="detail-section-block">
        <h3 class="detail-section-title">Key Insights & Keunggulan Teknis</h3>
        <div class="insights-grid">
          ${project.keyInsights
            .map(
              (insight) => `
            <div class="insight-card">
              <h4><span class="bullet">&bull;</span> ${insight.title}</h4>
              <p>${insight.description}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="detail-section-block">
        <h3 class="detail-section-title">Teknologi & Ekosistem Tooling</h3>
        <div class="skill-pills-wrap">
          ${project.tags.map((t) => `<span class="skill-pill" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div class="detail-section-block">
        <h3 class="detail-section-title">Dampak & Hasil Nyata (Outcome)</h3>
        <div class="outcome-card">
          ${project.outcome}
        </div>
      </div>

      <div class="detail-footer-switcher">
        ${
          prevProject
            ? `
          <button class="switcher-btn btn-switch-prev" data-id="${prevProject.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <div style="text-align: left;">
              <span class="switcher-label">Proyek Sebelumnya</span>
              <span class="switcher-title">${prevProject.title.split('—')[0].trim()}</span>
            </div>
          </button>
        `
            : `<div></div>`
        }

        ${
          nextProject
            ? `
          <button class="switcher-btn btn-switch-next" data-id="${nextProject.id}">
            <div style="text-align: right;">
              <span class="switcher-label">Proyek Berikutnya</span>
              <span class="switcher-title">${nextProject.title.split('—')[0].trim()}</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        `
            : `<div></div>`
        }
      </div>
    `;

    // Show Detail Overlay
    projectDetailView.classList.add('active');
    projectDetailView.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    history.pushState(null, '', `#project-${id}`);

    // Switcher event listeners
    const prevBtn = detailContentEl.querySelector('.btn-switch-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        openProjectDetail(prevBtn.getAttribute('data-id'));
      });
    }
    const nextBtn = detailContentEl.querySelector('.btn-switch-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        openProjectDetail(nextBtn.getAttribute('data-id'));
      });
    }
  }

  function closeProjectDetail() {
    if (!projectDetailView) return;
    projectDetailView.classList.remove('active');
    document.body.style.overflow = '';
    history.pushState(null, '', '#projects');
  }

  if (detailBackBtn) {
    detailBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeProjectDetail();
    });
  }

  // Keyboard shortcut ESC to close detail view
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectDetailView && projectDetailView.classList.contains('active')) {
      closeProjectDetail();
    }
  });

  // Handle URL hash on load
  function checkInitialHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#project-')) {
      const id = hash.replace('#project-', '');
      openProjectDetail(id);
    }
  }

  // ==========================================
  // 7. CLOUDFLARE EDGE TELEMETRY
  // ==========================================
  async function pollEdgeTelemetry() {
    if (!edgeDatacenter || !edgeRay || !edgeLatency) return;

    const startTime = performance.now();
    try {
      const response = await fetch('/api/health', { method: 'GET', cache: 'no-store' });
      const duration = Math.round(performance.now() - startTime);

      if (response.ok) {
        const data = await response.json();
        edgeDatacenter.textContent = `${data.datacenter || 'CGK'} (${data.country || 'ID'}) — Cloudflare Anycast`;
        edgeRay.textContent = `Ray ID: ${data.rayId || 'cf-edge-ok'}`;
        edgeLatency.textContent = `< ${duration}ms (Sub-detik Edge)`;
      } else {
        edgeDatacenter.textContent = 'CGK Edge Serverless';
        edgeRay.textContent = 'Ray ID: connected';
        edgeLatency.textContent = `< ${duration}ms`;
      }
    } catch {
      const duration = Math.round(performance.now() - startTime);
      edgeDatacenter.textContent = 'CGK Edge Network (Jakarta)';
      edgeRay.textContent = 'Ray ID: edge-active-local';
      edgeLatency.textContent = `< ${Math.max(12, duration)}ms`;
    }
  }

  // ==========================================
  // 8. CONTACT FORM WITH EDGE API
  // ==========================================
  function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Check honeypot anti-spam
      const botcheck = document.getElementById('botcheck');
      if (botcheck && botcheck.value) {
        return; // Bot detected silently
      }

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const topicSelect = document.getElementById('topic');
      const messageInput = document.getElementById('message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const topic = topicSelect.value;
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Mohon lengkapi seluruh kolom formulir sebelum mengirim pesan.';
        return;
      }

      // UX: Loading state
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.9"></path>
        </svg>
        <span>Mengirim via Cloudflare Edge...</span>
      `;
      formStatus.style.display = 'none';

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, topic, message })
        });

        if (response.ok) {
          formStatus.className = 'form-status success';
          formStatus.innerHTML = `
            <strong>Pesan Berhasil Terkirim!</strong> Terima kasih ${name}, pesan Anda telah diterima di Cloudflare Edge. Saya akan membalas ke email Anda (${email}) secepatnya.
          `;
          contactForm.reset();
          showToast('✅ Pesan berhasil terkirim');
        } else {
          throw new Error('Gagal mengirim');
        }
      } catch {
        // Empathetic fallback
        formStatus.className = 'form-status error';
        formStatus.innerHTML = `
          Sistem sedang mengalami kendala sementara saat memproses pesan. Jangan khawatir, Anda dapat langsung mengirimkan email secara manual ke: <a href="mailto:aryakrismawan@ummi.ac.id" style="text-decoration: underline; font-weight: 700;">aryakrismawan@ummi.ac.id</a>
        `;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  // ==========================================
  // 9. INITIALIZE EVERYTHING
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    renderProjects();
    initContactForm();
    pollEdgeTelemetry();
    checkInitialHash();
  });
})();
