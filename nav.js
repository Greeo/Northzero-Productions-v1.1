document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('nz-hamburger-trigger');
    const menuHook = document.getElementById('nz-links-hook');

    if (trigger && menuHook) {
        trigger.onclick = function() {
            // This toggles the menu slide-out
            menuHook.classList.toggle('active-menu');
            
            // This toggles the "X" animation
            trigger.classList.toggle('is-active');
            
            console.log("NZ-Menu Toggled");
        };
    }
});
