/**
 * Northzero Productions - Universal Navigation Master
 */

const injectNavigation = () => {
    const navElement = document.querySelector('nav');
    if (!navElement) return;

    navElement.innerHTML = `
        <a href="index.html" class="logo-link" id="mainLogo">
           <div class="compass-box">
               <div class="needle"></div>
           </div>
           <div class="logo-text">
               <div class="main-title">NorthZero</div>
               <div class="sub-title">Productions</div>
           </div>
        </a>
        
        <div class="nav-links">
            <a href="index.html">Agency</a>
            <a href="work.html">Selected Works</a>
            <a href="about.html">The Lens</a>
            <a href="services.html">Services</a>
            <a href="policies.html">Policies</a>
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
            <a href="about.html" onclick="toggleMenu()">The Lens</a>
            <a href="services.html" onclick="toggleMenu()">Services</a>
            <a href="policies.html" onclick="toggleMenu()">Policies</a>
            <a href="contact.html" class="cta-btn" onclick="toggleMenu()">Start a Project</a>
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
