document.addEventListener('DOMContentLoaded', function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-item img'));
  if (!items.length) return;

  var lightbox   = document.getElementById('lightbox');
  var lightImg    = document.getElementById('lightboxImg');
  var lightCap    = document.getElementById('lightboxCap');
  var btnClose    = document.getElementById('lightboxClose');
  var btnPrev     = document.getElementById('lightboxPrev');
  var btnNext     = document.getElementById('lightboxNext');
  var currentIndex = 0;

  function openAt(index) {
    currentIndex = (index + items.length) % items.length;
    var img = items[currentIndex];
    var full = img.getAttribute('data-large') || img.getAttribute('src');
    lightImg.setAttribute('src', full);
    lightImg.setAttribute('alt', img.getAttribute('alt') || '');
    var capEl = img.closest('.gallery-item').querySelector('.cap');
    lightCap.textContent = capEl ? capEl.textContent : '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  items.forEach(function (img, i) {
    img.closest('.gallery-item').addEventListener('click', function () {
      openAt(i);
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function (e) { e.stopPropagation(); openAt(currentIndex - 1); });
  btnNext.addEventListener('click', function (e) { e.stopPropagation(); openAt(currentIndex + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') openAt(currentIndex - 1);
    if (e.key === 'ArrowRight') openAt(currentIndex + 1);
  });
});
