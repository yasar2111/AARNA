export function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const filterBtns = Array.from(document.querySelectorAll('.gallery-filter'));
  const items = Array.from(grid.querySelectorAll('.gallery-item'));

  const lb = {
    backdrop: document.getElementById('lightbox-backdrop'),
    close:    document.getElementById('lightbox-close'),
    prev:     document.getElementById('lightbox-prev'),
    next:     document.getElementById('lightbox-next'),
    img:      document.getElementById('lightbox-img'),
    ph:       document.getElementById('lightbox-placeholder'),
    caption:  document.getElementById('lightbox-caption'),
    counter:  document.getElementById('lightbox-counter'),
  };

  let visible = [...items];
  let idx = 0;
  let lastFocus = null;

  // ── Filter ────────────────────────────────────────────────

  function applyFilter(filter) {
    filterBtns.forEach(btn => {
      const on = btn.dataset.filter === filter;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    grid.style.opacity = '0';

    setTimeout(() => {
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !show);
      });
      visible = items.filter(i => !i.classList.contains('is-hidden'));
      grid.style.opacity = '';
    }, 200);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // ── Lightbox ──────────────────────────────────────────────

  function renderLightbox() {
    const item = visible[idx];
    const imgEl = item.querySelector('.gallery-item__img');
    const hasSrc = imgEl && imgEl.getAttribute('src');
    const alt = item.getAttribute('aria-label') || 'Gallery image';

    // Reset and apply matching gradient class
    lb.ph.className = 'lightbox__placeholder';
    const phEl = item.querySelector('[class*="gallery-item__placeholder--"]');
    if (phEl) {
      const gradCls = [...phEl.classList].find(c => c.startsWith('gallery-item__placeholder--'));
      if (gradCls) {
        lb.ph.classList.add(gradCls.replace('gallery-item__placeholder--', 'lightbox__grad--'));
      }
    }

    if (hasSrc) {
      lb.img.src = imgEl.src;
      lb.img.alt = alt;
      lb.img.style.display = '';
      lb.ph.style.display = 'none';
    } else {
      lb.img.style.display = 'none';
      lb.ph.style.display = '';
    }

    lb.caption.textContent = alt;
    lb.counter.textContent = `${idx + 1} / ${visible.length}`;
    lb.prev.disabled = idx === 0;
    lb.next.disabled = idx === visible.length - 1;
  }

  function openLightbox(i) {
    visible = items.filter(item => !item.classList.contains('is-hidden'));
    idx = i;
    lastFocus = document.activeElement;
    renderLightbox();
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    requestAnimationFrame(() => lightbox.classList.add('is-open'));
    lb.close.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightbox.addEventListener('transitionend', () => {
      lightbox.hidden = true;
    }, { once: true });
    if (lastFocus) lastFocus.focus();
  }

  function navigate(dir) {
    const next = idx + dir;
    if (next >= 0 && next < visible.length) {
      idx = next;
      renderLightbox();
    }
  }

  // Open on gallery item click / keyboard
  items.forEach(item => {
    item.addEventListener('click', () => {
      const current = items.filter(i => !i.classList.contains('is-hidden'));
      const i = current.indexOf(item);
      if (i !== -1) openLightbox(i);
    });
  });

  lb.backdrop.addEventListener('click', closeLightbox);
  lb.close.addEventListener('click', closeLightbox);
  lb.prev.addEventListener('click', () => navigate(-1));
  lb.next.addEventListener('click', () => navigate(1));

  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}
