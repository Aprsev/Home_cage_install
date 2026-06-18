/**
 * Home Cage Install Guide — Main Script
 * GitHub Pages: https://aprsev.github.io/Home_cage_install/
 */

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-inner a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === './' + currentPath) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

