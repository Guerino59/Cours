"use strict"
import {JustePrix} from "./jprix.js";
import {Paints} from "./paint.js";
import {Sliderrrr} from "./slider.js";

const loadApp = document.querySelector('#appli');
const main = document.querySelector('.appli')
console.log(loadApp);

loadApp.addEventListener('change', ()=>{
    main.innerHTML = ""
    switch(loadApp.value){ 
        case "justePrix" :
        JustePrix.playGame();
        break;
        case "paint":
        Paints.paint()
        break;
        case "slider" :
        Sliderrrr.createSlider()
        break;
    }
})