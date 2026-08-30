export function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = menu ? Array.from(menu.querySelectorAll('.nav__link')) : [];
  const fab = document.querySelector('.whatsapp-fab');

  if (!nav) return;

  function updateNavState() {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('nav--scrolled', scrolled);
    nav.classList.toggle('nav--transparent', !scrolled);

    if (fab) {
      const hasHero = !!document.getElementById('hero');
      fab.classList.toggle('is-visible', !hasHero || window.scrollY > 300);
    }
  }

  function closeMobileMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      const next = !isOpen;
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

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const targetId = href?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;

      closeMobileMenu();
      if (!target) return;

      e.preventDefault();
      if (history.pushState) {
        history.pushState(null, '', '#' + targetId);
      } else {
        window.location.hash = targetId;
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('hashchange', () => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }), 100);
    }
  }
}
