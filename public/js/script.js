document.addEventListener('DOMContentLoaded', () => {

    // Image Loading Handler
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    let lastScrollY = 0;
    let ticking = false;

    if (menuToggle && header) {
        menuToggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;

        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            if (window.innerWidth <= 768) {
                header.classList.remove('scrolled');
            } else if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
            ticking = false;
        });
    }, { passive: true });



    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.tilt-effect');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            // Rotate based on mouse position
            const rotateX = (mouseY / (cardHeight / 2)) * -5; // Max 5deg rotation
            const rotateY = (mouseX / (cardWidth / 2)) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Load Discord Avatars usando el bot del servidor
    const staffCards = document.querySelectorAll('.staff-card[data-discord-id]');
    
    staffCards.forEach(card => {
        const discordId = card.getAttribute('data-discord-id');
        const avatarImg = card.querySelector('.avatar-img');
        
        // Llamar al endpoint del backend que usa el bot token
        fetch(`/api/discord/avatar/${discordId}`)
            .then(response => response.json())
            .then(data => {
                avatarImg.src = data.avatarUrl;
            })
            .catch(() => {
                avatarImg.src = '/assets/default-avatar.png';
            });
    });

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            question.setAttribute('aria-expanded', String(!isExpanded));
        });
    });
});
