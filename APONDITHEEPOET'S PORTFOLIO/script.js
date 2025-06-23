document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Smooth scrolling for navigation links
    if (hamburger && navMenu) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Typing animation for hero text
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ['Resonate', 'Inspire', 'Challenge', 'Transform', 'Heal'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typedTextSpan) return;
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
    if (typedTextSpan) setTimeout(type, 1000);

    // Poetry play button interaction
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.poetry-card');
            if (!card) return;
            const titleElem = card.querySelector('h3');
            const title = titleElem ? titleElem.textContent : 'Unknown Title';
            alert(`Now playing: ${title}\n\nIn a complete implementation, this would launch an audio player.`);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const subject = document.getElementById('subject')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (name && email && subject && message) {
                alert('Thank you for your message! Aponditheepoet will respond soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
