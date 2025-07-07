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

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UniversitySlideshow();
});
