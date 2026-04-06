/* NORTHZERO NAVIGATION LOGIC 
   This script only handles the mobile toggle. 
   The HTML is now hard-coded in the files for stability.
*/

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links-container');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggles the mobile menu visibility
            navLinks.classList.toggle('active');
            
            // Toggles the hamburger animation (if you have the CSS for it)
            hamburger.classList.toggle('is-active');
        });
    }
});
