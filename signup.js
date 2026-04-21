import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBtVTR7hUXxAoXmJNQj3cm_A_5Ty-7xZDc",
  authDomain: "glamour-app-b33f6.firebaseapp.com",
  projectId: "glamour-app-b33f6",
  storageBucket: "glamour-app-b33f6.firebasestorage.app",
  messagingSenderId: "586600362166",
  appId: "1:586600362166:web:55c39b34a41b504ab03617"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

         createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Optional: you can store name later in Firestore
      regForm.innerHTML = `
      <div class="reg-success">
      <p class="reg-success-text">Registration successful! Redirecting to login...</p>
          <div class="reg-spinner"></div>
      </div>
      `;
      setTimeout(() => {
      window.location.href = 'login.html';
      }, 2000);
      })
      .catch((error) => {
      alert(error.message);
      });
});
