const countdownEl = document.getElementById('countdown');

if (countdownEl) {
  let totalSeconds = 10 * 60; // 10 minutes

  const timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      countdownEl.textContent = '0:00';
      countdownEl.style.color = '#ff4444';
      return;
    }

    totalSeconds--;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    countdownEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Turn red when under 1 minute
    if (totalSeconds < 60) {
      countdownEl.style.color = '#ff4444';
    }

  }, 1000);
}