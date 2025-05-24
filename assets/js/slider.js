// assets/js/slider.js
document.addEventListener('DOMContentLoaded', function() {
    // Auto-scroll products slider (optional enhancement)
    const productSlider = document.querySelector('.products-slider');
    let currentIndex = 0;
    
    function autoSlide() {
        if (window.innerWidth <= 768) {
            const products = document.querySelectorAll('.product-card');
            if (products.length > 0) {
                currentIndex = (currentIndex + 1) % products.length;
                
                // Smooth scroll effect for mobile
                products.forEach((product, index) => {
                    if (index === currentIndex) {
                        product.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'center'
                        });
                    }
                });
            }
        }
    }

    // Auto-slide every 5 seconds on mobile
    if (window.innerWidth <= 768) {
        setInterval(autoSlide, 5000);
    }

    // Touch/swipe functionality for mobile
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    if (productSlider) {
        productSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - productSlider.offsetLeft;
            scrollLeft = productSlider.scrollLeft;
        });

        productSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        productSlider.addEventListener('mouseup', () => {
            isDown = false;
        });

        productSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - productSlider.offsetLeft;
            const walk = (x - startX) * 2;
            productSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        productSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - productSlider.offsetLeft;
            scrollLeft = productSlider.scrollLeft;
        });

        productSlider.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - productSlider.offsetLeft;
            const walk = (x - startX) * 2;
            productSlider.scrollLeft = scrollLeft - walk;
        });
    }
});