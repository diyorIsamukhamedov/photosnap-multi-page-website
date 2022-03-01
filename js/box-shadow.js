'use strict'

//SET-UP BOX-SHADOW FOR "MOUNTAIN SECTION"

const btn = document.getElementById('btn');
const sectionShadow = document.querySelector('.container__img');

btn.addEventListener('mouseover', () => {
    sectionShadow.classList.toggle('active');
});

btn.addEventListener('mouseout', () => {
    sectionShadow.classList.remove('active');
});

//=====================================================================================
//=====================================================================================