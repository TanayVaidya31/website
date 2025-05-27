// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Page transition effect
function navigateWithFade(e, href) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = href;
    }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('http')) {
                navigateWithFade(e, href);
            }
        });
    });
});
