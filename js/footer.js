// ==========================================================================
// Shared, constant footer — injected on every page so it never drifts.
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
          <p>A Kasangati-based charity walking with women and children through skills, health, safety and joy — together.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
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
