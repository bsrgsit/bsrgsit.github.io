// ============================================================
// Venkata Guravareddy — Datacenter Command Center Scripts
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Interactive 42U Server Rack Explorer Data & Logic ---
  const rackShelves = document.querySelectorAll('.rack-shelf');
  const readoutUnit = document.getElementById('readoutUnit');
  const readoutTitle = document.getElementById('readoutTitle');
  const readoutSpecs = document.getElementById('readoutSpecs');
  const readoutImpact = document.getElementById('readoutImpact');

  const rackData = {
    'tor-switch': {
      unit: 'U40-U42 · TOP OF RACK (TOR) SWITCHES',
      title: 'Mellanox Quantum-2 400G InfiniBand & BGP Spine',
      specs: 'Fabric: 400 Gb/s NDR InfiniBand · RoCEv2 Lossless Fabrics · Non-blocking Full Bisection Bandwidth',
      impact: 'Engineered zero-packet-drop low-latency network topology interconnecting multi-node GPU supercomputers.'
    },
    'h100-gpu': {
      unit: 'U28-U36 · NVIDIA H100 SXM5 GPU COMPUTE RACK',
      title: '8x NVIDIA H100 SXM5 (80GB HBM3) & L40S Compute Nodes',
      specs: 'Interconnect: NVLink 900 GB/s · PCIe Gen5 · vLLM & Triton Inference Engines · KV-Cache Paging',
      impact: 'Delivered 3.8x LLM serving throughput gain; caught and mitigated live 94% NVLink saturation incident via DCGM.'
    },
    'k8s-nodes': {
      unit: 'U14-U24 · ENTERPRISE KUBERNETES FLEET CONTROL',
      title: 'Multi-Tenant K8s Control Plane & Admission Controllers',
      specs: 'Scale: 600+ Kubernetes Clusters across 52 Data Centers · 42,000+ Edge Nodes · Custom Admission Webhooks',
      impact: 'Granted US Patent US11336525B1; automated pre-flight security validation delivering 99.999% platform availability.'
    },
    'ceph-storage': {
      unit: 'U02-U10 · DISTRIBUTED STORAGE NVME FABRIC',
      title: 'Ceph NVMe All-Flash Pool & NetApp Trident CSI',
      specs: 'Protocol: NVMe-oF / RDMA · Multi-Petabyte Block, Object & CephFS Pools · Disaster Recovery Replication',
      impact: 'Persistent high-throughput storage for stateful AI workloads, checkpointing, and real-time model weights.'
    }
  };

  rackShelves.forEach(shelf => {
    shelf.addEventListener('click', () => {
      rackShelves.forEach(s => s.classList.remove('active'));
      shelf.classList.add('active');

      const tierKey = shelf.getAttribute('data-tier');
      const data = rackData[tierKey];

      if (data && readoutUnit && readoutTitle && readoutSpecs && readoutImpact) {
        readoutUnit.textContent = data.unit;
        readoutTitle.textContent = data.title;
        readoutSpecs.textContent = data.specs;
        readoutImpact.textContent = data.impact;
      }
    });
  });

  // --- 2. Live Telemetry Jitter Simulation (Authentic Sensor Feel) ---
  const liveTokenLatency = document.getElementById('liveTokenLatency');
  if (liveTokenLatency) {
    setInterval(() => {
      const jitter = (11.2 + Math.random() * 0.6 - 0.3).toFixed(1);
      liveTokenLatency.textContent = `${jitter} ms (P99)`;
    }, 2500);
  }

  // --- 3. Server Blade Showcase Filtering ---
  const filterButtons = document.querySelectorAll('.filter-group button');
  const bladeCards = document.querySelectorAll('.server-blade-card');
  const filterCount = document.getElementById('filterCount');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      const filter = button.getAttribute('data-filter');
      let count = 0;

      bladeCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          count++;
        } else {
          card.style.display = 'none';
        }
      });

      if (filterCount) {
        filterCount.textContent = `Showing ${count} server chassis platform${count === 1 ? '' : 's'}.`;
      }
    });
  });

  // --- 4. Light / Dark Mode Toggle ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('vg_datacenter_theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const isLight = document.body.classList.contains('light-mode');
    themeToggleBtn.innerHTML = isLight
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    themeToggleBtn.setAttribute('title', isLight ? 'Switch to Datacenter Dark Ops' : 'Switch to Clean Lab Light Mode');
  }

  updateThemeIcon();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('vg_datacenter_theme', isLight ? 'light' : 'dark');
      updateThemeIcon();
    });
  }

  // --- 5. Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('is-open');
      const expanded = siteNav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 6. Scroll Progress Rail ---
  const scrollRail = document.getElementById('scrollRail');
  window.addEventListener('scroll', () => {
    if (!scrollRail) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollRail.style.width = `${progress}%`;
  }, { passive: true });

  // --- 7. Active Nav Highlighting ---
  const sections = document.querySelectorAll('section[id], header[id]');
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
  }, { rootMargin: '-25% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));

  // --- 8. Dispatch Form Mailto Handler ---
  const dispatchForm = document.getElementById('dispatchForm');
  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('dName')?.value || 'Engineering Partner';
      const email = document.getElementById('dEmail')?.value || '';
      const subject = document.getElementById('dSubject')?.value || 'Datacenter / GPU Infrastructure Opportunity';
      const message = document.getElementById('dMessage')?.value || '';

      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:bsrgsit@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }
});
