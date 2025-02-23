 // Enhanced cursor functionality
 document.addEventListener('DOMContentLoaded', () => {
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
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

    // Start animation
    animateCursor();
});
        animate();
        document.addEventListener('DOMContentLoaded', () => {
    // Create fullscreen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.className = 'fullscreen';
    document.body.appendChild(fullscreenContainer);

    // Handle gallery image clicks
    document.querySelectorAll('.gallery-item img').forEach(img => {
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
});

document.addEventListener('DOMContentLoaded', () => {
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
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

    // Fullscreen functionality
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.className = 'fullscreen';
    document.body.appendChild(fullscreenContainer);

    // Handle gallery image clicks
    document.querySelectorAll('.gallery-item img').forEach(img => {
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
});