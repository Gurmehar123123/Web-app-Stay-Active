

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its id
    const startNow = document.getElementById('startNow');

    // Add click event listener to the start button
    startNow.addEventListener('click', function() {
        // Navigate to the main menu.html page
        window.location.href = 'main menu.html';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("eulaLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "EULA.html"; // Redirect to the EULA.html page
    });
});
