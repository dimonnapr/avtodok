document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.review__slides');
    const cards = document.querySelectorAll('.review__slide-card');
    const prevButton = document.querySelector('.review__slider-button-left');
    const nextButton = document.querySelector('.review__slider-button-right');
    const dotsContainer = document.querySelector('.review__dots');
    const gap = 20;
    let index = 0;
    let startX = 0;
    let endX = 0;
    const visibleCards = () =>
        window.innerWidth <= 767 ? 1 : 2;
    const totalPages = () =>
        cards.length - visibleCards() + 1;
    const getCardWidth = () =>
        cards[0].offsetWidth + gap;
    const updateSlider = () => {
        slides.style.transform =
            `translateX(-${index * getCardWidth()}px)`;
        document.querySelectorAll('.review__dot')
            .forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
    };
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalPages(); i++) {
            const dot = document.createElement('button');
            dot.classList.add('review__dot');
            if (i === index) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                index = i;
                updateSlider();
            });
            dotsContainer.append(dot);
        }
    }
    nextButton.addEventListener('click', () => {
        index++;
        if (index > cards.length - visibleCards()) {
            index = 0;
        }
        updateSlider();
    });
    prevButton.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = cards.length - visibleCards();
        }
        updateSlider();
    });
    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    slides.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const distance = startX - endX;
        if (distance > 50) {
            index++;
            if (index > cards.length - visibleCards()) {
                index = 0;
            }
        }
        if (distance < -50) {
            index--;
            if (index < 0) {
                index = cards.length - visibleCards();
            }
        }
        updateSlider();
    });
    window.addEventListener('resize', () => {
        index = 0;
        createDots();
        updateSlider();
    });
    createDots();
});