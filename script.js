// Toggle Nav Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submit
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting HealthBoost AI!');
  contactForm.reset();
});
// Animation for Features Section
const featureItems = document.querySelectorAll('.features-grid .feature-item');

const observerFeatures = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observerFeatures.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

featureItems.forEach(item => {
  observerFeatures.observe(item);
});
