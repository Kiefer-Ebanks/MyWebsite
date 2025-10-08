// Page Navigation System
class PageNavigator {
    constructor() {
        this.currentPage = 'home';
        this.pages = ['home', 'projects', 'hobbies', 'resume'];
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupInitialState();
        this.setupLoadingScreen();
    }

    setupEventListeners() {
        // Page indicator navigation
        document.querySelectorAll('.indicator[data-page]').forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = indicator.getAttribute('data-page');
                if (targetPage && targetPage !== this.currentPage && !this.isTransitioning) {
                    this.navigateToPage(targetPage);
                }
            });
        });

        // Button navigation
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                if (targetPage && targetPage !== this.currentPage && !this.isTransitioning) {
                    this.navigateToPage(targetPage);
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isTransitioning) return;
            
            const currentIndex = this.pages.indexOf(this.currentPage);
            let targetPage = null;

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                targetPage = this.pages[currentIndex - 1];
            } else if (e.key === 'ArrowRight' && currentIndex < this.pages.length - 1) {
                targetPage = this.pages[currentIndex + 1];
            }

            if (targetPage) {
                e.preventDefault();
                this.navigateToPage(targetPage);
            }
        });

        // Touch/swipe navigation for mobile
        this.setupTouchNavigation();
    }

    setupTouchNavigation() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            if (this.isTransitioning) return;
            
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                const currentIndex = this.pages.indexOf(this.currentPage);
                let targetPage = null;

                if (deltaX > 0 && currentIndex > 0) {
                    // Swipe right - go to previous page
                    targetPage = this.pages[currentIndex - 1];
                } else if (deltaX < 0 && currentIndex < this.pages.length - 1) {
                    // Swipe left - go to next page
                    targetPage = this.pages[currentIndex + 1];
                }

                if (targetPage) {
                    this.navigateToPage(targetPage);
                }
            }
        });
    }

    setupInitialState() {
        // Set initial page as active
        this.showPage(this.currentPage);
        this.updateNavigation();
    }

    setupLoadingScreen() {
        // Create loading screen
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = '<div class="loading-text">Loading...</div>';
        document.body.appendChild(loadingScreen);

        // Hide loading screen after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 1000);
        });
    }

    navigateToPage(targetPage) {
        if (this.isTransitioning || !this.pages.includes(targetPage)) return;

        this.isTransitioning = true;
        
        // Create transition overlay
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);

        // Start transition
        setTimeout(() => {
            transition.classList.add('active');
        }, 10);

        // Complete transition
        setTimeout(() => {
            this.hidePage(this.currentPage);
            this.showPage(targetPage);
            this.currentPage = targetPage;
            this.updateNavigation();
            this.updatePageTitle(targetPage);
            
            // End transition
            setTimeout(() => {
                transition.classList.remove('active');
                setTimeout(() => {
                    transition.remove();
                    this.isTransitioning = false;
                }, 600);
            }, 100);
        }, 400);
    }

    showPage(pageId) {
        const page = document.getElementById(`${pageId}-page`);
        if (page) {
            page.classList.add('active');
            page.classList.remove('prev');
            
            // Trigger animations for page content
            setTimeout(() => {
                this.animatePageContent(page);
            }, 200);
        }
    }

    hidePage(pageId) {
        const page = document.getElementById(`${pageId}-page`);
        if (page) {
            page.classList.remove('active');
            page.classList.add('prev');
        }
    }

    animatePageContent(page) {
        const animatedElements = page.querySelectorAll('.project-card, .hobby-card, .resume-section, .download-card, .hero-content');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    updateNavigation() {
        // Update active page indicators
        document.querySelectorAll('.indicator').forEach(indicator => {
            indicator.classList.remove('active');
            if (indicator.getAttribute('data-page') === this.currentPage) {
                indicator.classList.add('active');
            }
        });

        // Update URL without page reload
        const url = new URL(window.location);
        url.hash = this.currentPage;
        window.history.pushState({ page: this.currentPage }, '', url);
    }

    updatePageTitle(pageId) {
        const titles = {
            home: 'Your Name - Home',
            projects: 'Your Name - Projects',
            hobbies: 'Your Name - Hobbies',
            resume: 'Your Name - Resume'
        };
        document.title = titles[pageId] || 'Your Name - Personal Website';
    }
}

// Initialize page navigator
const pageNavigator = new PageNavigator();

// Page indicator visibility on scroll
window.addEventListener('scroll', () => {
    const indicators = document.querySelector('.page-indicators');
    if (indicators) {
        if (window.scrollY > 100) {
            indicators.style.opacity = '0.7';
        } else {
            indicators.style.opacity = '1';
        }
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when home page loads
function initializeTypingAnimation() {
    const heroTitle = document.querySelector('#home-page .hero-title');
    if (heroTitle && pageNavigator.currentPage === 'home') {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
}

// Initialize typing animation after page load
window.addEventListener('load', () => {
    setTimeout(initializeTypingAnimation, 1500);
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Hobby card hover effects
    document.querySelectorAll('.hobby-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.hobby-icon');
            if (icon) {
                icon.style.transform = 'rotate(10deg) scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.hobby-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });

    // Social links animation
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Resume download functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-card .btn-primary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create a simple alert for now - you can replace this with actual download logic
            alert('Resume download functionality would be implemented here. You can link to an actual PDF file.');
            
            // Example of how you might implement actual download:
            // const link = document.createElement('a');
            // link.href = 'path/to/your/resume.pdf';
            // link.download = 'YourName_Resume.pdf';
            // link.click();
        });
    }
});

// Smooth reveal animation for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        pageNavigator.navigateToPage(e.state.page);
    } else {
        const hash = window.location.hash.slice(1);
        if (hash && pageNavigator.pages.includes(hash)) {
            pageNavigator.navigateToPage(hash);
        }
    }
});

// Initialize page from URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash.slice(1);
    if (hash && pageNavigator.pages.includes(hash) && hash !== pageNavigator.currentPage) {
        pageNavigator.navigateToPage(hash);
    }
});

// Console welcome message
console.log(`
🚀 Welcome to Your Personal Website!
Built with modern web technologies:
- HTML5 & CSS3
- Vanilla JavaScript
- Seamless Page Transitions
- Responsive Design
- Touch/Swipe Navigation
- Keyboard Navigation

Navigation:
- Click navigation links
- Use arrow keys (← →)
- Swipe left/right on mobile
- All transitions are smooth and seamless!
`);

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    .page-transition {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 100%);
        z-index: 9999;
        opacity: 0;
        transform: scale(0);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .page-transition.active {
        opacity: 1;
        transform: scale(1);
    }
    
    .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    }
    
    .loading-screen.hidden {
        opacity: 0;
        pointer-events: none;
    }
    
    .loading-text {
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
    }
`;
document.head.appendChild(style);