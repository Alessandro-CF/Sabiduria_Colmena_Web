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
            e.stopPropagation();
            
            // Toggle visibility and opacity
            userDropdown.classList.toggle('hidden');
            
            // Small delay to apply opacity transition after display change
            setTimeout(() => {
                if (!userDropdown.classList.contains('hidden')) {
                    userDropdown.classList.add('opacity-100');
                    userDropdown.classList.remove('opacity-0');
                } else {
                    userDropdown.classList.remove('opacity-100');
                    userDropdown.classList.add('opacity-0');
                }
            }, 10);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('opacity-100');
                userDropdown.classList.add('opacity-0');
                
                // Delay hiding to allow opacity transition
                setTimeout(() => {
                    userDropdown.classList.add('hidden');
                }, 200);
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

// Función para manejar el formulario de registro
function setupRegisterForm() {
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar contraseñas
            const password = registerForm.querySelector('input[name="password"]')?.value;
            const confirmPassword = registerForm.querySelector('input[name="confirm_password"]')?.value;
            
            if (password && confirmPassword && password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            // Simulación de registro exitoso
            alert('Registro exitoso. Bienvenido a Sabiduría de la Colmena!');
            
            // En un caso real, aquí se enviarían los datos al servidor
            
            // Redirección a la página principal
            window.location.href = 'index.html';
        });
    }
}

// Función para manejar el formulario de login
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de inicio de sesión exitoso
            alert('Inicio de sesión exitoso. Bienvenido de nuevo!');
            
            // En un caso real, aquí se enviarían los datos al servidor y se verificaría la autenticación
            
            // Redirección a la página principal
            window.location.href = 'index.html';
        });
    }
}

// Initialize all features when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupUserMenu();
    setupLikeButtons();
    setupNavLinks();
    setupScrollAnimations();
    setupRegisterForm();
    setupLoginForm();
    
    // Set the first nav link as active by default
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
    
    console.log('Sabiduría de la Colmena website initialized successfully!');
});