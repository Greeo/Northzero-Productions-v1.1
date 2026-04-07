/* NORTHZERO DYNAMIC NAVIGATION 
   This script handles the mobile toggle for the hard-coded HTML.
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT THE ELEMENTS FROM OUR NEW HTML
    const trigger = document.getElementById('nz-hamburger-trigger');
    const menuHook = document.getElementById('nz-links-hook');

    // 2. ONLY RUN IF THEY EXIST ON THE PAGE
    if (trigger && menuHook) {
        trigger.addEventListener('click', () => {
            // This adds/removes the 'active-menu' class we styled in CSS
            menuHook.classList.toggle('active-menu');
            
            // This animates the hamburger if you have the 'is-active' styles
            trigger.classList.toggle('is-active');
            
            console.log("Northzero Menu Toggled"); // For testing in your browser console
        });
    }
});
