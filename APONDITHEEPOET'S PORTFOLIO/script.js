// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Typing animation for hero text
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Resonate', 'Inspire', 'Challenge', 'Transform', 'Heal'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    
    if (!isDeleting) {
        typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    } else {
        typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    }
}

// Start typing effect after page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Poetry play button interaction
const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.poetry-card');
        const title = card.querySelector('h3').textContent;
        
        // In a real implementation, this would open a modal with the audio player
        alert(`Now playing: ${title}\n\nIn a complete implementation, this would launch an audio player.`);
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        // In a real implementation, this would send the form data to a server
        alert('Thank you for your message! Aponditheepoet will respond soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});