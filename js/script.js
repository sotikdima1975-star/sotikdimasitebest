// Global scripts

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.sotik-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Continue button animation
    const continueBtn = document.querySelector('.continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        continueBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        continueBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Status bar animation
    const dots = document.querySelectorAll('.status-bar .dot');
    let currentDot = 0;
    
    setInterval(() => {
        dots.forEach(dot => dot.style.backgroundColor = '#444');
        dots[currentDot].style.backgroundColor = '#666';
        currentDot = (currentDot + 1) % dots.length;
    }, 800);

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopNav = document.querySelector('.sotik-header__nav');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Скрываем/показываем основное меню
            if (desktopNav) {
                desktopNav.style.display = mobileMenu.classList.contains('active') ? 'none' : 'flex';
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                if (desktopNav) {
                    desktopNav.style.display = 'flex';
                }
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                if (desktopNav) {
                    desktopNav.style.display = 'flex';
                }
                document.body.style.overflow = '';
            }
        });
    }
});