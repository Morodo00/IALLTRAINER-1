const btn = document.getElementById('btn');
const btnb = document.getElementById('btnb');
const slides = document.querySelectorAll('.slides');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

btn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

btnb.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});
showSlide(currentSlide);





