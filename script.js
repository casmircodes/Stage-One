// Current time display for profile page
const timeEl = document.querySelector('[data-testid="test-user-time"]');
if (timeEl) {
  function updateTime() {
    timeEl.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Contact form validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');
    const success = form.querySelector('[data-testid="test-contact-success"]');
    
    // Clear previous errors
    form.querySelectorAll('.error').forEach((el) => (el.textContent = ''));
    
    if (!name.value.trim()) {
      valid = false;
      form.querySelector('#error-name').textContent = 'Full name is required.';
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      valid = false;
      form.querySelector('#error-email').textContent = 'Enter a valid email.';
    }
    
    if (!subject.value.trim()) {
      valid = false;
      form.querySelector('#error-subject').textContent = 'Subject is required.';
    }
    
    if (!message.value.trim() || message.value.trim().length < 10) {
      valid = false;
      form.querySelector('#error-message').textContent =
        'Message must be at least 10 characters.';
    }
    
    if (valid) {
      success.hidden = false;
      form.reset();
      setTimeout(() => (success.hidden = true), 3000);
    }
  });
                        }
