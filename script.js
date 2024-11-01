// JavaScript for Enhanced Features

// Toggle navigation menu for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Interactive hover effects for images or buttons
document.querySelectorAll('.interactive').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Alert for promotions (with attractive modal)
function showPromotionModal() {
    const modal = document.createElement('div');
    modal.classList.add('promo-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p>Special Offer! Get 20% off your next burger when you visit this week!</p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    setTimeout(() => {
        modal.remove();
    }, 10000); // Automatically close after 10 seconds
}

// Show the modal after 5 seconds
setTimeout(showPromotionModal, 5000);
