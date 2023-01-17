"use strict";
let o = 0;
const btnn = document.querySelector('#compte');
btnn.addEventListener("pointerdown", () => {
    o++;
    btnn.textContent = o.toString();
});
