/* ============================================
   SONNIA PILLAJO — PORTFOLIO
   script.js
   ============================================ */

/* ── MOBILE MENU TOGGLE ── */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


/* ── SMOOTH ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observerNav.observe(s));


/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(
  '.skill-card, .soft-card, .project-card, .interest-chip, .about-stats .stat'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observerReveal = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay based on sibling index
      const siblings = Array.from(entry.target.parentElement.children);
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      observerReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observerReveal.observe(el));


/* ── SKILL BARS ANIMATION ── */
const skillBars = document.querySelectorAll('.skill-bar');

const observerBars = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar   = entry.target;
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
      observerBars.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observerBars.observe(bar));


/* ── NAV SHADOW ON SCROLL ── */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});