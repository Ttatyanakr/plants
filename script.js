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
    //remove third (first selected) filter option
    if (filterArr.length > 2) {
        filterArr.shift();
    } 

    //toggle filter buttons
    filterArr.includes(serviceGarden) ? filterGarden.classList.add('services__filter__button_active') : filterGarden.classList.remove('services__filter__button_active');
    filterArr.includes(serviceLawn) ? filterLawn.classList.add('services__filter__button_active') : filterLawn.classList.remove('services__filter__button_active');
    filterArr.includes(servicePlanting) ? filterPlanting.classList.add('services__filter__button_active') : filterPlanting.classList.remove('services__filter__button_active');

    //add blur for unfiltred cards
    (!filterArr.includes(serviceGarden)) ? serviceGarden.forEach(el => el.classList.add('blur')) : serviceGarden.forEach(el => el.classList.remove('blur'));
    (!filterArr.includes(serviceLawn)) ? serviceLawn.forEach(el => el.classList.add('blur')) : serviceLawn.forEach(el => el.classList.remove('blur'));
    (!filterArr.includes(servicePlanting)) ? servicePlanting.forEach(el => el.classList.add('blur')) : servicePlanting.forEach(el => el.classList.remove('blur'));

    //remove blur if filter didn't pick
    if (filterArr.length == 0) {
        serviceGarden.forEach(el => el.classList.remove('blur'));
        serviceLawn.forEach(el => el.classList.remove('blur'));
        servicePlanting.forEach(el => el.classList.remove('blur'));
    }
}

filterGarden.addEventListener('click', clickGarden);
filterPlanting.addEventListener('click', clickPlanting);
filterLawn.addEventListener('click', clickLawn);



//PRICES accordion styles

const pricesListContainer = document.querySelector(".prices__list__container");
const pricesList = document.querySelector(".prices__list");
const priceItem = document.querySelectorAll(".prices__item");

// let priceArr = [];

// priceItem.forEach (el => el.addEventListener('click', () => {
//     const details = el.querySelector('details');
//     const summary = el.querySelector('.prices__item__summary');
//     const orderButton = el.querySelector('.prices__item__button');

//     // pricesListContainer.classList.add('prices__list__container_active');

//     el.onclick = (item) => {
//         if (details.open && item.target != summary && item.target != orderButton) {
//             details.removeAttribute("open");
//             // details.open = false;
//         }
//     }
// }
// ));

function onToggle(event) {
    if (event.target.open) {
      document.querySelectorAll(".prices__item > details[open]").forEach((el) => {
        if (el === event.target) {
          return;
        }
  
        el.open = false;
      });
    }
  }

  document
    .querySelectorAll(".prices__item > details")
    .forEach((el) => el.addEventListener("toggle", onToggle));