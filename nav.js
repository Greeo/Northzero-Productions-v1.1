/* ============================================================
   NORTHZERO NAV ENGINE v2.2 | 2026
   Targets: #hamburger-menu / #nav-links-container / .active
   v2.2: iOS Safari touch event fixes
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks  = document.getElementById('nav-links-container');

    if (!hamburger || !navLinks) return;

    // --- Hamburger toggle ---
    // iOS Safari does not reliably fire 'click' on non-anchor,
    // non-button elements. Since hamburger is a <button> this
    // should be fine, but we add touchend as a fallback anyway.
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('touchend', function (e) {
        e.preventDefault(); // prevent the ghost click that fires ~300ms later
        toggleMenu();
    });

    function toggleMenu() {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isOpen));
    }

    // --- Close menu when a non-dropdown nav link is clicked ---
    navLinks.querySelectorAll('a:not(.dropbtn)').forEach(link => {
        link.addEventListener('click', closeMenu);
        link.addEventListener('touchend', function (e) {
            // Let the link navigate — don't preventDefault here
            closeMenu();
        });
    });

    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        // Also close any open dropdowns
        document.querySelectorAll('.dropdown-content.open').forEach(d => {
            d.classList.remove('open');
            const btn = d.previousElementSibling;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    // --- Mobile dropdown toggle ---
    // iOS Safari: <a> tags inside a nav do not receive click events
    // unless the parent element is explicitly made clickable.
    // We handle both click and touchend to cover all cases.
    const dropbtns = document.querySelectorAll('.dropbtn');

    dropbtns.forEach(btn => {
        btn.setAttribute('aria-haspopup', 'true');
        btn.setAttribute('aria-expanded', 'false');

        function handleDropbtn(e) {
            // Only intercept on mobile (hamburger visible)
            const hamburgerVisible = window.getComputedStyle(hamburger).display !== 'none';
            if (!hamburgerVisible) return;

            e.preventDefault();
            e.stopPropagation(); // prevent the outside-click handler firing immediately

            const dropdown = btn.nextElementSibling;
            if (!dropdown) return;

            const isOpen = dropdown.classList.contains('open');

            // Close all other open dropdowns
            document.querySelectorAll('.dropdown-content.open').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('open');
                    const b = d.previousElementSibling;
                    if (b) b.setAttribute('aria-expanded', 'false');
                }
            });

            dropdown.classList.toggle('open', !isOpen);
            btn.setAttribute('aria-expanded', String(!isOpen));
        }

        btn.addEventListener('click', handleDropbtn);
        btn.addEventListener('touchend', handleDropbtn);
    });

    // --- Escape key ---
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMenu();
            hamburger.focus();
        }
    });

    // --- Outside click / tap to close ---
    // iOS Safari: document does not receive click events unless
    // an element has a cursor:pointer style OR we listen on touchend.
    function handleOutsideClick(e) {
        if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            closeMenu();
        }
    }

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchend', handleOutsideClick);
});
