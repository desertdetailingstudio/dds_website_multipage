
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (navMenu) {
    const isOpen = navMenu.classList.toggle('open');
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', String(isOpen));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const stageEls = document.querySelectorAll('.process-stage');
  if (stageEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    stageEls.forEach((stage) => observer.observe(stage));
  }
});
