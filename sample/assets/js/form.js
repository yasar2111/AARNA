export function initForm() {
  const form    = document.getElementById('enquiry-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;

  const submitBtn = form.querySelector('.contact-form__submit');
  const submitLabel = submitBtn ? submitBtn.textContent.trim() : 'Send Enquiry';
  let formNote = form.querySelector('.form-note');

  /* ── Validation rules ── */
  const validators = {
    name(val) {
      if (!val.trim()) return 'Please enter your full name.';
      if (val.trim().length < 2) return 'Name must be at least 2 characters.';
      return '';
    },
    phone(val) {
      if (!val.trim()) return 'Please enter your phone number.';
      const digits = val.replace(/\D/g, '');
      if (digits.length < 10) return 'Please enter a valid 10-digit phone number.';
      return '';
    },
    email(val) {
      if (!val.trim()) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
      return '';
    },
    event_type(val) {
      if (!val) return 'Please select an event type.';
      return '';
    },
  };

  /* ── Show / clear a field error ── */
  function setError(field, msg) {
    const errorEl = document.getElementById('error-' + field.name.replace('_', '-'));
    if (!errorEl) return;
    errorEl.textContent = msg;
    if (msg) {
      field.classList.add('is-error');
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.classList.remove('is-error');
      field.removeAttribute('aria-invalid');
    }
  }

  /* ── Validate a single field ── */
  function validateField(field) {
    const rule = validators[field.name];
    if (!rule) return true;
    const msg = rule(field.value);
    setError(field, msg);
    return !msg;
  }

  /* ── Validate the whole form ── */
  function validateAll() {
    let valid = true;
    Object.keys(validators).forEach(name => {
      const field = form.elements[name];
      if (field && !validateField(field)) valid = false;
    });
    return valid;
  }

  /* ── Live validation on blur (and re-check on input if already errored) ── */
  Object.keys(validators).forEach(name => {
    const field = form.elements[name];
    if (!field) return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('is-error')) validateField(field);
    });
  });

  /* ── Event Card CTAs: Auto-select event type in form ── */
  document.querySelectorAll('[data-event-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      const eventType = btn.dataset.eventType;
      const eventSelect = form.elements['event_type'];
      if (eventSelect && eventType) {
        eventSelect.value = eventType;
        setError(eventSelect, '');
      }
    });
  });

  /* ── Set min date to today ── */
  const dateField = form.elements['preferred_date'];
  if (dateField) {
    const today = new Date().toISOString().split('T')[0];
    dateField.setAttribute('min', today);
  }

  /* ── Inline network-error banner (created once, reused) ── */
  function showFormNote(message) {
    if (!formNote) {
      formNote = document.createElement('p');
      formNote.className = 'form-note';
      formNote.setAttribute('role', 'alert');
      form.insertBefore(formNote, submitBtn);
    }
    formNote.textContent = message;
    formNote.hidden = false;
  }

  function hideFormNote() {
    if (formNote) formNote.hidden = true;
  }

  /* ── Submit — posts to FormSubmit.co via the form's own action URL ── */
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateAll()) return;

    hideFormNote();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error('Request failed');

      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (err) {
      showFormNote(
        'Something went wrong sending your enquiry. Please try again, or reach us directly on WhatsApp / phone.'
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitLabel;
      }
    }
  });

  /* ── "Send Another Enquiry" reset ── */
  const resetBtn = success.querySelector('.btn--reset-form');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      Object.keys(validators).forEach(name => {
        const field = form.elements[name];
        if (field) setError(field, '');
      });
      hideFormNote();
      form.hidden = false;
      success.hidden = true;
      const firstInput = form.querySelector('input');
      if (firstInput) firstInput.focus();
    });
  }
}
