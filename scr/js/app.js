new Swiper('.image-slider',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let burger = document.querySelector('#burger');
let burger_activ = document.querySelector('.header-active-box__menu-burger');

burger.addEventListener('click', () => {

    burger_activ.classList.toggle('activ');
});
