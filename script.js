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



// CONTACTS location select script

let citySelect = document.querySelector('.contacts__button__text');
const cityArr = document.querySelectorAll('.cities__name');
const contactsButton = document.querySelector('.contacts__button');
const addressList = document.querySelector('.address__list');
const addressItem = document.querySelectorAll(".address__item");
const addressDetails = document.querySelector(".contacts__adresses > details");

//initialize new array to compare click & cities list
const cityNames = [];
cityArr.forEach(city => {
    cityNames.push(city.textContent);
})

let index;
cityArr.forEach(city => {
    city.addEventListener('click', () => {
        citySelect.textContent = city.textContent;
        for (let i = 0; i < cityArr.length; i++) {
            if (city.textContent == cityNames[i]) {
                index = i;
            }
        }
    })
})

let setAddress = () => {
    addressItem.forEach(el => el.classList.remove("visible"));
    for (let i = 0; i < addressItem.length; i++) {
        if (i == index) {
            addressItem[i].classList.add("visible");
            return;
        }
    }
}

const showAddress = () => {
    if (!addressDetails.open) {
        addressList.classList.remove("visible");
    } else if (addressDetails.open) {
        if (index != undefined) {
            addressList.classList.add("visible");
            setAddress();
        }
    }
}

contactsButton.addEventListener('click', showAddress);


