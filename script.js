// BURGER handler

const burgerArea = document.querySelector('.header__nav');
const burgerMenu = document.querySelector('.nav-list');

let burgerCall = () => {
    if( window.innerWidth <= 710 && window.getComputedStyle(burgerMenu).visibility == 'hidden'){
        burgerMenu.classList.add('nav-list_open');
    }
}

let burgerClose = (e) => {
    if(!e.target.matches('.header__nav, .header__nav *')) {
        burgerMenu.classList.remove('nav-list_open');
    }
}

burgerArea.addEventListener('click', burgerCall);
document.addEventListener('click', burgerClose);