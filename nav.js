/**
 * Northzero Productions - Master Navigation Injector
 */
const injectNav = () => {
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error("Northzero: <nav> tag not found on this page.");
        return;
    }

    nav.innerHTML = `
        <a href="index.html" class="logo-link">
            <div class="compass-box"><div class="needle"></div></div>
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
            <a href="contact.html" style="border: 1px solid var(--nz-gold); padding: 8px 15px; color: var(--nz-gold); text-decoration: none;">Start a Project</a>
        </div>
    `;
};

// Ensures the script fires even if the browser is slow
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
} else {
    injectNav();
}
