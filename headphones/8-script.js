/**
 * Toggles the 'active' class on the hamburger icon and the off-screen menu
 * to show/hide the navigation panel on mobile devices.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the DOM elements
    const hamburger = document.getElementById('hamburger');
    const offScreenMenu = document.getElementById('offScreenMenu');
    
    // Add click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the icon and the menu simultaneously
        hamburger.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // Optional: Close the menu when a link inside is clicked
    const menuLinks = offScreenMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the 'active' class to slide the menu back out
            hamburger.classList.remove('active');
            offScreenMenu.classList.remove('active');
        });
    });
});