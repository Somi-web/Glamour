document.addEventListener('DOMContentLoaded', function () {

  var withdrawBtn = document.getElementById('withdrawBtn');
  var withdrawPopup = document.getElementById('withdrawPopup');
  var popupOkBtn = document.getElementById('popupOkBtn');

  if (withdrawBtn) {
    withdrawBtn.onclick = function () {
      withdrawPopup.style.opacity = '1';
      withdrawPopup.style.pointerEvents = 'auto';
    };
  }

  if (popupOkBtn) {
    popupOkBtn.onclick = function () {
      window.location.href = 'payment.html';
    };
  }

  if (withdrawPopup) {
    withdrawPopup.onclick = function (e) {
      if (e.target === withdrawPopup) {
        withdrawPopup.style.opacity = '0';
        withdrawPopup.style.pointerEvents = 'none';
      }
    };
  }

});
