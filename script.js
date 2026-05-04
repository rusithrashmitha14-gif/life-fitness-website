document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--glass-bg)';
            navLinks.style.backdropFilter = 'blur(12px)';
            navLinks.style.padding = '20px 0';
        }
    });

    // Close mobile menu on link click
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });

    // Reset mobile menu styles on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Add to Cart Toast Notification
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const toast = document.getElementById('toast');
    let toastTimeout;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Show toast
            toast.classList.add('show');
            
            // Clear existing timeout if any
            clearTimeout(toastTimeout);
            
            // Hide toast after 3 seconds
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    });

    // Form Submission Simulation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Request Sent!';
                btn.style.background = 'var(--color-accent-green)';
                btn.style.color = '#000';
                btn.style.opacity = '1';
                bookingForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--color-accent-blue)';
                }, 3000);
            }, 1500);
        });
    }
});
