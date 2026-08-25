// ==========================================================================
// Shared, constant footer, injected on every page so it never drifts.
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
  const mount = document.getElementById('footer-include');
  if (!mount) return;

  mount.innerHTML = `
    <div class="footer-mv">
      <div class="container footer-mv-inner">
        <div class="footer-mv-item">
          <div><b>Our Mission</b><span>To improve lives while creating a path out of poverty.</span></div>
        </div>
        <div class="footer-mv-item">
          <div><b>Our Vision</b><span>A world of hope, sustainable for all.</span></div>
        </div>
      </div>
    </div>

    <div class="container footer-top">
      <div class="footer-brand">
        <img src="images/logo.png" alt="Turikumwe Charity Organisation logo">
        <div>
          <b>Turikumwe</b>
          <span class="tagline">It all starts with love</span>
          <p>A Kasangati-based charity walking with women and children through skills, health, safety and joy, together.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.4c0-.93.26-1.56 1.6-1.56h1.7V2.98C16.5 2.94 15.4 2.85 14.1 2.85c-2.7 0-4.55 1.65-4.55 4.68v2.07H6.8v3.2h2.75V21h3.95z"/></svg></a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg></a>
            <a href="#" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12z"/><path d="M10 15.2V8.8L15.5 12z" fill="#171A28"/></svg></a>
            <a href="#" aria-label="TikTok" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 2h-3.2v13.4a2.9 2.9 0 1 1-2.05-2.77v-3.28a6.15 6.15 0 1 0 5.25 6.08V9.03a8.3 8.3 0 0 0 4.8 1.53V7.35a5.06 5.06 0 0 1-4.8-5.35z"/></svg></a>
          </div>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Our Programs</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Our Programs</h4>
        <ul>
          <li><a href="programs.html#skills">Livelihood Skills</a></li>
          <li><a href="programs.html#women">Women &amp; Girls Health</a></li>
          <li><a href="programs.html#kids">Kids &amp; Dance Troupe</a></li>
          <li><a href="programs.html#community">Community Outreach</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Reach Us</h4>
        <ul class="footer-contact">
          <li><span>+256 782 326 379<br>0752 421 468 / 0701 537 418</span></li>
          <li><span>info@turikumwe.org<br>turikumwengo@gmail.com</span></li>
          <li><span>P.O. Box 100100, Kasangati, Uganda</span></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>&copy; <span class="js-year"></span> Turikumwe Charity Organisation Ltd. All rights reserved.</span>
      <span>Website: <a href="https://www.turikumwe.org" target="_blank" rel="noopener">turikumwe.org</a> &nbsp;·&nbsp; Built with love, together.</span>
    </div>
  `;

  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

  // re-highlight active nav link based on current page (footer quick links)
  const path = location.pathname.split('/').pop() || 'index.html';
  mount.querySelectorAll('a[href]').forEach(a => {
    if (a.getAttribute('href') === path) a.style.color = '#fff';
  });
});
