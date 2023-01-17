"use strict";
//-----------------------------DOM-------------------------//
// Document Object Model
const h = document.createElement("header");
/*
    Je fais appelle a la methode du dom createElement qui me permettra
    de creer un element HTML.
    Celle ci-prenra en paramétre, le nom de la balise que je souhaite creer
*/
console.log(h);
const m = document.createElement("main");
const f = document.createElement("footer");
/*
    append est une methode qui peut être utilisé sur tout element html qui peut contenir d'autres éléments.
    il insere à la fin de cet element ce qui lui a ete donné en parametre

    Il existe aussi la methode appendChild() qui est moins permissive.
    append peut recevoir autant de parametre que l'on souhaite,
    appenChild qu'un seul.
    append peut recevoir des string,
    pas appenChild.
*/
document.body.append(h, m, f);
h.innerHTML = "<h1>Super titre en JS</h1>";
f.innerHTML = "<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>";

for(let i = 0; i<5; i++)
{
    const p = document.createElement("p");
    p.textContent ="Cette balise <br> ne sera pas interprété dans un textContent, alors qu'elle l'aurait été dans un innerHTML."
    m.appendChild(p);
}
const d = document.createElement("div");
document.body.appendChild(d);
d.innerHTML ="<h2>Santé !</h2><p>Mangez 5 fruits et legumes par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras ni trop sucré ni trop salé, l'abus d'alcool est dangereux pour la santé</p><button>tchin tchin !</button><button>Le gras c'est la vie</button>";
