function handleScroll() {
    const featuresImage = document.querySelector('.features-image');
    const position = featuresImage.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
        featuresImage.classList.add('visible');
    }
}

// Función para cambiar el tema
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
}

// Carrusel automático
let currentSlide = 0;
const carousel = document.getElementById('carousel');

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    carousel.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

// Iniciar el carrusel automático
setInterval(nextSlide, 4000);

// Event listeners
window.addEventListener('scroll', handleScroll);
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
handleScroll();