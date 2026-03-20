/* ============================================================
   Premium Elegante — main.js
   Andrea & Pedro — Full Upgrade
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     OPENING INTRO
     ============================================================ */
  const INTRO_DURATION = 9000; // ms before auto-dismiss

  const intro      = document.getElementById('intro');
  const site       = document.getElementById('site');
  const enterBtn   = document.getElementById('intro-enter');
  const skipBtn    = document.getElementById('intro-skip');
  const bar        = document.getElementById('intro-bar');

  // Animate progress bar
  function startProgressBar(duration) {
    bar.style.transition = `width ${duration}ms linear`;
    // Force reflow so transition fires
    void bar.offsetWidth;
    bar.style.width = '100%';
  }

  function dismissIntro() {
    intro.classList.add('hidden');
    site.classList.add('visible');
    // Re-enable body scroll
    document.body.style.overflow = '';
  }

  // Prevent scroll while intro is showing
  document.body.style.overflow = 'hidden';

  // Auto-dismiss after duration
  const autoTimer = setTimeout(dismissIntro, INTRO_DURATION);
  startProgressBar(INTRO_DURATION);

  enterBtn.addEventListener('click', () => {
    clearTimeout(autoTimer);
    dismissIntro();
  });

  skipBtn.addEventListener('click', () => {
    clearTimeout(autoTimer);
    dismissIntro();
  });

  /* ============================================================
     STICKY NAV
     ============================================================ */
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');

  if (toggle) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  /* ============================================================
     LIVE COUNTDOWN
     ============================================================ */
  const weddingDate = new Date('2026-06-21T16:00:00');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const diff = weddingDate - new Date();
    if (diff <= 0) {
      ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id =>
        document.getElementById(id).textContent = '00'
      );
      return;
    }
    document.getElementById('cd-days').textContent  = pad(Math.floor(diff / 86400000));
    document.getElementById('cd-hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('cd-mins').textContent  = pad(Math.floor((diff % 3600000)  / 60000));
    document.getElementById('cd-secs').textContent  = pad(Math.floor((diff % 60000)    / 1000));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 130);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ============================================================
     GALLERY LIGHTBOX
     ============================================================ */
  const galleryItems = document.querySelectorAll('.gallery__item[data-lightbox]');
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lb-img');
  const lbClose      = document.getElementById('lb-close');
  const lbPrev       = document.getElementById('lb-prev');
  const lbNext       = document.getElementById('lb-next');

  let currentLbIdx = 0;

  // Collect all lightbox images in order
  const lbImages = [];
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    lbImages.push({ src: img.src, alt: img.alt });
  });

  function openLightbox(idx) {
    currentLbIdx = idx;
    lbImg.src = lbImages[idx].src;
    lbImg.alt = lbImages[idx].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function showPrev() {
    currentLbIdx = (currentLbIdx - 1 + lbImages.length) % lbImages.length;
    lbImg.src = lbImages[currentLbIdx].src;
    lbImg.alt = lbImages[currentLbIdx].alt;
  }

  function showNext() {
    currentLbIdx = (currentLbIdx + 1) % lbImages.length;
    lbImg.src = lbImages[currentLbIdx].src;
    lbImg.alt = lbImages[currentLbIdx].alt;
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', showPrev);
  lbNext.addEventListener('click', showNext);

  // Click backdrop to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });

  /* ============================================================
     RSVP FORM
     ============================================================ */
  const form    = document.getElementById('rsvp-form');
  const success = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>&nbsp; Sending…';
      btn.disabled = true;

      setTimeout(() => {
        form.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);
        btn.style.display = 'none';
        success.style.display = 'block';
      }, 1200);
    });
  }

  /* ============================================================
     HERO VIDEO — handle browsers that block autoplay
     ============================================================ */
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Autoplay blocked — fallback to poster/bg image silently
      heroVideo.style.display = 'none';
    });
  }

})();
