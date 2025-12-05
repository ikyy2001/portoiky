// Custom Cursor
const cursor = document.createElement('div');
const cursorFollower = document.createElement('div');
cursor.className = 'cursor';
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursor);
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .certificate-card, .skill-item, .social-link, .hamburger');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Loading Screen
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Trigger entrance animations
            triggerEntranceAnimations();
        }, 500);
    }, 2000);
});

// Entrance Animations
function triggerEntranceAnimations() {
    // Navbar animation
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'slideInDown 0.6s ease forwards';

    // Logo animation
    const logo = document.querySelector('.logo');
    setTimeout(() => {
        logo.style.animation = 'slideRotate 0.8s ease forwards';
    }, 200);

    // Nav links stagger
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.animation = 'slideInDown 0.5s ease forwards';
        }, 300 + (index * 100));
    });

    // Hero badge
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        setTimeout(() => {
            heroBadge.style.animation = 'rotateIn 0.8s ease forwards';
        }, 400);
    }

    // Hero title lines
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.animation = 'slideInLeft 0.8s ease forwards';
        }, 600 + (index * 150));
    });

    // Hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.animation = 'fadeIn 0.8s ease forwards';
        }, 1200);
    }

    // Hero description
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        setTimeout(() => {
            heroDescription.style.animation = 'slideInLeft 0.8s ease forwards';
        }, 1400);
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.animation = 'bounceIn 0.6s ease forwards';
        }, 1600 + (index * 150));
    });

    // Hero shape
    const heroShape = document.querySelector('.hero-shape');
    if (heroShape) {
        setTimeout(() => {
            heroShape.style.animation = 'slideInRight 1s ease forwards';
        }, 800);
    }
}

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Animate menu items when opening
    if (navMenu.classList.contains('active')) {
        const menuLinks = navMenu.querySelectorAll('.nav-link');
        menuLinks.forEach((link, index) => {
            link.style.animation = 'none';
            setTimeout(() => {
                link.style.animation = `slideInDown 0.4s ease forwards ${index * 0.1}s`;
            }, 10);
        });
    }
});

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Scroll-triggered animations with Intersection Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Add specific animations based on element type
            if (entry.target.classList.contains('section-title')) {
                entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
            } else if (entry.target.classList.contains('section-number')) {
                entry.target.style.animation = 'fadeIn 1s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe section headers
document.querySelectorAll('.section-title, .section-number').forEach(el => {
    observer.observe(el);
});

// Stagger animation for project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = Array.from(projectCards).indexOf(entry.target) * 0.15;
            setTimeout(() => {
                entry.target.style.animation = 'slideInUp 0.8s ease forwards';
                entry.target.style.opacity = '1';
            }, delay * 1000);
            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    projectObserver.observe(card);
});

// Stagger animation for certificate cards
const certificateCards = document.querySelectorAll('.certificate-card');
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(certificateCards).indexOf(entry.target);
            const delay = index * 0.15;
            const direction = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
            setTimeout(() => {
                entry.target.style.animation = `${direction} 0.8s ease forwards`;
                entry.target.style.opacity = '1';
            }, delay * 1000);
            certObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

certificateCards.forEach(card => {
    card.style.opacity = '0';
    certObserver.observe(card);
});

// Stagger animation for skill items
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(skillItems).indexOf(entry.target);
            const delay = index * 0.08;
            setTimeout(() => {
                entry.target.style.animation = 'bounceIn 0.5s ease forwards';
                entry.target.style.opacity = '1';
            }, delay * 1000);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

skillItems.forEach(item => {
    item.style.opacity = '0';
    skillObserver.observe(item);
});

// About section animations
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imageContainer = document.querySelector('.image-container');
            const aboutText = document.querySelector('.about-text');

            if (imageContainer) {
                imageContainer.style.animation = 'slideInLeft 0.8s ease forwards';
            }
            if (aboutText) {
                aboutText.style.animation = 'slideInRight 0.8s ease forwards';
            }
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const aboutSection = document.querySelector('.about-content');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Contact section animations
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const contactIntro = document.querySelector('.contact-intro');
            const contactButtons = document.querySelectorAll('.contact-buttons .btn');
            const socialLinks = document.querySelectorAll('.social-link');

            if (contactIntro) {
                contactIntro.style.animation = 'scaleIn 0.8s ease forwards';
            }

            contactButtons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.animation = 'slideInUp 0.6s ease forwards';
                }, index * 150);
            });

            socialLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.animation = 'bounceIn 0.6s ease forwards';
                    link.style.opacity = '1';
                }, 400 + (index * 100));
            });

            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const contactSection = document.querySelector('.contact-content');
if (contactSection) {
    contactSection.style.opacity = '0';
    document.querySelectorAll('.social-link').forEach(link => {
        link.style.opacity = '0';
    });
    contactObserver.observe(contactSection);
}

// Parallax effect for hero background shape
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroShape = document.querySelector('.hero::before');
    const heroVisual = document.querySelector('.hero-shape');

    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// 3D Tilt effect for cards
const cards = document.querySelectorAll('.project-card, .certificate-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

console.log('🎨 Creative animations loaded!');