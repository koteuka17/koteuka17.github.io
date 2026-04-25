document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.btn-request'); // можно использовать другую кнопку
    const nav = document.querySelector('.nav');

    // Для демонстрации используем кнопку «Оставить заявку» как переключатель меню
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // отступ на высоту шапки
            behavior: 'smooth'
                });
            }
        });
    });
});
