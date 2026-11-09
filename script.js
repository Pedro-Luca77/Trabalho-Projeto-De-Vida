// Animação de entrada dos cards ao rolar a página
const cards = document.querySelectorAll('.container, .container-wide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
