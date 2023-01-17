"use strict"

/*
    Le type unknown est utilisé pour indiquer que l'on connait pas le type de notre argument.
    à la difference de any, toute action specifiqie à un type sera bloqué
*/
function hasard(arg: unknown)
{
    // Impossible d'utiliser toString car on ne sait pas si ça pourrait fonctionner.
    // arg.toString()
    if(typeof arg === "number")
        arg.toString();
        //On peut utiliser le narrowing pour trouver le type d'un unknown.
}
/*
    Une constante aura tendance à prendre comme type, un litteral, c'est à dire que son type vaudra exactement sa valeur:

    ici le type de "b" est literallement "Bonjour" et non "string".
*/
const b = "Bonjour";
let b1 = "bonjour"
//Un objet par contre, meme si le fait qu'il soit un objet ne changera pas, verra ses proprietes changer
const d = {truc: "banane", machine: "camion"};
/*
    Mais je peux changer cela grace a certains mots cles.
    Par exemple "as"
*/
const d1 = {truc: "banane" as "fruit", machine: "camion" as const};

/*
    Le type "truc" devient le literal "fruit"
    et celui de "machin" comprenant qu'il est une constante, devient le literal "camion"
*/
const d2 = {truc: "banane", machine: "camion"} as const;
/*
    Je peux aussi utiliser "as const" à l'exterieur de l'objet pour
    indiquer que l'objet en entier ne changera pas
    ainsi les proprietes de b2 sont devenu des proprietes en readonly
    ayant comme type les literals de leurs valeurs.

    Je peux aussi utiliser cela sur un tableau pour le mettre en read only
*/
const e1 = [1, 2, 3] as const;
// Mon tableau contient des strings et des nombres
const e2:(string|number)[]= [34, "truc", 35, 67]
// Ceci est un "tuple", il indique que mon tableau devra contenir exactement un string puis un nombre
const e3: [string, number] =["truc", 5]

type listeBool = [string, boolean]
const e4: listeBool = ["chaussette", true]
const e5: listeBool = ["tongue", false]
/*
    Ma fonction fusion prends deux arguments de type T1 et T2 qui extends un tableau d'inconnu
    Il retournera une fusion des tableaux et des deux types
*/
function fusion<T1 extends unknown[], T2 extends unknown[]>(tab1:T1, tab2: T2): [...T1, ...T2]
{
    return [...tab1, ...tab2];
}
// Le type c6 est donc un tuple fusion des deux tuples precedents
const e6 = fusion(e4, e5)
/*
    Ce qu'on a fait avec la fonction precedente peut etre resumé à cela :
*/
type DoubleLB = [...listeBool, ...listeBool]
const e7: DoubleLB = [...e4, ...e5]

//---------------Enumerateur------------------//

/*
    Les enumerateurs permettent de lister des valeurs qui seront les seuls valeurs utilisable.
*/
// enum Fruits
// {
//     Banane, Fraise, Pomme, Cerise
// }
// cette version indique seulement l'index
// cette version n'apparaitra pas dans la compilation
const enum Fruits
{
    Banane="banane", Fraise="fraise", Pomme="pomme", Cerise="cerise"
}
interface favorite
{
    fruits:Fruits;
    legume:string;
}
const maurice: favorite = {
    legume: "Poivron",
    fruits: Fruits.Banane
}