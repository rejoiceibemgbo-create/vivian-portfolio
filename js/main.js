document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const year = document.getElementById('year');
  const themeToggle = document.querySelector('.theme-toggle');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-links a').forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isActive = themeToggle.classList.toggle('active');
      document.body.classList.toggle('green-mode', isActive);
      const icon = themeToggle.querySelector('i');

      if (icon) {
        icon.classList.toggle('fa-moon', !isActive);
        icon.classList.toggle('fa-sun', isActive);
      }

      themeToggle.setAttribute('aria-pressed', String(isActive));
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const subject = `[Portfolio contact] ${formData.get('subject')}`;
      const body = [
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        '',
        formData.get('message'),
      ].join('\n');
      const mailto = `mailto:Nmaedwin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

