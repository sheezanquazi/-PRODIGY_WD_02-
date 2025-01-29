let timer = null; // To store the interval ID
let seconds = 0; // To track the time in seconds
let running = false; // To check if the stopwatch is running

const display = document.getElementById("display"); // Stopwatch display
const laps = document.getElementById("laps"); // Lap times list

// Function to format and update the display
function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  display.textContent = `${hrs}:${mins}:${secs}`;
}

// Function to start the stopwatch
function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000); // Update every second
  }
}

// Function to pause the stopwatch
function pauseTimer() {
  if (running) {
    running = false;
    clearInterval(timer); // Stop the interval
  }
}

// Function to reset the stopwatch
function resetTimer() {
  running = false;
  clearInterval(timer); // Stop the interval
  seconds = 0; // Reset time to 0
  updateDisplay(); // Update the display to show 00:00:00
  laps.innerHTML = ""; // Clear lap times
}

// Function to record a lap time
function recordLap() {
  if (running) {
    const lap = document.createElement("li");
    lap.textContent = display.textContent;
    laps.appendChild(lap); // Add the lap time to the list
  }
}

// Attach event listeners to the buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

// Initialize the display to 00:00:00
updateDisplay();
