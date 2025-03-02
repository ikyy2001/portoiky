document.addEventListener('DOMContentLoaded', () => {
    // Loading and Language Handling
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.querySelector('.main-content');
    const savedLanguage = localStorage.getItem('language');
    
    // Show welcome screen for a few seconds
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            
            if (savedLanguage) {
                // Redirect based on saved language preference
                if (savedLanguage === 'en' && window.location.pathname.indexOf('index-en.html') === -1) {
                    window.location.href = 'index-en.html';
                } else {
                    // For Indonesian or if already on correct page
                    mainContent.style.display = 'block';
                }
            } else {
                // No language preference set yet - we'll default to Indonesian
                localStorage.setItem('language', 'id');
                mainContent.style.display = 'block';
            }
        }, 500);
    }, 2500); // Welcome screen shows for 2.5 seconds

    // Language Selection Handling
    const languageSelection = document.getElementById('languageSelection');
    const loadingText = document.getElementById('loadingText');
    
    if (languageSelection && loadingText) {
        const indonesianOption = document.getElementById('indonesianOption');
        const englishOption = document.getElementById('englishOption');
        
        // After loading animation completes
        setTimeout(() => {
            // Hide loading text
            loadingText.style.display = 'none';
            
            // Show language selection
            languageSelection.classList.add('visible');
        }, 2500);
        
        // Handle language selection
        if (indonesianOption) {
            indonesianOption.addEventListener('click', () => {
                // Set local storage for language preference
                localStorage.setItem('language', 'id');
                
                // Fade out loading screen
                loadingScreen.classList.add('fade-out');
                
                // Redirect to main page after fade animation
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 500);
            });
        }
        
        if (englishOption) {
            englishOption.addEventListener('click', () => {
                // Set local storage for language preference
                localStorage.setItem('language', 'en');
                
                // Fade out loading screen
                loadingScreen.classList.add('fade-out');
                
                // Redirect to main page after fade animation
                setTimeout(() => {
                    window.location.href = 'index-en.html';
                }, 500);
            });
        }
    }

    // Custom Cursor Implementation
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
    
    if (cursorOuter && cursorInner) {
        let mouseX = 0;
        let mouseY = 0;
        let outterX = 0;
        let outterY = 0;
        let innerX = 0;
        let innerY = 0;

        // Smooth cursor animation
        function animateCursor() {
            // Smooth movement for outer cursor
            outterX += (mouseX - outterX) * 0.15;
            outterY += (mouseY - outterY) * 0.15;
            cursorOuter.style.transform = `translate3d(${outterX - 20}px, ${outterY - 20}px, 0)`;

            // Slightly faster movement for inner cursor
            innerX += (mouseX - innerX) * 0.25;
            innerY += (mouseY - innerY) * 0.25;
            cursorInner.style.transform = `translate3d(${innerX - 4}px, ${innerY - 4}px, 0)`;

            requestAnimationFrame(animateCursor);
        }

        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .gallery-item, .skill-item');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorOuter.classList.add('cursor-hover');
                cursorInner.style.transform = 'scale(1.5)';
            });

            element.addEventListener('mouseleave', () => {
                cursorOuter.classList.remove('cursor-hover');
                cursorInner.style.transform = 'scale(1)';
            });
        });

        // Add click animation
        document.addEventListener('mousedown', () => {
            cursorOuter.classList.add('cursor-click');
            cursorInner.classList.add('cursor-click');
        });

        document.addEventListener('mouseup', () => {
            cursorOuter.classList.remove('cursor-click');
            cursorInner.classList.remove('cursor-click');
        });

        // Handle cursor visibility
        document.addEventListener('mouseleave', () => {
            cursorOuter.style.opacity = '0';
            cursorInner.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursorOuter.style.opacity = '1';
            cursorInner.style.opacity = '1';
        });

        // Start cursor animation
        animateCursor();
    }
    
    // Gallery Fullscreen Functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    if (galleryItems.length > 0) {
        // Create fullscreen container if it doesn't exist
        let fullscreenContainer = document.querySelector('.fullscreen');
        
        if (!fullscreenContainer) {
            fullscreenContainer = document.createElement('div');
            fullscreenContainer.className = 'fullscreen';
            document.body.appendChild(fullscreenContainer);
        }

        // Handle gallery image clicks
        galleryItems.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Create clone of image for fullscreen
                const fullImg = document.createElement('img');
                fullImg.src = img.src;
                fullImg.alt = img.alt;
                
                // Clear container and add new image
                fullscreenContainer.innerHTML = '';
                fullscreenContainer.appendChild(fullImg);
                
                // Show fullscreen with small delay for animation
                setTimeout(() => {
                    fullscreenContainer.classList.add('active');
                }, 50);
            });
        });

        // Close fullscreen when clicking outside the image
        fullscreenContainer.addEventListener('click', () => {
            fullscreenContainer.classList.remove('active');
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
});