'use strict'

//PRICE SWITCHER

const input = document.getElementById('toggle-switch');
const monthlyColor = document.querySelector('.rate-monthly');
const yearlyColor = document.querySelector('.rate-yearly');
const monthlyPrice = document.querySelectorAll('.monthly');
const yearlyPrice = document.querySelectorAll('.yearly');
const monthlyText = document.querySelectorAll('.monthly-text');
const yearlyText = document.querySelectorAll('.yearly-text');
let changeColorArr = [monthlyColor, yearlyColor];
let priceArr = [monthlyPrice, yearlyPrice, monthlyText, yearlyText];

//=====================================================================================
function toggleColor() {
    for (let el of changeColorArr) {
        el.classList.toggle('active');
    }
}

function removeColor() {
    for (let el of changeColorArr) {
        el.classList.remove('active');
    }
}

function toggleContent() {
    for (let el of priceArr) {
        el.forEach(n => n.classList.toggle('active'));
    }
}

function removeContent() {
    for (let el of priceArr) {
        el.forEach(n => n.classList.remove('active'));
    }
}

//=====================================================================================

input.addEventListener('change', () => {
    (input.checked) ? toggleColor() || toggleContent() : removeColor() || removeContent()
});

//=====================================================================================
//=====================================================================================
