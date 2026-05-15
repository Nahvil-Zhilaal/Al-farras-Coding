(() => {
  const STORAGE_LANG = 'portfolio_lang';
  const STORAGE_THEME = 'portfolio_theme';

  const i18n = {
    en: {
      title: 'Farras Portfolio',
      aboutMeTitle: 'About Me',
      aboutMeText1: 'I build fast, clean, and futuristic user interfaces.',
      aboutMeText2: 'I love design systems, micro-interactions, and performance-first front-end engineering.',
      brandTag: 'yellow-green systems',
      brandTag: 'yellow-green systems',
      navHome: 'Home',
      navAbout: 'About',
      navProjects: 'Projects',
      aboutMeSub: 'My name is Raid, well you can call me al. I born in Banda Aceh, now i school in MAN Model Banda Aceh. I make a super futuristic portfolio and nice combo color for this project, well you can see at my poftrolio, WELCOME TO MY SUPER OVER POWER PORTFOLIO.',
      aboutStat1K: 'Focus',
      aboutStat1V: 'UI + Performance',
      aboutStat2K: 'Style',
      aboutStat2V: 'Clean & Futuristic',
      aboutStat3K: 'Workflow',
      aboutStat3V: 'Iterate & Polish',
      aboutBadge1: 'Design Systems',
      aboutBadge2: 'Accessibility',
      aboutBadge3: 'Motion',
      navSkills: 'Skills',
      navFaq: 'FAQ',
      navContact: 'Contact',


      heroEyebrow: 'Developer • Designer • Engineer',
      heroTitle: 'Build futuristic interfaces with practical performance.',
      heroDesc:
        'I craft clean UI systems, fast front-ends, and delightful micro-interactions.\nThis portfolio uses a yellow/green theme, one-click language switching, and smooth UI components.',
      btnView: 'View work',
      btnHire: 'Contact',
      panelTitle: 'Live Snapshot',
      panelTitle2: 'Live Snapshot',
      statusLang: 'Language',
      statusTheme: 'Theme',
      statusFocus: 'Focus',
      statusFocusV: 'UI + Performance',
      meterLabel: 'System readiness',
      loadingTitle: 'Initializing Experience',
      loadingSub: 'Preparing interface, data, and visuals…',

      badgeFast: 'Fast UI',
      badgeAccessible: 'Accessible',
      badgeClean: 'Clean code',

      projectsTitle: 'Skills',
      projectsSub: 'A small carousel of highlights (with keyboard support).',
      skillsTitle: 'Accordion',
      skillsSub: 'Expand sections to see details.',
      faqTitle: 'FAQ',
      faqSub: 'Quick answers, designed for clarity.',
      contactTitle: 'Contact',
      contactSub: 'Let’s build something bright and fast.',

      btnCarouselPrev: 'Previous slide',
      btnCarouselNext: 'Next slide',

      proj1Title: 'Neon Landing System',
      proj1Desc: 'A landing UI with smooth transitions, responsive layout, and strong contrast.',
      proj1a: 'Design tokens',
      proj1b: 'Motion micro-interactions',
      proj1c: 'Performance-first',

      proj2Title: 'Dashboard Console',
      proj2Desc: 'A futuristic admin UI with theme toggle and data widgets.',
      proj2a: 'Accessible components',
      proj2b: 'Reusable patterns',
      proj2c: 'Keyboard-friendly',

      proj3Title: 'Realtime Portfolio',
      proj3Desc: 'A portfolio that feels alive: loading screen, carousel, and accordion content.',
      proj3a: 'Futuristic loading',
      proj3b: '1-click language swap',
      proj3c: 'Clean UI layout',

      acc1Title: 'Frontend Craft',
      acc1a: 'Design systems & tokens',
      acc1b: 'Responsive layouts',
      acc1c: 'Smooth animations',

      acc2Title: 'Engineering Habits',
      acc2a: 'Clean architecture',
      acc2b: 'Performance profiling',
      acc2c: 'Keyboard & accessibility',

      acc3Title: 'Tools & Workflow',
      acc3Text: 'I ship iteratively: small changes, quick feedback, polished outcomes.',
      acc3Text2: 'I ship iteratively: small changes, quick feedback, polished outcomes.',
      acc3a: '',
      acc3b: '',
      acc3c: '',

      faq1Q: 'Can I switch theme?',
      faq1A: 'Yes. Use the theme chip in the header (light/dark). It persists on refresh.',
      faq2Q: 'Language switch is one click?',
      faq2A: 'Yes. One click toggles between English and Indonesian instantly (no reload).',
      faq3Q: 'Carousel supports keyboard?',
      faq3A: 'Use ←/→ while focused on the carousel to change slides. Dots are clickable too.',

      contactEmail: 'Email',
      contactRole: 'Role',
      contactLocation: 'Location',
      contactRoleV: 'Frontend Developer',
      contactLocationV: 'Remote / Indonesia',
      formName: 'Name',
      formMessage: 'Message',
      formSend: 'Send message',
    },
    id: {
      title: 'Portofolio Farras',
      brandTag: 'sistem kuning-hijau',
      navHome: 'Beranda',
      navAbout: 'Tentang',
      navProjects: 'Proyek',
      navSkills: 'Keahlian',

      aboutMeSub: 'Nama saya Raid, atau bisa juga dipanggil Al. Saya lahir di Banda Aceh, sekarang saya bersekolah di MAN Model Banda Aceh. Saya membuat portofolio super futuristik dan kombinasi warna yang bagus untuk proyek ini, bisa Anda lihat di portofolio saya, SELAMAT DATANG DI PORTOFOLIO SUPER OVER POWER SAYA.',
      aboutStat1K: 'Fokus',
      aboutStat1V: 'UI + Performa',
      aboutStat2K: 'Gaya',
      aboutStat2V: 'Rapi & Futuristik',
      aboutStat3K: 'Workflow',
      aboutStat3V: 'Iterasi & Finishing',
      aboutBadge1: 'Design Systems',
      aboutBadge2: 'Aksesibilitas',
      aboutBadge3: 'Motion',
      navFaq: 'FAQ',
      navContact: 'Kontak',

      heroEyebrow: 'Developer • Designer • Engineer',
      heroTitle: 'Bangun antarmuka futuristik dengan performa yang praktis.',
      heroDesc:
        'Saya membuat sistem UI yang rapi, front-end yang cepat, dan micro-interactions yang menyenangkan.\nPortofolio ini memakai tema kuning/hijau, ganti bahasa 1 klik, dan komponen UI yang halus.',
      btnView: 'Lihat karya',
      btnHire: 'Kontak',
      panelTitle: 'Snapshot Langsung',
      statusLang: 'Bahasa',
      statusTheme: 'Tema',
      statusFocus: 'Fokus',
      statusFocusV: 'UI + Performa',
      meterLabel: 'Kesiapan sistem',
      loadingTitle: 'Memulai Pengalaman',
      loadingSub: 'Menyiapkan antarmuka, data, dan visual…',

      badgeFast: 'UI Cepat',
      badgeAccessible: 'Aksesibel',
      badgeClean: 'Kode Bersih',

      projectsTitle: 'Skill',
      projectsSub: 'Carousel kecil dengan highlight (dukungan keyboard).',
      skillsTitle: 'Accordion',
      skillsSub: 'Buka bagian untuk melihat detail.',
      faqTitle: 'FAQ',
      faqSub: 'Jawaban cepat, dirancang untuk jelas.',
      contactTitle: 'Kontak',
      contactSub: 'Mari buat sesuatu yang terang dan cepat.',

      proj1Title: 'Neon Landing System',
      proj1Desc: 'UI landing dengan transisi halus, layout responsif, dan kontras yang kuat.',
      proj1a: 'Design tokens',
      proj1b: 'Micro-interactions gerak',
      proj1c: 'Performa utama',

      proj2Title: 'Dashboard Console',
      proj2Desc: 'Admin UI futuristik dengan toggle tema dan widget data.',
      proj2a: 'Komponen aksesibel',
      proj2b: 'Pola yang bisa dipakai ulang',
      proj2c: 'Ramah keyboard',

      proj3Title: 'Realtime Portfolio',
      proj3Desc: 'Portofolio yang terasa hidup: layar loading, carousel, dan konten accordion.',
      proj3a: 'Loading futuristik',
      proj3b: 'Ganti bahasa 1 klik',
      proj3c: 'Layout UI rapi',

      acc1Title: 'Frontend Craft',
      acc1a: 'Design systems & tokens',
      acc1b: 'Layout responsif',
      acc1c: 'Animasi halus',

      acc2Title: 'Engineering Habits',
      acc2a: 'Arsitektur bersih',
      acc2b: 'Profil performa',
      acc2c: 'Keyboard & aksesibilitas',

      acc3Title: 'Tools & Workflow',
      acc3Text: 'Saya bekerja iteratif: perubahan kecil, feedback cepat, hasil akhir yang rapi.',

      faq1Q: 'Bisa ganti tema?',
      faq1A: 'Ya. Pakai chip tema di header (light/dark). Akan tersimpan saat refresh.',
      faq2Q: 'Ganti bahasa cukup 1 klik?',
      faq2A: 'Ya. 1 klik untuk toggle English/Indonesia secara instan (tanpa reload).',
      faq3Q: 'Carousel mendukung keyboard?',
      faq3A: 'Saat carousel terfokus, pakai ←/→ untuk ganti slide. Dots juga bisa diklik.',

      contactEmail: 'Email',
      contactRole: 'Peran',
      contactLocation: 'Lokasi',
      contactRoleV: 'Frontend Developer',
      contactLocationV: 'Remote / Indonesia',
      formName: 'Nama',
      formMessage: 'Pesan',
      formSend: 'Kirim pesan',
    },
  };

  function setTextByI18n(lang) {
    const dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Special status values
    const statusLang = document.getElementById('statusLang');
    if (statusLang) statusLang.textContent = lang === 'id' ? 'ID' : 'EN';

    const statusTheme = document.getElementById('statusTheme');
    if (statusTheme) {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      statusTheme.textContent = theme === 'light' ? 'Light' : 'Dark';
    }

    const meterLabel = document.querySelector('[data-i18n="meterLabel"]');
    if (meterLabel) meterLabel.textContent = dict.meterLabel;

    // Fill year
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());

    // Update pill labels
    const pill = document.getElementById('statusPill');
    if (pill) pill.textContent = 'ONLINE';
  }

  function initLanguage() {
    const langBtn = document.getElementById('langBtn');
    const langLabel = document.getElementById('langLabel');
    const saved = localStorage.getItem(STORAGE_LANG);
    let lang = saved === 'id' ? 'id' : 'en';

    // Initialize
    applyLang(lang);

    langBtn?.addEventListener('click', () => {
      lang = lang === 'en' ? 'id' : 'en';
      localStorage.setItem(STORAGE_LANG, lang);
      applyLang(lang);
    });

    function applyLang(next) {
      setTextByI18n(next);
      if (langLabel) langLabel.textContent = next === 'id' ? 'ID' : 'EN';

      // Keep URL hash navigation unaffected
      // (No reload; translations are applied in-place.)
    }
  }

  function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const themeLabel = document.getElementById('themeLabel');
    const saved = localStorage.getItem(STORAGE_THEME);
    const initial = saved === 'light' ? 'light' : 'dark';
    applyTheme(initial);

    themeBtn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_THEME, next);
      applyTheme(next);
    });

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      if (themeLabel) themeLabel.textContent = theme === 'light' ? 'LIGHT' : 'DARK';
      const statusTheme = document.getElementById('statusTheme');
      if (statusTheme) statusTheme.textContent = theme === 'light' ? 'Light' : 'Dark';
    }
  }

  function initAccordion() {
    document.querySelectorAll('[data-acc-item]').forEach((item) => {
      const btn = item.querySelector('[data-acc-toggle]');
      const panel = item.querySelector('.accPanel');
      btn?.addEventListener('click', () => {
        const isOpen = item.getAttribute('data-open') === 'true';
        // allow multi-open? Here we do single-open per accordion container.
        const container = item.closest('[data-accordion]');
        if (container) {
          container.querySelectorAll('[data-acc-item]').forEach((other) => {
            if (other !== item) {
              other.setAttribute('data-open', 'false');
              const otherPanel = other.querySelector('.accPanel');
              if (otherPanel) otherPanel.hidden = true;
              const otherBtn = other.querySelector('[data-acc-toggle]');
              if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        item.setAttribute('data-open', String(!isOpen));
        const nextOpen = !isOpen;
        if (panel) panel.hidden = !nextOpen;
        btn?.setAttribute('aria-expanded', String(nextOpen));
      });
    });
  }

  function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    const cards = Array.from(track.children);
    const prevBtn = document.querySelector('[data-prev]');
    const nextBtn = document.querySelector('[data-next]');
    const dotsWrap = document.getElementById('carouselDots');

    const state = { index: 0 };

    // Build dots
    const dots = cards.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.setAttribute('aria-label', `Slide ${i + 1}`);
      b.dataset.dot = String(i);
      if (i === 0) b.classList.add('dot--active');
      dotsWrap?.appendChild(b);
      b.addEventListener('click', () => goTo(i));
      return b;
    });

    function cardWidth() {
      const gap = parseFloat(getComputedStyle(track).gap || '14');
      return cards[0]?.getBoundingClientRect().width + gap;
    }

    function goTo(i) {
      const max = cards.length - 1;
      state.index = Math.max(0, Math.min(max, i));
      const x = cardWidth() * state.index;
      track.style.transform = `translateX(${-x}px)`;

      dots.forEach((d, idx) => d.classList.toggle('dot--active', idx === state.index));
    }

    prevBtn?.addEventListener('click', () => goTo(state.index - 1));
    nextBtn?.addEventListener('click', () => goTo(state.index + 1));

    // Keyboard
    const carousel = track.closest('[data-carousel]');
    carousel?.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goTo(state.index - 1);
      if (e.key === 'ArrowRight') goTo(state.index + 1);
    });

    window.addEventListener('resize', () => goTo(state.index));

    // Start position
    goTo(0);
  }

  function initSplash() {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    const bar = document.getElementById('progressBar');
    if (!splash || !app || !bar) return;

    let p = 0;
    app.hidden = true;

    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      // Smooth non-linear progress
      p = Math.min(95, Math.floor((elapsed / 1700) * 100));
      bar.style.width = `${p}%`;

      if (elapsed < 1900) {
        requestAnimationFrame(tick);
      } else {
        // finalize
        bar.style.width = '100%';
        bar.style.transition = 'width .35s var(--ease)';
        setTimeout(() => {
          splash.hidden = true;
          splash.setAttribute('hidden', 'true');
          app.hidden = false;
          // Animate meter fill
          const meterFill = document.getElementById('meterFill');
          if (meterFill) meterFill.style.width = '92%';
          splash.remove();
        }, 380);
      }
    }

    requestAnimationFrame(tick);
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = (localStorage.getItem(STORAGE_LANG) || 'en');
      note.textContent =
        lang === 'id' ? 'Pesan dikirim (demo). Terima kasih!' : 'Message sent (demo). Thanks!';
      setTimeout(() => {
        note.textContent = '';
        form.reset();
      }, 2400);
    });
  }

  // App bootstrap
  initTheme();
  initLanguage();
  initSplash();
  initCarousel();
  initAccordion();
  initContactForm();

  // Backdrop-filter Safari prefix safety (purely CSS)
})();

