"use strict"

let o : number = 0
const btnn = <HTMLButtonElement>document.querySelector('#compte');
btnn.addEventListener("pointerdown", ()=>
{
    o++;
    btnn.textContent = o.toString()
})
