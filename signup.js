document.addEventListener('DOMContentLoaded', function () {

  // Input focus animations
  const inputs = document.querySelectorAll('.reg-input');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.01)';
      input.parentElement.style.transition = 'transform 0.2s ease';
    });
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
    });
  });

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

     
