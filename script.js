const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const revealElements = document.querySelectorAll('.reveal');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
  observer.observe(el);
});