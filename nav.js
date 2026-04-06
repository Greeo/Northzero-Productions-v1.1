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


