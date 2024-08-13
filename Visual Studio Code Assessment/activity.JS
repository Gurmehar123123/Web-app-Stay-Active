document.addEventListener('DOMContentLoaded', function() {
    // Get the Go Back button by its id
    const goBackButton = document.getElementById('goBackButton');

    // Add click event listener to the Go Back button
    goBackButton.addEventListener('click', function() {
        // Navigate to main menu.html
        window.location.href = 'main menu.html';
    });

    // Get the Activity button by its id
    const activityButton = document.getElementById('activityButton');

    // Add click event listener to the Activity button
    activityButton.addEventListener('click', function() {
        // Navigate to activity.html
        window.location.href = 'activity.html';
    });

    // Get the EULA link by its id
    const eulaLink = document.getElementById('eulaLink');

    // Add click event listener to the EULA link
    eulaLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'EULA.html'; // Redirect to the EULA.html page
    });
});

// activity.js

// Get the Jogging button by its ID
const joggingButton = document.getElementById('joggingButton');

// Add a click event listener to the Jogging button
joggingButton.addEventListener('click', () => {
    // Redirect to the jogging.html page
    window.location.href = 'jogging.html';
});

document.addEventListener('DOMContentLoaded', function() {
    // Navigate to activity.html when the Go Back button is clicked
    document.getElementById('goBackButton').addEventListener('click', function() {
        window.location.href = 'main menu.html';
    });

    // Navigate to swimming.html when the Swimming button is clicked
    document.getElementById('swimmingButton').addEventListener('click', function() {
        window.location.href = 'swimming.html';
    });
});

 // Navigate to swimming.html when the Swimming button is clicked
 document.getElementById('cyclingButton').addEventListener('click', function() {
    window.location.href = 'cycling.html';
});

 // Navigate to swimming.html when the Swimming button is clicked
 document.getElementById('miniCardioButton').addEventListener('click', function() {
    window.location.href = 'minicardio.html';
});


