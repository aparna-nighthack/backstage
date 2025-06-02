
// Configure the responsiveness for the navbar and other interactive elements

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    if (navbarToggle && navbarMenu) {
        // Toggle the responsive navigation menu
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('show');
        });
    }

    // Example interaction: Change theme color on button click
    const themeToggleButton = document.querySelector('#themeToggleButton');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme'); // Assuming dark-theme is defined in CSS
        });
    }
});