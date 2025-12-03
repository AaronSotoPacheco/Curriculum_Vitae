document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón de alternar (hamburguesa) y el menú
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Lógica del menú móvil
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    // --- Efecto de 'Entrada' de Secciones al Hacer Scroll ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la sección visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplica los estilos de visibilidad y quita el efecto de desplazamiento
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // El estado inicial (oculto y desplazado) se define en CSS, pero lo reforzamos aquí
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        sectionObserver.observe(section);
    });
});