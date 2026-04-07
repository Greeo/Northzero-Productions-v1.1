/* NORTHZERO NAV ENGINE - VERIFIED 2026 */
console.log("Nav.js is loaded and running");

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('nz-hamburger-trigger');
    const menuHook = document.getElementById('nz-links-hook');

    if (!trigger || !menuHook) {
        console.error("NZ-Error: Navigation IDs not found on this page.");
        return;
    }

    trigger.onclick = function(e) {
        e.preventDefault();
        console.log("Hamburger Clicked");
        
        // Toggle the classes
        menuHook.classList.toggle('active-menu');
        trigger.classList.toggle('is-active');
        
        // Optional: Log the current state
        const isOpen = menuHook.classList.contains('active-menu');
        console.log("Menu Status: " + (isOpen ? "OPEN" : "CLOSED"));
    };
});
