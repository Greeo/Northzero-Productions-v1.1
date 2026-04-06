/**
 * Northzero Productions - Master Navigation Injector
 */

const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links-container');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('is-active'); // Animates the hamburger to an 'X'
    });
}

const nav = document.querySelector('nav');

if (nav) {
    nav.innerHTML = `
        <a href="index.html" class="logo-link">
            <div class="compass-box"><div class="needle"></div></div>
            <div class="logo-text">
                <span class="main-title">NORTHZERO</span>
                <span class="sub-title">PRODUCTIONS</span>
            </div>
        </a>

        <div class="hamburger" id="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="nav-links" id="nav-links-container">
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
            <a href="contact.html" class="cta-button">Start a Project</a>
        </div>
    `;
}

// TOGGLE LOGIC FOR MOBILE
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links-container');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });
}
