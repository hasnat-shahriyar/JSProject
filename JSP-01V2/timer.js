// Initialize variables
let timer; // Variable to store the timer reference
const element = document.getElementById("timer"); // Get the timer display element
let isPaused = false; // Flag to track if the timer is paused or running

// Immediately Invoked Function Expression (IIFE) to start the timer
(function() {
    let sec = 0; // Initialize seconds counter
    timer = setInterval(() => {
        // Timer execution
        if (!isPaused) { // If not paused
            element.innerHTML = "00:" + sec; // Update timer display
            sec++; // Increment seconds
        }
    }, 1000); // Timer runs every 1000 milliseconds (1 second)
})();

// Function to toggle between pausing and resuming the timer
function toggleTimer() {
    if (isPaused) { // If timer is paused
        isPaused = false; // Resume the timer
        document.getElementById("button").innerText = "Pause"; // Change button text to 'Pause'
    } else { // If timer is running
        isPaused = true; // Pause the timer
        document.getElementById("button").innerText = "Resume"; // Change button text to 'Resume'
    }
}

// Event listener for the button click to toggle the timer
document.getElementById("button").addEventListener("click", function() {
    toggleTimer(); // Calls the function to toggle the timer state
});
