document.addEventListener('DOMContentLoaded', function() {
    // Get the Go Back button by its id
    const goBackButton = document.getElementById('goBackButton');

    // Add click event listener to the Go Back button
    goBackButton.addEventListener('click', function() {
        // Navigate to index.html
        window.location.href = 'index.html';
    });

    // Get the Activity button by its class
    const startButton = document.querySelector('.activity');

    // Add click event listener to the Activity button
    startButton.addEventListener('click', function() {
        // Navigate to main_menu.html
        window.location.href = 'activity.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("eulaLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "EULA.html"; // Redirect to the EULA.html page
    });
});
