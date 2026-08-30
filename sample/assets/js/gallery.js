export function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const isDiary = grid.classList.contains('diary-track');
  const filterBtns = Array.from(document.querySelectorAll('.gallery-filter'));
  const items = Array.from(grid.querySelectorAll('.gallery-item'));

  const lb = {
    backdrop: document.getElementById('lightbox-backdrop'),
    close:    document.getElementById('lightbox-close'),
    prev:     document.getElementById('lightbox-prev'),
    next:     document.getElementById('lightbox-next'),
    img:      document.getElementById('lightbox-img'),
    caption:  document.getElementById('lightbox-caption'),
    counter:  document.getElementById('lightbox-counter'),
  };

  let visible = [...items];
  let idx = 0;
  let lastFocus = null;
  let activeIndex = 0; // diary carousel only

  // ── Diary carousel positioning ───────────────────────────────
  // Positions wrap circularly around the visible set, so the fan
  // always looks balanced (cards on both sides) no matter where the
  // active index is — stepping past the last item wraps to the
  // first, and vice versa, instead of dead-ending.

  const DIARY_ALL_POS = [
    'diary-pos--l3', 'diary-pos--l2', 'diary-pos--l1',
    'diary-pos--c',
    'diary-pos--r1', 'diary-pos--r2', 'diary-pos--r3',
  ];

  function offsetSuffix(rel) {
    const mag = Math.abs(rel);
    if (mag === 0) return 'c';
    return (rel < 0 ? 'l' : 'r') + mag;
  }

  // Start centred in the visible set (not at index 0) so the fan
  // shows neighbours on both sides from the first paint.
  function centredStartIndex(list) {
    return Math.min(2, Math.floor((list.length - 1) / 2));
  }

  if (isDiary) activeIndex = centredStartIndex(visible);

  function positionDiary() {
    if (!isDiary) return;
    const total = visible.length;
    if (!total) return;
    if (activeIndex >= total) activeIndex = 0;

    const maxRadius = Math.min(3, Math.floor((total - 1) / 2));

    items.forEach(item => item.classList.remove(...DIARY_ALL_POS));

    visible.forEach((item, i) => {
      let rel = i - activeIndex;
      // shortest circular distance, so the ends of the list wrap
      // around and neighbour each other visually
      if (rel > total / 2) rel -= total;
      if (rel < -total / 2) rel += total;

      if (Math.abs(rel) <= maxRadius) {
        item.classList.add('diary-pos--' + offsetSuffix(rel));
        item.tabIndex = 0;
      } else {
        item.tabIndex = -1;
      }
    });
  }

  const diaryPrev = document.getElementById('diary-prev');
  const diaryNext = document.getElementById('diary-next');

  function diaryStep(dir) {
    if (!visible.length) return;
    activeIndex = (activeIndex + dir + visible.length) % visible.length;
    positionDiary();
  }

  if (diaryPrev) diaryPrev.addEventListener('click', () => diaryStep(-1));
  if (diaryNext) diaryNext.addEventListener('click', () => diaryStep(1));

  // ── Touch / mouse swipe — primary interaction on mobile ──────
  if (isDiary) {
    let dragActive = false;
    let dragStartX = 0;
    let dragDeltaX = 0;
    let dragged = false;

    grid.addEventListener('pointerdown', e => {
      dragActive = true;
      dragged = false;
      dragStartX = e.clientX;
      dragDeltaX = 0;
    });

    grid.addEventListener('pointermove', e => {
      if (!dragActive) return;
      dragDeltaX = e.clientX - dragStartX;
      if (Math.abs(dragDeltaX) > 10) dragged = true;
    });

    function endDrag() {
      if (!dragActive) return;
      dragActive = false;
      const threshold = 40;
      if (dragDeltaX > threshold) diaryStep(-1);
      else if (dragDeltaX < -threshold) diaryStep(1);
      dragDeltaX = 0;
    }

    grid.addEventListener('pointerup', endDrag);
    grid.addEventListener('pointercancel', endDrag);
    grid.addEventListener('pointerleave', () => { dragActive = false; });

    // Swallow the click that would otherwise follow a real drag, so
    // swiping past a card doesn't also open/focus it.
    grid.addEventListener('click', e => {
      if (dragged) {
        e.stopPropagation();
        e.preventDefault();
        dragged = false;
      }
    }, true);
  }

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
      activeIndex = centredStartIndex(visible);
      positionDiary();
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
    const alt = item.getAttribute('aria-label') || 'Gallery image';

    lb.img.src = imgEl.dataset.full || imgEl.src;
    lb.img.alt = alt;

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

  // Open on gallery item click / keyboard — diary mode: tap the
  // centred card to open it, tap a side card to bring it to centre.
  items.forEach(item => {
    item.addEventListener('click', () => {
      if (isDiary) {
        const i = visible.indexOf(item);
        if (i === -1) return;
        if (i === activeIndex) {
          openLightbox(i);
        } else {
          activeIndex = i;
          positionDiary();
        }
        return;
      }

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

    if (e.key === 'Tab') {
      const focusables = [lb.close, lb.prev, lb.next].filter(el => el && !el.disabled);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  positionDiary();
}
