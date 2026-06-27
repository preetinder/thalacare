// ThalaCare India — Shared JS

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Mark active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Accordion
document.querySelectorAll('.acc-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.acc-trigger').forEach(b => { b.classList.remove('open'); b.nextElementSibling.classList.remove('open'); });
    if (!isOpen) { btn.classList.add('open'); body.classList.add('open'); }
  });
});

// Camp registration form
const campForm = document.getElementById('campForm');
if (campForm) {
  campForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    campForm.reset();
    window.scrollTo({ top: document.getElementById('successMsg').offsetTop - 100, behavior: 'smooth' });
  });
}

// Home CSS stub (no extra CSS needed)
