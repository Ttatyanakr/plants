// BURGER handler

const burgerArea = document.querySelector('.main-header__burger');
const burgerMenu = document.querySelector('.nav-list');

let burgerCall = () => {
    if( window.innerWidth <= 710 && window.getComputedStyle(burgerMenu).visibility == 'hidden'){
        burgerMenu.classList.add('nav-list_open');
    }
}

let burgerClose = (e) => {
    if(!e.target.matches('.header__nav, .header__nav *') || e.target.matches('.nav-list__link')) {
        burgerMenu.classList.remove('nav-list_open');
        TimeRanges(1000);
    }
}

burgerArea.addEventListener('click', burgerCall);
document.addEventListener('click', burgerClose);