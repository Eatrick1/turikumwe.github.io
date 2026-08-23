// ==========================================================================
// Turikumwe Charity Organisation — main.js
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- sticky header shadow ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('mobile-open');
    });
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mainNav.classList.remove('mobile-open');
    }));
  }

  /* ---------- hero carousel ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length) {
    let idx = 0;
    let timer;
    const show = (n) => {
      slides.forEach(s => s.classList.remove('is-active'));
      dots.forEach(d => d.classList.remove('is-active'));
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
      if (dots[idx]) dots[idx].classList.add('is-active');
    };
    const next = () => show(idx + 1);
    const start = () => { timer = setInterval(next, 5800); };
    const reset = () => { clearInterval(timer); start(); };
    dots.forEach((d, i) => d.addEventListener('click', () => { show(i); reset(); }));
    show(0);
    start();
  }

  /* ---------- animated stat counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animate = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  /* ---------- scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const rObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); rObs.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(el => rObs.observe(el));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- program filter chips (programs page) ---------- */
  const chips = document.querySelectorAll('.filter-chip');
  const filterTargets = document.querySelectorAll('[data-category]');
  if (chips.length && filterTargets.length) {
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-filter');
      filterTargets.forEach(t => {
        const show = cat === 'all' || t.getAttribute('data-category') === cat;
        t.style.display = show ? '' : 'none';
      });
    }));
  }

  /* ---------- contact form (static demo submit) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.style.color = '#1C93A6';
      status.textContent = 'Sending your message…';
      setTimeout(() => {
        status.style.color = '#1C93A6';
        status.textContent = 'Thank you! Your message has been received — our team will reach out to you soon.';
        form.reset();
      }, 900);
    });
  }

  /* ---------- newsletter form (footer, static demo) ---------- */
  const nform = document.getElementById('newsletterForm');
  if (nform) {
    nform.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('newsletterStatus');
      if (status) status.textContent = "You're subscribed — thank you for staying close to us!";
      nform.reset();
    });
  }

  /* ---------- year in footer ---------- */
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

});
