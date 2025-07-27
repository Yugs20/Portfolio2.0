// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');
  
  // Toggle mobile menu
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close mobile menu when clicking on a link
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileNavToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileNavToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileNavToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect for hero title
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150);
    }, 1000);
  }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;
      
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
});

// Active Navigation Highlighting
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

// Simple Hover Effects
document.addEventListener('DOMContentLoaded', () => {
  const interactiveElements = document.querySelectorAll('.language-item, .project-card, .skill-item, .contact-link, .stat-item');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
    });
  });
});

// Performance Optimization: Debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll-based effects can go here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  // Add loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in-out';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
