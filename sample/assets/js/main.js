import { initNavigation }   from './navigation.js';
import { initHeroIntro }    from './hero-intro.js';
import { initGallery }      from './gallery.js';
import { initTestimonials } from './testimonials.js';
import { initFAQ }          from './faq.js';
import { initForm }         from './form.js';

function runInit() {
  initNavigation();
  initHeroIntro();
  initGallery();
  initTestimonials();
  initFAQ();
  initForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runInit);
} else {
  runInit();
}
