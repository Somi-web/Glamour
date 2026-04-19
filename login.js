const togglePassword = document.getElementById('togglePassword');
const loginPassword = document.getElementById('loginPassword');
const eyeIcon = document.getElementById('eyeIcon');

if (togglePassword) {
  togglePassword.addEventListener('click', () => {
    const isPassword = loginPassword.type === 'password';
    loginPassword.type = isPassword ? 'text' : 'password';
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
  });
}

// Input focus scale animation
const loginInputs = document.querySelectorAll('.login-input');
loginInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.login-field').style.transform = 'scale(1.01)';
    input.closest('.login-field').style.transition = 'transform 0.2s ease';
  });
  input.addEventListener('blur', () => {
    input.closest('.login-field').style.transform = 'scale(1)';
  });
});


