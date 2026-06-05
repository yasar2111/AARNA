export function initForm() {
  const form    = document.getElementById('enquiry-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;

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

  /* ── Submit ── */
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateAll()) return;

    /* Hide form, show success */
    form.hidden = true;
    success.hidden = false;
    success.focus();
  });
}
