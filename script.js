// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode-toggle');
    
    if (toggle) {
        // Check if dark mode is enabled on page load
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            toggle.textContent = '☀️';
        }
        
        // Toggle dark mode on button click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                toggle.textContent = '☀️';
                localStorage.setItem('dark-mode', 'enabled');
                // Force dark mode styles
                document.body.style.backgroundColor = '#0f1419';
                document.body.style.color = '#e2e8f0';
            } else {
                toggle.textContent = '🌙';
                localStorage.setItem('dark-mode', 'disabled');
                // Reset to light mode
                document.body.style.backgroundColor = '';
                document.body.style.color = '';
            }
        });
    }
});

// Project Filter Functionality (for projects.html)
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Only run if we're on the projects page
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Get category from data attribute
                const category = btn.dataset.category;
                
                // Show/hide project cards based on category
                projectCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers specifically for hero buttons
    const getInTouchBtn = document.querySelector('a[href="#cta"]');
    const viewWorkBtn = document.querySelector('a[href="#projects"]');
    
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Get In Touch button clicked!');
            const ctaSection = document.getElementById('cta');
            if (ctaSection) {
                const targetPosition = ctaSection.offsetTop - 80;
                console.log('Scrolling to CTA section at position:', targetPosition);
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.log('CTA section not found!');
            }
        });
    }
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View My Work button clicked!');
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const targetPosition = projectsSection.offsetTop - 80;
                console.log('Scrolling to Projects section at position:', targetPosition);
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.log('Projects section not found!');
            }
        });
    }
    
    // General smooth scrolling for other anchor links
    const otherLinks = document.querySelectorAll('a[href^="#"]:not([href="#cta"]):not([href="#projects"])');
    
    otherLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const targetPosition = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, a[style*="background"]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Check if image is already loaded
        if (img.complete && img.naturalHeight !== 0) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            img.addEventListener('error', function() {
                console.warn('Image failed to load:', this.src);
                this.style.opacity = '1'; // Show placeholder even if image fails
            });
            
            // Set initial opacity for loading effect
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});
