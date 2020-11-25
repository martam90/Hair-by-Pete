const navToggle = document.querySelector('.nav-toggle');
const wrapper = document.querySelector('.wrapper');

navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.menu');
    navToggle.classList.toggle('active');
    if (navToggle.classList.contains('active')) {
        navMenu.classList.add('active');
        document.body.classList.add('menu-active');

    } else {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-active');
    }
})
