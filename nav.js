/* NORTHZERO NAVIGATION ENGINE v2.0
   Synchronized with NZ-ID Global Architecture
*/

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('nz-hamburger-trigger');
    const menuHook = document.getElementById('nz-links-hook');
    const body = document.body;

    if (trigger && menuHook) {
        trigger.addEventListener('click', () => {
            // 1. Toggle the menu visibility
            const isOpen = menuHook.classList.toggle('active-menu');
            
            // 2. Toggle the hamburger "X" animation
            trigger.classList.toggle('is-active');
            
            // 3. Prevent background scrolling when menu is open
            if (isOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }

            console.log("NZ-Menu: " + (isOpen ? "Open" : "Closed"));
        });

        // 4. Close menu if a link is clicked (Fixes "Anchor Link" issues)
        const navLinks = menuHook.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuHook.classList.remove('active-menu');
                trigger.classList.remove('is-active');
                body.style.overflow = 'auto';
            });
        });
    }
});
