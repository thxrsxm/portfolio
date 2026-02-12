// Simple animation for project cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class defined in CSS
                entry.target.classList.add('visible');
                // Stop watching this element
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    projectCards.forEach(card => {
        observer.observe(card);
    });
});