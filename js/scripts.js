document.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(max-width: 1488px)');
    const thresholdValue = mediaQuery.matches ? 0 : 0.3;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para que no se siga observando una vez mostrado
            }
        });
    }, {
        root: null, // Observa toda la página
        rootMargin: "0px",
        threshold: thresholdValue // Cambia el valor del umbral según la resolución
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
});
