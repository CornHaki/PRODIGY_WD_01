document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const email = event.target[0].value;
      alert(`Thank you for contacting us ${email}!`);
      event.target.reset();
  });
  });
  