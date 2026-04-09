/* ============================================================
   NORTHZERO NAV ENGINE v2.0 | 2026
   Targets: #hamburger-menu / #nav-links-container / .active
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks  = document.getElementById('nav-links-container');

    if (!hamburger || !navLinks) return;

    // --- Toggle mobile menu ---
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // --- Close menu when any nav link is clicked ---
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Close menu on Escape key ---
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    });

    // --- Close menu on outside click ---
    document.addEventListener('click', e => {
        if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});
