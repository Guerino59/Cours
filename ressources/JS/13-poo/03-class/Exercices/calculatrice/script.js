"use strict";



const container = document.querySelector('.container')
const input = document.querySelector('.input')
const lastInput = document.createElement("span");
  lastInput.style.position = "absolute";
  lastInput.style.right = "22vw";
  lastInput.style.top = "16vh";
  lastInput.style.color = "white";
  lastInput.style.opacity = "0.7";
  document.body.append(lastInput)
let derCalc = []
document.querySelector('.un').addEventListener('click', ()=>{
  input.value += "1";
})
document.querySelector('.deux').addEventListener('click', ()=>{
  input.value += "2";
})
document.querySelector('.trois').addEventListener('click', ()=>{
  input.value += "3";
})
document.querySelector('.quatre').addEventListener('click', ()=>{
  input.value += "4";
})
document.querySelector('.cinq').addEventListener('click', ()=>{
  input.value += "5";
})
document.querySelector('.six').addEventListener('click', ()=>{
  input.value += "6";
})
document.querySelector('.sept').addEventListener('click', ()=>{
  input.value += "7";
})
document.querySelector('.huit').addEventListener('click', ()=>{
  input.value += "8";
})
document.querySelector('.neuf').addEventListener('click', ()=>{
  input.value += "9";
})
document.querySelector('.zero').addEventListener('click', ()=>{
  input.value += "0";
})
document.querySelector('.mult').addEventListener('click', ()=>{
  input.value += "*";
  create()
})
document.querySelector('.divi').addEventListener('click', ()=>{
  input.value += "/";
  create()
})
document.querySelector('.plus').addEventListener('click', ()=>{
  input.value += "+";
  create()
})
document.querySelector('.moins').addEventListener('click', ()=>{
  input.value += "-";
  create()
})
document.querySelector('.point').addEventListener('click', ()=>{
  input.value += ".";
})
document.querySelector('.del').addEventListener('click', eff)
document.querySelector('.reset').addEventListener('click', ()=>{
  derCalc.splice(0, derCalc.length)
  console.log(derCalc);
  input.value = "";
  lastInput.textContent = ""
})
document.querySelector('.eg').addEventListener('click', calc)


function calc (){
  lastInput.textContent = ""
 let a = eval(derCalc.at(-1) + input.value)
 input.value = a
 console.log(derCalc[length]);
}
function eff (){
    const dernier = input.value; 
    input.value = dernier.substr(0, dernier.length - 1);
  
}
function create() {
  derCalc.push(input.value)
  lastInput.textContent = ""
  lastInput.textContent = input.value
  input.value = ""
  console.log(derCalc);
  
}
