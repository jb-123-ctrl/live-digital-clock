function updateClock() {
  const now = new Date();

  // Time in HH:MM:SS
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

  // Date: Month Day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString('en-US', options);
  document.getElementById("date").textContent = currentDate;

  // Day of the week
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById("day").textContent = weekdays[now.getDay()];
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
