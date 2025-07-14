// University Slideshow Functionality - Show 4 cards, move 1 at a time
class UniversitySlideshow {
    constructor() {
        this.currentPosition = 0;
        this.track = document.querySelector('.universities-track');
        this.prevBtn = document.querySelector('.slide-nav.prev');
        this.nextBtn = document.querySelector('.slide-nav.next');
        this.dots = document.querySelectorAll('.slide-dot');

        // These values will depend on the actual DOM
        this.cards = this.track ? Array.from(this.track.children) : [];
        this.totalCards = this.cards.length;
        this.cardsVisible = 4;
        this.cardWidth = 25; // Assuming each card is 25% width

        this.init();
    }

    init() {
        if (!this.track) return;

        // Remove dot navigation (circle buttons)
        if (this.dots && this.dots.length > 0) {
            this.dots.forEach(dot => dot.remove());
        }

        // Add event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Touch/swipe support for mobile
        this.addTouchSupport();

        // Initialize position
        this.updateSlide();
    }

    updateSlide() {
        const maxPosition = this.totalCards - this.cardsVisible;

        // Clamp position
        if (this.currentPosition > maxPosition) {
            this.currentPosition = maxPosition;
        } else if (this.currentPosition < 0) {
            this.currentPosition = 0;
        }

        // Center if cards less than visible
        if (this.totalCards <= this.cardsVisible) {
            this.track.style.justifyContent = 'center';
            if (this.prevBtn) this.prevBtn.disabled = true;
            if (this.nextBtn) this.nextBtn.disabled = true;
        } else {
            this.track.style.justifyContent = '';
            if (this.prevBtn) this.prevBtn.disabled = this.currentPosition === 0;
            if (this.nextBtn) this.nextBtn.disabled = this.currentPosition >= maxPosition;
        }

        const translateX = -this.currentPosition * this.cardWidth;
        this.track.style.transform = `translateX(${translateX}%)`;
    }

    nextSlide() {
        const maxPosition = this.totalCards - this.cardsVisible;
        if (this.currentPosition < maxPosition) {
            this.currentPosition++;
            this.updateSlide();
        }
    }

    prevSlide() {
        if (this.currentPosition > 0) {
            this.currentPosition--;
            this.updateSlide();
        }
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

            if (Math.abs(diff) > 50) {
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
window.addEventListener('DOMContentLoaded', function () {
    new UniversitySlideshow();
});
