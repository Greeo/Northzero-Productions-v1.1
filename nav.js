/**
 * Northzero Productions - Universal Navigation Master
 */

const injectNavigation = () => {
    const navElement = document.querySelector('nav');
    if (!navElement) return;

    navElement.innerHTML = `
        <a href="index.html" class="logo-link">
            <div class="compass-box">
                <div class="needle"></div>
            </div>
            <div class="logo-text">
                <span class="main-title">NORTHZERO</span>
                <span class="sub-title">PRODUCTIONS</span>
            </div>
        </a>

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

        <div class="hamburger-icon" id="burgerBtn" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="mobile-dropdown" id="mobileMenu">
            <a href="index.html" onclick="toggleMenu()">Agency</a>
            <a href="work.html" onclick="toggleMenu()">Selected Works</a>
            <a href="all-services.html" onclick="toggleMenu()">Services</a>
            <a href="about.html" onclick="toggleMenu()">The Lens</a>
            <a href="contact.html" onclick="toggleMenu()">Start a Project</a>
        </div>
    `;
};

// Mobile Toggle Logic
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('burgerBtn');
    
    if (menu) {
        menu.classList.toggle('active');
        burger.classList.toggle('open');

        // Lock background scroll when menu is open
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', injectNavigation);
