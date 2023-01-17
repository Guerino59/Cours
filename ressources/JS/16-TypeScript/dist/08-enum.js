"use strict";
/*
    Le type unknown est utilisé pour indiquer que l'on connait pas le type de notre argument.
    à la difference de any, toute action specifiqie à un type sera bloqué
*/
function hasard(arg) {
    // Impossible d'utiliser toString car on ne sait pas si ça pourrait fonctionner.
    // arg.toString()
    if (typeof arg === "number")
        arg.toString();
    //On peut utiliser le narrowing pour trouver le type d'un unknown.
}
/*
    Une constante aura tendance à prendre comme type, un litteral, c'est à dire que son type vaudra exactement sa valeur:

    ici le type de "b" est literallement "Bonjour" et non "string".
*/
const b = "Bonjour";
let b1 = "bonjour";
//Un objet par contre, meme si le fait qu'il soit un objet ne changera pas, verra ses proprietes changer
const d = { truc: "banane", machine: "camion" };
/*
    Mais je peux changer cela grace a certains mots cles.
    Par exemple "as"
*/
const d1 = { truc: "banane", machine: "camion" };
/*
    Le type "truc" devient le literal "fruit"
    et celui de "machin" comprenant qu'il est une constante, devient le literal "camion"
*/
const d2 = { truc: "banane", machine: "camion" };
/*
    Je peux aussi utiliser "as const" à l'exterieur de l'objet pour
    indiquer que l'objet en entier ne changera pas
    ainsi les proprietes de b2 sont devenu des proprietes en readonly
    ayant comme type les literals de leurs valeurs.

    Je peux aussi utiliser cela sur un tableau pour le mettre en read only
*/
const e1 = [1, 2, 3];
// Mon tableau contient des strings et des nombres
const e2 = [34, "truc", 35, 67];
// Ceci est un "tuple", il indique que mon tableau devra contenir exactement un string puis un nombre
const e3 = ["truc", 5];
const e4 = ["chaussette", true];
const e5 = ["tongue", false];
/*
    Ma fonction fusion prends deux arguments de type T1 et T2 qui extends un tableau d'inconnu
    Il retournera une fusion des tableaux et des deux types
*/
function fusion(tab1, tab2) {
    return [...tab1, ...tab2];
}
// Le type c6 est donc un tuple fusion des deux tuples precedents
const e6 = fusion(e4, e5);
const e7 = [...e4, ...e5];
const maurice = {
    legume: "Poivron",
    fruits: "banane" /* Fruits.Banane */
};
