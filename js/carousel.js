/**
 * carousel.js — Certificate carousel
 * Isolated, self-contained. No external dependencies besides DOM.
 */

function initCertCarousel() {
  let idx      = 0;
  let visible  = 3;
  let cardW    = 0;
  let total    = 0;
  let autoTimer = null;

  const inner   = document.querySelector('.cert-carousel-inner');
  const track   = document.querySelector('.cert-track');
  const dotsEl  = document.querySelector('.cert-dots');
  const prevBtn = document.querySelector('.cert-prev');
  const nextBtn = document.querySelector('.cert-next');

  if (!track || !inner) return;

  function setup() {
    total = document.querySelectorAll('.cert-card').length;
    if (!total) return;
    resize();
    clamp();
    updateTrack(false);
    renderDots();
    startAuto();
  }

  function resize() {
    const w = inner.clientWidth;
    visible = w < 600 ? 1 : w < 840 ? 2 : 3;
    cardW   = w / visible;
    document.querySelectorAll('.cert-card').forEach(c => {
      c.style.minWidth = cardW + 'px';
      c.style.maxWidth = cardW + 'px';
    });
  }

  function clamp() {
    const max = Math.max(0, total - visible);
    if (idx > max) idx = max;
  }

  function updateTrack(animate = true) {
    track.style.transition = animate
      ? 'transform 0.45s cubic-bezier(0.4,0,0.2,1)'
      : 'none';
    track.style.transform = `translateX(-${idx * cardW}px)`;
    updateDots();
    updateArrows();
  }

  function goNext() {
    const max = Math.max(0, total - visible);
    idx = idx >= max ? 0 : idx + 1;
    updateTrack();
  }

  function goPrev() {
    const max = Math.max(0, total - visible);
    idx = idx <= 0 ? max : idx - 1;
    updateTrack();
  }

  function renderDots() {
    const pages = Math.max(1, total - visible + 1);
    dotsEl.innerHTML = Array.from({ length: pages })
      .map((_, i) => `<button class="cert-dot${i === idx ? ' active' : ''}" data-i="${i}" aria-label="Go to slide ${i + 1}"></button>`)
      .join('');
    dotsEl.querySelectorAll('.cert-dot').forEach(d => {
      d.addEventListener('click', () => {
        idx = parseInt(d.dataset.i, 10);
        updateTrack();
        resetAuto();
      });
    });
  }

  function updateDots() {
    document.querySelectorAll('.cert-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  function updateArrows() {
    const max = Math.max(0, total - visible);
    prevBtn.style.opacity = idx === 0    ? '0.4' : '1';
    nextBtn.style.opacity = idx >= max   ? '0.4' : '1';
  }

  function startAuto()  { autoTimer = setInterval(goNext, 4000); }
  function resetAuto()  { clearInterval(autoTimer); startAuto(); }

  // Arrow buttons
  prevBtn.addEventListener('click', () => { goPrev(); resetAuto(); });
  nextBtn.addEventListener('click', () => { goNext(); resetAuto(); });

  // Resize debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      clamp();
      updateTrack(false);
      renderDots();
    }, 120);
  });

  // Touch / swipe support
  let touchStartX = 0;
  inner.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  inner.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    resetAuto();
  });

  // Init after cert-track is populated
  requestAnimationFrame(() => requestAnimationFrame(setup));
}
