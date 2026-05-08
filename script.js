// 1. Progress Bar Scroll
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};

// 2. Intersection Observer (Animasi muncul saat scroll)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 3. Efek Klik Interaktif
document.addEventListener('click', (e) => {
    let dot = document.createElement('div');
    dot.className = 'click-dot';
    
    // Styling dot langsung via JS
    Object.assign(dot.style, {
        position: 'absolute',
        width: '10px',
        height: '10px',
        background: '#d4af37',
        borderRadius: '50%',
        left: e.pageX + 'px',
        top: e.pageY + 'px',
        pointerEvents: 'none',
        transition: '0.5s',
        opacity: '1',
        zIndex: '9999'
    });

    document.body.appendChild(dot);

    setTimeout(() => {
        dot.style.transform = 'scale(4)';
        dot.style.opacity = '0';
    }, 10);
    
    setTimeout(() => { dot.remove(); }, 500);
    // 4. Slider Logic
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
    // Reset semua slide dan dot
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Aktifkan slide yang dipilih
    currentSlideIndex = index;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Fungsi untuk klik dot
function currentSlide(index) {
    showSlides(index);
}

// Otomatis pindah slide setiap 5 detik
setInterval(() => {
    currentSlideIndex++;
    showSlides(currentSlideIndex);
}, 5000);
});
