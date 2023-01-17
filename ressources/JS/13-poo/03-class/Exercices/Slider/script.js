"use strict";
// J'importe mes objets.

// import S from "./Slider-v2.js";
import SliderV2 from "./Slider-v2.js";
// je crée mes objets

const img = ["./img/mountain.jpg", "./img/sea.jpg"]
const slider1 = new SliderV2();
const slider2 = new SliderV2();
// const slider2 = new SliderV2(["./img/snow.jpg", "./img/card.jpg"]);
// slider1.create(img)

// Exemple de fin



            document.body.append(slider1.create(img, true));
            document.body.append(slider2.create(img, true));
            // document.body.append(slider2);
           
/* 
    On remarquera que si on tente d'ajouter deux carousels
    ils rentreront en conflit.
    C'est le même objet que l'on utilise, il nous en faudrait
    un nouveau totalement à part pour éviter cela.
    C'est ce que va nous permettre le cours suivant.
*/