// ============================================================
// Venkata Guravareddy — Executive Architecture Portfolio Scripts
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Toggle (Dark Obsidian / Clean Slate Light) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('vg_theme_pref');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    document.body.classList.add('light-mode');
  }

  function renderThemeIcon() {
    if (!themeToggleBtn) return;
    const isLight = document.body.classList.contains('light-mode');
    themeToggleBtn.innerHTML = isLight
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    themeToggleBtn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  }

  renderThemeIcon();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('vg_theme_pref', isLight ? 'light' : 'dark');
      renderThemeIcon();
    });
  }

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const siteNav = document.getElementById('siteNav');

  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isOpen = siteNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 3. Case Studies Filter Engine ---
  const filterTabs = document.querySelectorAll('.filter-tab');
  const caseCards = document.querySelectorAll('.case-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      caseCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Active Navigation State Tracking ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));

  // --- 5. Contact Dispatch Mailto Handler ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || 'Engineering Leader';
      const email = document.getElementById('cEmail')?.value || '';
      const subject = document.getElementById('cSubject')?.value || 'Engineering Leadership Collaboration';
      const message = document.getElementById('cMessage')?.value || '';

      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AInquiry:%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:bsrgsit@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }
});
