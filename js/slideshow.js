// University Slideshow Functionality - Show 4 cards, move 1 at a time
class UniversitySlideshow {
    constructor() {
        this.currentPosition = 0;
        this.totalCards = 8;
        this.cardsVisible = 4;
        this.cardWidth = 25; // Each card is 25% width
        this.track = document.querySelector('.universities-track');
        this.prevBtn = document.querySelector('.slide-nav.prev');
        this.nextBtn = document.querySelector('.slide-nav.next');
        this.dots = document.querySelectorAll('.slide-dot');
        
        this.init();
    }

    init() {
        if (!this.track) return;
        
        // Clone cards for infinite scrolling
        this.cloneCards();
        
        // Add event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Remove dot navigation (circle buttons)
        if (this.dots && this.dots.length > 0) {
            this.dots.forEach(dot => dot.remove());
        }
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
        
        // Initialize position
        this.updateSlide();
    }

    cloneCards() {
        // Clone all cards to create seamless infinite scroll
        const cards = Array.from(this.track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            this.track.appendChild(clone);
        });
    }

    updateSlide() {
        // Calculate translateX percentage
        const translateX = -this.currentPosition * this.cardWidth;
        this.track.style.transform = `translateX(${translateX}%)`;
    }

    nextSlide() {
        this.currentPosition++;
        
        // If we've moved past the original set, reset to beginning
        if (this.currentPosition >= this.totalCards) {
            // Move immediately to position 0 without animation
            setTimeout(() => {
                this.track.style.transition = 'none';
                this.currentPosition = 0;
                this.track.style.transform = `translateX(0%)`;
                
                // Re-enable transition for next move
                setTimeout(() => {
                    this.track.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
        
        this.updateSlide();
    }

    prevSlide() {
        this.currentPosition--;
        
        // If we've moved before the beginning, jump to the end
        if (this.currentPosition < 0) {
            // Move immediately to the last position without animation
            this.track.style.transition = 'none';
            this.currentPosition = this.totalCards - 1;
            this.track.style.transform = `translateX(-${this.currentPosition * this.cardWidth}%)`;
            
            // Re-enable transition for next move
            setTimeout(() => {
                this.track.style.transition = 'transform 0.5s ease';
            }, 50);
        }
        
        this.updateSlide();
    }

    goToSlide(slideIndex) {
        this.currentPosition = slideIndex;
        this.updateSlide();
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
}

// Hero Image Slideshow Functionality - Automatic transitions with circle controls
class HeroImageSlideshow {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 5; // You have 5 circle indicators
        this.autoSlideInterval = 4000; // 4 seconds between slides
        this.autoSlideTimer = null;
        
        // Get DOM elements
        this.heroImg = document.querySelector('.HOME .img');
        this.circles = [
            document.querySelector('.HOME .ellipse'),
            document.querySelector('.HOME .ellipse-2'),
            document.querySelector('.HOME .ellipse-3'),
            document.querySelector('.HOME .ellipse-4'),
            document.querySelector('.HOME .ellipse-5')
        ];
        
        // Array of image sources - customize these paths with your actual images
        this.images = [
            'https://pressone.ph/wp-content/uploads/2022/08/FEU-IT.jpg',
            'https://www.its.ac.id/international/wp-content/uploads/sites/66/2019/05/MapuaUni.jpg', 
            'https://www.goodnewspilipinas.com/wp-content/uploads/2018/07/UP_Diliman-slide.jpg', 
            'https://png.pngtree.com/thumb_back/fh260/background/20220821/pngtree-facade-of-university-of-the-city-of-manila-at-intramuros-manila-photo-image_33365420.jpg', 
            'https://images.metronewscentral.net/6152waFqL248-UdM.jpg'  
        ];
        
        this.init();
    }

    init() {
        if (!this.heroImg || !this.circles.length) return;
        
        // Add click listeners to circle indicators
        this.circles.forEach((circle, index) => {
            if (circle) {
                circle.addEventListener('click', () => {
                    this.goToSlide(index);
                });
                circle.style.cursor = 'pointer';
            }
        });
        
        // Start automatic slideshow
        this.startAutoSlide();
        
        // Pause auto-slide on hover
        const heroContainer = document.querySelector('.HOME .HERO-img');
        if (heroContainer) {
            heroContainer.addEventListener('mouseenter', () => this.pauseAutoSlide());
            heroContainer.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Initialize first slide
        this.updateSlide();
    }

    updateSlide() {
        // Update image source
        if (this.heroImg && this.images[this.currentSlide]) {
            this.heroImg.style.opacity = '0';
            
            setTimeout(() => {
                this.heroImg.src = this.images[this.currentSlide];
                this.heroImg.style.opacity = '1';
            }, 300);
        }
        
        // Update circle indicators
        this.circles.forEach((circle, index) => {
            if (circle) {
                if (index === this.currentSlide) {
                    // Active circle - filled
                    circle.style.backgroundColor = '#9a6fef';
                    circle.style.border = '2px solid #ffffff';
                } else {
                    // Inactive circle - empty
                    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                    circle.style.border = '2px solid #9a6fef';
                }
            }
        });
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateSlide();
        
        // Restart auto-slide timer
        this.startAutoSlide();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlide();
    }

    startAutoSlide() {
        this.pauseAutoSlide(); // Clear any existing timer
        this.autoSlideTimer = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideInterval);
    }

    pauseAutoSlide() {
        if (this.autoSlideTimer) {
            clearInterval(this.autoSlideTimer);
            this.autoSlideTimer = null;
        }
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UniversitySlideshow();
    new HeroImageSlideshow();
});