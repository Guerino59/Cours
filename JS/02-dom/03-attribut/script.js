"use strict";

const h1 = document.querySelector('#mainTitle');
// ----------------------- l'attribut style ---------------------//
/*
    Nos elements html possedent enormement d'attribut et de propriété
    L'un d'eux est la propriété "style" elle permet de venir ajouter sur notre element html, l'attribut style.
    et donc de faire du CSS inline.
    Cela lui donne donc une grande priorité.
    Pour modifier une propriété CSS, o va faire suivre la propriété style du nom de la propriété CSS à changer.

    !ATTENTION, les propriétés s'ecrivant avec un "-" sont remplacé par une version camelCase
    *exemple : background-color devient backgroundColor
    Vous ne pouvez pas recuperer ainsi, le style du fichier css, seulement celui inline
*/ 
h1.style.backgroundColor="rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow ="5px 5px rgba(0, 0, 0, 0.3)";
h1.style.fontSize="5rem";

// ! ATTENTION, certaines erreurs ne provequerons rien du tout

console.log(h1.style.backgroundColor);
// le fichier css n'est pas verifié donc ici border est vide
console.log(h1.style.border);

// ----------------------------Les Classes---------------------------- //

// L'attribute classList permet de recuperer un tableau contenant toute les classes de l'element
console.log(h1.classList);
// classList.add permet d'ajouter une classe
h1.classList.add("banane");
// classList.add permet de retirer une classe
h1.classList.remove("banane");
// .toggle ajoute si elle n'est pas presente, ou retire si elle existe
h1.classList.toggle("banane");
// .contains permet de verifier la presence ou non d'une classe
console.log(h1.classList.contains("banane"));
// className retourne un string contenant toute les classes
console.log(h1.className);

// -------------------autres attributs-------------------------//
//Tous les attributs existant sur un element html sont accessible via JS

// La plupart d'entre eux peuvent etre accessibles en tapant seulement .nomAttribut
console.log(h1.id);
h1.id += "2";

// Mais on peut aussi y acceder avec getAttribute et setAttribute
console.log(h1.getAttribute("id"));

const a = document.querySelector('footer ul li a')
// setAttribute prend en premier parametre l'attribut que je souhaite modifier, et en second la valeur que je veux lui donner
a.setAttribute("target", "_blank");
console.log(a.href, a.target);
// Le cas des data-attribut sont particulier puisqu'on peut les nommer comme on le souhaite.

a.dataset.color=" pink";
a.dataset.truc=" nouveau data attribute";
// On utilise dataset pour acceder aux data-attributs suivi du nom de ce data-attr (pour en creer un nouveau il suffit de mettre un nom qui n'existe pas)

const as = document.querySelector('aside');
console.log(as);
as.style.left = '50vw';
as.style.top = '50vh';