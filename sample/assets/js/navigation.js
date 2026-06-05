export function initNavigation() {
  const nav     = document.getElementById('nav');
  const toggle  = document.getElementById('nav-toggle');
  const menu    = document.getElementById('nav-menu');
  const navLinks = menu ? Array.from(menu.querySelectorAll('.nav__link')) : [];
  const fab      = document.querySelector('.whatsapp-fab');

  if (!nav) return;

  /* ---- Nav transparency / scrolled state ---- */
  function updateNavState() {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('nav--scrolled', scrolled);
    nav.classList.toggle('nav--transparent', !scrolled);

    if (fab) {
      fab.classList.toggle('is-visible', window.scrollY > 300);
    }
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  /* ---- Mobile menu toggle ---- */
  function closeMobileMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      const next   = !isOpen;
      toggle.setAttribute('aria-expanded', String(next));
      toggle.setAttribute('aria-label', next ? 'Close menu' : 'Open menu');
      menu.classList.toggle('is-open', next);
      document.body.style.overflow = next ? 'hidden' : '';
    });

    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMobileMenu();
        toggle.focus();
      }
    });
  }

  /* ---- Scroll spy — highlight active section link ---- */
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function updateActiveLink() {
    const offset = window.scrollY + 100;
    let current  = '';

    sections.forEach(section => {
      if (section.offsetTop <= offset) current = section.id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-active', href === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ---- Smooth scroll for all in-page anchors ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
