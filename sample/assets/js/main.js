import { initNavigation } from './navigation.js';
import { initGallery }    from './gallery.js';
import { initFAQ }        from './faq.js';
import { initForm }       from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initGallery();
  initFAQ();
  initForm();
});
