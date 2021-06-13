"use strict"

let button = document.querySelector("button"),
    menu = document.querySelector("nav");

button.addEventListener('click', ()=>{
  menu.classList.toggle('fadeOut');
});
