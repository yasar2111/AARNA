export function initFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  const items = Array.from(list.querySelectorAll('.faq__item'));

  items.forEach(item => {
    const btn    = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      /* Close all items */
      items.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.faq__question')
             ?.setAttribute('aria-expanded', 'false');
      });

      /* Open this one if it was closed */
      if (!isExpanded) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    /* Keyboard: Escape collapses the open item */
    btn.addEventListener('keydown', e => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
