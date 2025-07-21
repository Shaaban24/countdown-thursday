function getNextThursday() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilThursday = (4 - dayOfWeek + 7) % 7 || 7;
  const nextThursday = new Date(now);
  nextThursday.setDate(now.getDate() + daysUntilThursday);
  nextThursday.setHours(0, 0, 0, 0);
  return nextThursday;
}

function updateCountdown() {
  const now = new Date();
  const target = getNextThursday();
  const totalSeconds = Math.floor((target - now) / 1000);

  if (totalSeconds <= 0) {
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});