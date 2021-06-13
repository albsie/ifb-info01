"use strict"

/*
const name = "Sigi";
let zahl = 10;

console.log(name);
console.log(10);
*/

let d = document,
    element = d.querySelector('h1'),
    button = d.querySelector('button'),
    color = d.querySelector('input'),
    box = d.querySelector('div');

button.addEventListener('click', ()=>{
  element.style.color = color.value;
});

color.addEventListener('change', ()=>{
  console.log(color.value);
  element.style.color = color.value;
});
let i = 50,
delay = 30;
box.addEventListener('mouseover', ()=>{
  if(i <= 50){
    let counter = setInterval(()=>{
      box.style.width = `${i}px`;
      box.style.height = `${i}px`;
      i++;
      if(i >= 100){
        clearInterval(counter);
      }
    }, delay);
  }
});

box.addEventListener('mouseleave', ()=>{
if(i >= 100){
  let counter = setInterval(()=>{
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    i--;
    if(i <= 50){
      clearInterval(counter);
    }
  }, delay);
}
});
