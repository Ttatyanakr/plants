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
    }
}

burgerArea.addEventListener('click', burgerCall);
document.addEventListener('click', burgerClose);



//FILTER script

const filterGarden = document.querySelector('.filter__gardens');
const filterLawn = document.querySelector('.filter__lawn');
const filterPlanting = document.querySelector('.filter__planting');
const serviceGarden = document.querySelectorAll('.service__garden');
const servicePlanting = document.querySelectorAll('.service__planting');
const serviceLawn = document.querySelectorAll('.service__lawn');

let filterArr = [];

let clickGarden = () => {
    // filterGarden.classList.toggle('services__filter__button_active');
    if (filterArr.indexOf(serviceGarden) == 0) {
        filterArr.shift();
    } else if (filterArr.indexOf(serviceGarden) == 1) {
        filterArr.pop();
    } else if (filterArr.indexOf(serviceGarden) == -1) {
        filterArr.push(serviceGarden);
    }
    doFilter();
}
let clickLawn = () => {
    // filterLawn.classList.toggle('services__filter__button_active');
    if (filterArr.indexOf(serviceLawn) == 0) {
        filterArr.shift();
    } else if (filterArr.indexOf(serviceLawn) == 1) {
        filterArr.pop();
    } else if (filterArr.indexOf(serviceLawn) == -1) {
        filterArr.push(serviceLawn);
    }
    doFilter();
}
let clickPlanting = () => {
    // filterPlanting.classList.toggle('services__filter__button_active');
    if (filterArr.indexOf(servicePlanting) == 0) {
        filterArr.shift();
    } else if (filterArr.indexOf(servicePlanting) == 1) {
        filterArr.pop();
    } else if (filterArr.indexOf(servicePlanting) == -1) {
        filterArr.push(servicePlanting);
    }
    doFilter();
}

let doFilter = () => {
    if (filterArr.length > 2) {
        filterArr.shift();
    } 

    //toggle filter buttons
    filterArr.includes(serviceGarden) ? filterGarden.classList.add('services__filter__button_active') : filterGarden.classList.remove('services__filter__button_active');
    filterArr.includes(serviceLawn) ? filterLawn.classList.add('services__filter__button_active') : filterLawn.classList.remove('services__filter__button_active');
    filterArr.includes(servicePlanting) ? filterPlanting.classList.add('services__filter__button_active') : filterPlanting.classList.remove('services__filter__button_active');

    //add blur for unliltres cards
    (!filterArr.includes(serviceGarden)) ? serviceGarden.forEach(el => el.classList.add('blur')) : serviceGarden.forEach(el => el.classList.remove('blur'));
    (!filterArr.includes(serviceLawn)) ? serviceLawn.forEach(el => el.classList.add('blur')) : serviceLawn.forEach(el => el.classList.remove('blur'));
    (!filterArr.includes(servicePlanting)) ? servicePlanting.forEach(el => el.classList.add('blur')) : servicePlanting.forEach(el => el.classList.remove('blur'));
    if (filterArr.length == 0) {
        serviceGarden.forEach(el => el.classList.remove('blur'));
        serviceLawn.forEach(el => el.classList.remove('blur'));
        servicePlanting.forEach(el => el.classList.remove('blur'));
    }
}

filterGarden.addEventListener('click', clickGarden);
filterPlanting.addEventListener('click', clickPlanting);
filterLawn.addEventListener('click', clickLawn);

// let selectGarden = () => {
//     serviceGarden.forEach(el => el.classList.toggle('blur'));
//     filterGarden.classList.toggle('services__filter__button_active');
// }

// let selectPlanting = () => {
//     servicePlanting.forEach(el => el.classList.toggle('blur'));
//     filterPlanting.classList.toggle('services__filter__button_active');
// }

// let selectLawn = () => {
//     serviceLawn.forEach(el => el.classList.toggle('blur'));
//     filterLawn.classList.toggle('services__filter__button_active');
// }

// let selectFilter = () => {
    
// }

// filterGarden.addEventListener('click', selectGarden);
// filterPlanting.addEventListener('click', selectPlanting);
// filterLawn.addEventListener('click', selectLawn);