document.addEventListener('DOMContentLoaded', function() {
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
        threshold: 0.7 // Se activa cuando el 20% del elemento es visible
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
});
