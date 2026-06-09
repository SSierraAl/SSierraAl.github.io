/**
 * =====================================================
 * BUSINESS WEBSITE JAVASCRIPT
 * =====================================================
 * 
 * This file handles:
 * - Navigation bar scroll effect
 * - Back to top button
 * - Portfolio filtering
 * - Smooth scroll for anchor links
 * - Active nav link highlighting
 * - Fade-in animations on scroll
 * =====================================================
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ====================================================
    // NAVBAR SCROLL EFFECT
    // Adds 'scrolled' class when user scrolls down
    // ====================================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ====================================================
    // BACK TO TOP BUTTON
    // Shows button when scrolled down, hides at top
    // ====================================================
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // ====================================================
    // ACTIVE NAV LINK ON SCROLL
    // Highlights the nav link for the current section
    // ====================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function activateNavLink() {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', activateNavLink);
    
    // ====================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ====================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ====================================================
    // PORTFOLIO FILTER
    // Filters portfolio items by category
    // ====================================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease';
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // ====================================================
    // FADE-IN ANIMATION ON SCROLL
    // Elements fade in when they enter the viewport
    // ====================================================
    const fadeElements = document.querySelectorAll('.service-card, .portfolio-card, .team-card, .testimonial-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
    
    // ====================================================
    // CONTACT FORM HANDLING
    // ====================================================
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // ====================================================
            // FORM SUBMISSION OPTIONS
            // ====================================================
            // Option 1: Use formspree.io (free email service)
            // Change the form action to: https://formspree.io/f/YOUR_FORM_ID
            // Then remove this JavaScript handler
            //
            // Option 2: Use EmailJS
            // Sign up at https://www.emailjs.com/
            // Install the SDK and send emails directly
            //
            // Option 3: Connect to your own backend API
            // ====================================================
            
            // For now, show a success message
            alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // ====================================================
    // NEWSLETTER FORM
    // ====================================================
    const newsletterForm = document.querySelector('footer form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // ====================================================
    // TYPING EFFECT FOR HERO (Optional)
    // Uncomment to add typing effect to hero headline
    // ====================================================
    /*
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
    */
    
    // ====================================================
    // COUNTER ANIMATION FOR STATS
    // Animates numbers when they come into view
    // ====================================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const suffix = stat.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = Math.ceil(target / 100);
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = current + suffix;
                }
            }, 20);
        });
    }
    
    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stat-number');
    if (statsSection && !counted) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    animateCounters();
                    counted = true;
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    console.log('Business Website loaded successfully!');
});