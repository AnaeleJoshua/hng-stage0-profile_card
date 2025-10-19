// Display current time in milliseconds
const timeElement = document.getElementById('current-time');

function updateTime() {
  timeElement.textContent = Date.now();
//   console.log(Date.now())
}

// Update immediately and every second
updateTime();
setInterval(updateTime, 1000);
