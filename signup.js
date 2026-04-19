document.addEventListener('DOMContentLoaded', function () {

  const registerBtn = document.querySelector('.reg-btn-primary');
  const regForm = document.querySelector('.reg-form');

  if (registerBtn) {
    registerBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the link from going anywhere immediately

      // Replace the form with the success message and spinner
      regForm.innerHTML = `
        <div class="reg-success">
          <p class="reg-success-text">Registration successful! Redirecting to login...</p>
          <div class="reg-spinner"></div>
        </div>
      `;

      // Wait 3 seconds then redirect to login page
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 3000);

    });
  }
});