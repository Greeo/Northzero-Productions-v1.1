/**
 * Northzero Productions - Universal Navigation Master
 */

const injectNavigation = () => {
    const navElement = document.querySelector('nav');
    if (!navElement) return;

    /* Add this to your injectNavigation function in nav.js */
    navElement.innerHTML = `
        <div class="nav-links">
            <a href="index.html">Agency</a>
            <a href="work.html">Selected Works</a>
            
            <div class="dropdown">
                <a href="all-services.html" class="dropbtn">Services</a>
                <div class="dropdown-content">
                    <a href="authority.html">Authority Suite</a>
                    <a href="architectural.html">Architectural Cinema</a>
                    <a href="tactile.html">Tactile Narratives</a>
                </div>
            </div>
            
            <a href="about.html">The Lens</a>
            <a href="contact.html" class="cta-btn">Start a Project</a>
        </div>
        `;
};

// Mobile Toggle Logic
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('burgerBtn');
    
    menu.classList.toggle('active');
    
    // Animate burger lines if your CSS supports it
    burger.classList.toggle('open');

    // Lock background scroll when menu is open
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', injectNavigation);
