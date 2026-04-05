// This function contains the "Master" HTML for your navigation
const injectNav = () => {
    const navTag = document.querySelector('nav'); // Finds the <nav> tag in your HTML
    
    if (navTag) {
        navTag.innerHTML = `
            <a href="index.html" class="logo-link">
               <div class="compass-box"><div class="needle"></div></div>
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
                <a href="contact.html" class="cta-btn">Start a Project</a>
            </div>
        `;
    }
};

// Run the function as soon as the page loads
document.addEventListener('DOMContentLoaded', injectNav);
