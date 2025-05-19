// Function to handle mobile menu toggle
function setupMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Function to handle user dropdown menu
function setupUserMenu() {
    const userMenuButton = document.querySelector('.user-menu button');
    const userDropdown = document.querySelector('.user-dropdown');

    if (userMenuButton && userDropdown) {
        userMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.add('hidden');
            }
        });
    }
}

// Handle like buttons
function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            
            const heart = button.querySelector('i');
            if (heart.classList.contains('far')) {
                heart.classList.remove('far');
                heart.classList.add('fas');
            } else {
                heart.classList.remove('fas');
                heart.classList.add('far');
            }
        });
    });
}

// Active nav link handler
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
}

// Intersection Observer for animation on scroll
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .article-card, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize all features when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupUserMenu();
    setupLikeButtons();
    setupNavLinks();
    setupScrollAnimations();
    
    // Set the first nav link as active by default
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
    
    console.log('Sabiduría de la Colmena website initialized successfully!');
});