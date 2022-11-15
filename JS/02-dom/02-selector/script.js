"use strict";
// getElementsByTagName retourne une collection (tableau) d'elements html correspondant au nom de la balise donné en argument.
const li = document.getElementsByTagName("li");
console.log(li);
// Etant une collection, si je souhaite modifier un element, il faut que j'y accede directement, impossible de modifier directement la collection en entier.
li[0].textContent = "Marbre";

// Recupere des elements selon le nom de leur classe.
const p = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(p1, p);

// Recupere directement l'element qui correspond à l'id donné.
const h1 = document.getElementById("mainTitle");
console.log(h1);

/*
    querySelector va prendre en argument, n'importe quel selecteur css.
    Il va selectionner le premier element qui correspond au selecteur css.
*/
const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
console.log(p2);
// Si on souhaite selectionner plusieurs elements à la fois, on utilisera querySelectorAll qui nous rendra une nodeList
const li2 = document.querySelectorAll("footer li");
console.log(li2);
// ! ATTENTION, HTMLcollection est un objet, nodeList un tableau.

// Plutot que de chercher dans le document en entier, on peut chercher qu'a l'interieur d'un element precis
const header = document.querySelector('header');
const h = header.querySelector('h1');

// nextElementSibling permet de recuperer l'element frere suivant.
//* Par exemple ici cest mon main
console.log(header.nextElementSibling);
// Attention nextSibling recupere le prochain frere peu importe si c'est un element html ou du texte
//* Par exemple ici c'est un saut a la ligne
console.log(header.nextSibling);
// Pareil mais pour le precedent.
console.log(li[2].previousElementSibling);
console.log(li[2].previousSibling);
// On recupere l'element parent 
console.log(header.parentElement);
// closest permet de selectionner le parent le plus proche correspondant au selecteur css donné
console.log(li[0].closest("footer"));
// retourne une HTMLcollection contenant tous les enfants de l'element
console.log(header.children);

// remove permet de retirer un element du HTML tout en le gardant existant en JS
h.remove();
console.log(h);
// prepend permet dajouter au debut d'un de mes elements plutot qu'a la fin (comme append)
document.querySelector("main").prepend(h);
// retire l'enfant donné en argumentqui se trouve dans le parent.
// header.removeChild(h);

// const as = document.querySelector('aside');
// console.log(as);
// as.style.left = '50vw';
// as.style.top = '50vh';
const div = document.querySelector('div');
document.body.append(div);

for(let i = 0; i < li.length; i++)
{
        li[i].textContent = "Cigale";
}
