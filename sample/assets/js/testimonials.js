export function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  const prev = document.querySelector('.testimonials__arrow--prev');
  const next = document.querySelector('.testimonials__arrow--next');

  function scrollByCard(dir) {
    const card = track.querySelector('.card--testimonial');
    const step = card ? card.getBoundingClientRect().width + 24 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  if (prev) prev.addEventListener('click', () => scrollByCard(-1));
  if (next) next.addEventListener('click', () => scrollByCard(1));
}
