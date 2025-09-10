// ==== Smooth Scrolling ====
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==== Form Validation ====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email regex check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Message sent successfully! (Simulation)');
    form.reset();
  });
});

// ==== Optional: Scroll-to-Top Button ====
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.border = 'none';
scrollBtn.style.background = '#1f4037';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';

// Show button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
