document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Smooth scroll (évite querySelector('#') qui lève une SyntaxError)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Lire plus — toggle classe .open sur .history-more
  const expandBtn = document.getElementById('expandBtn');
  const historyMore = document.getElementById('historyMore');

  if (expandBtn && historyMore) {
    expandBtn.addEventListener('click', () => {
      const isOpen = historyMore.classList.toggle('open');
      expandBtn.textContent = isOpen ? 'Réduire' : 'Lire plus';
    });
  }

  // Animation apparition au scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(
    '.program-card, .event-card, .support-card, .team-card, .timeline-item'
  ).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Lightbox galerie
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbCounter = lightbox.querySelector('.lightbox-counter');
    let images = [];
    let current = 0;

    const lbCaption = lightbox.querySelector('.lightbox-caption');

    function updateLightbox() {
      lbImg.src = images[current].src;
      lbImg.alt = images[current].alt;
      lbCounter.textContent = `${current + 1} / ${images.length}`;
      if (lbCaption) lbCaption.textContent = images[current].caption || '';
    }

    function openLightbox(idx) {
      current = idx;
      updateLightbox();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function navigate(dir) {
      current = (current + dir + images.length) % images.length;
      updateLightbox();
    }

    document.querySelectorAll('.gallery-item').forEach((link, idx) => {
      const img = link.querySelector('img');
      const alt = img ? img.alt : '';
      images.push({ src: link.href, alt, caption: img ? (img.dataset.caption || alt) : '' });
      link.addEventListener('click', e => {
        e.preventDefault();
        openLightbox(idx);
      });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    // Swipe tactile (1 doigt uniquement - ignore le pinch-to-zoom)
    let touchStartX = 0;
    let touchStartY = 0;
    let isMultiTouch = false;
    lightbox.addEventListener('touchstart', e => {
      isMultiTouch = e.touches.length > 1;
      if (isMultiTouch) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    lightbox.addEventListener('touchmove', e => {
      if (e.touches.length > 1) { isMultiTouch = true; return; }
      if (isMultiTouch) return;
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy) e.preventDefault();
    }, { passive: false });
    lightbox.addEventListener('touchend', e => {
      if (isMultiTouch) return;
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
    }, { passive: true });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Formulaire contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm));
      const body = `Nom : ${data.nom}\nEmail : ${data.email}\n\nMessage :\n${data.message}`;
      window.location.href =
        `mailto:secretariatdugrandseminairedeb@gmail.com` +
        `?subject=${encodeURIComponent(data.sujet)}` +
        `&body=${encodeURIComponent(body)}`;
    });
  }

  // Navbar + bouton retour en haut au scroll
  const siteHeader = document.querySelector('.site-header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 50);
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 400);
  });
});
