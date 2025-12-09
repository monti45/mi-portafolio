function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Efecto de ocultar header cuando baja
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;

if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.top = '-100px';
} else {
    header.style.top = '0';
}

lastScroll = currentScroll;
});
