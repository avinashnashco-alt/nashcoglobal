if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => console.log('SW registered!')).catch(err => console.log('SW failed:', err));
  });
}
AOS.init({ duration: 1200, once: true });
const swiper = new Swiper('.mySwiper', { loop: true, pagination: { el: '.swiper-pagination' }, autoplay: { delay: 3000 } });
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.dataset.bsTheme = document.body.dataset.bsTheme === 'light' ? 'dark' : 'light';
});
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: item, start: 'top 80%' } });
});
document.querySelectorAll('#rfq-form').forEach(form => {
    form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
            e.preventDefault();
            form.classList.add('was-validated');
        }
    });
});