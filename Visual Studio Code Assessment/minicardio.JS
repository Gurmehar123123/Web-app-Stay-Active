document.addEventListener('DOMContentLoaded', function() {
    // Timer variables
    let timerMinutes = 1;
    let timerSeconds = 0;
    let timerInterval;
    const timerDisplay = document.getElementById('timerDisplay');

    // Update the timer display
    function updateTimerDisplay() {
        const minutes = String(timerMinutes).padStart(2, '0');
        const seconds = String(timerSeconds).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    // Increase the timer by one minute
    function increaseTimer() {
        if (timerMinutes < 59) {
            timerMinutes++;
            timerSeconds = 0; // Reset seconds when increasing minutes
            updateTimerDisplay();
        }
    }

    // Decrease the timer by one minute
    function decreaseTimer() {
        if (timerMinutes > 0) {
            if (timerSeconds > 0) {
                // If there are seconds remaining, we need to adjust the minute
                timerSeconds = 0; // Reset seconds to 0
            }
            timerMinutes--; // Decrease the minute
            updateTimerDisplay();
        }
    }

    // Start the timer
    function startTimer() {
        // Clear any existing interval
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Start the countdown
        timerInterval = setInterval(function() {
            if (timerMinutes === 0 && timerSeconds === 0) {
                clearInterval(timerInterval);
                timerInterval = null; // Timer has finished
                alert("Timer finished!");
            } else {
                if (timerSeconds === 0) {
                    if (timerMinutes > 0) {
                        timerMinutes--;
                        timerSeconds = 59;
                    }
                } else {
                    timerSeconds--;
                }
                updateTimerDisplay();
            }
        }, 1000); // Update every second
    }

    // Stop the timer
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // Reset the timer to initial state
    function resetTimer() {
        stopTimer(); // Stop any running timer
        timerMinutes = 1; // Reset to initial minutes
        timerSeconds = 0; // Reset seconds
        updateTimerDisplay();
    }

    // Event listeners for the timer buttons
    document.getElementById('plusButton').addEventListener('click', increaseTimer);
    document.getElementById('minusButton').addEventListener('click', decreaseTimer);
    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('stopButton').addEventListener('click', stopTimer);
    document.getElementById('resetButton').addEventListener('click', resetTimer); // Add reset button listener

    // Event listener for the EULA link
    const eulaLink = document.querySelector('nav a');
    if (eulaLink) {
        eulaLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = "EULA.html"; // Redirect to the EULA.html page
        });
    }

    // Initialize the timer display
    updateTimerDisplay();
});

document.getElementById('goBackButton').addEventListener('click', function() {
    window.location.href = 'activity.html'; // Redirect to activity.html
});
