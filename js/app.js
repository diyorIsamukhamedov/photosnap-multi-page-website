'use strict'

// MOBILE NAVIGATION MENU
//=====================================================================================

// OPEN THE NAVBAR WHEN NAVBAR LINKS(ITEMS) ARE CLICKED.
const hamburger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.menu');
const bodyShadow = document.querySelector('.wrapper');
const bodyScroll = document.querySelector('.body');
let constCollections = [hamburger, navMenu, bodyShadow, bodyScroll];

//=====================================================================================

function classAdd() {
    for (let el of constCollections) {
        el.classList.toggle('active');
    }
}

hamburger.addEventListener('click', () => {
    classAdd();
});

//=====================================================================================

// CLOSE THE NAVBAR WHEN NAVBAR LINKS(ITEMS) ARE CLICKED.
document.querySelectorAll('.menu__item').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

//=====================================================================================
//=====================================================================================
