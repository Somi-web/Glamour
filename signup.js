document.addEventListener('DOMContentLoaded', function () {

  const registerBtn = document.querySelector('.reg-btn-primary');
  const regForm = document.querySelector('.reg-form');
  const regInputs = document.querySelectorAll('.reg-input');

  const nameInput = regInputs[0];
  const emailInput = regInputs[1];
  const passwordInput = regInputs[2];

  if (registerBtn) {
    registerBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (name === '') {
        alert('Please enter your name.');
        return;
      }

      if (email === '') {
        alert('Please enter your email.');
        return;
      }

      if (password === '') {
        alert('Please enter your password.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
      }

      // All good — show success message
      regForm.innerHTML = `
        <div class="reg-success">
          <p class="reg-success-text">Registration successful! Redirecting to login...</p>
          <div class="reg-spinner"></div>
        </div>
      `;

      setTimeout(() => {
        window.location.href = 'login.html';
      }, 3000);

    });
  }
});
