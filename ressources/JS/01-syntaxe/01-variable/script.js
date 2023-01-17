"use strict";
// Commentaire sur une seule ligne
/*
    Commentaire sur plusieurs lignes
    "use strict" permet de rendre moins permissif le javascript, 
    Js ne corrigera pas de lui meme les petites erreurs qu'il detecte.
*/


//----------------------Declaration des variables-----------------------//


let banane;
// On declare une variable avec le mot clé "let"
console.log("banane : ", banane);
// On fait appel à une variable simplement en écrivant son nom.
// ! Attention les variables sont sensibles à la casse.
var tomate;
// On peut aussi declarer une variable avec "var", mais la portée sera plus grande.
const cerise = 5;
// const permet de declarer une constante, c'est a dire une variable dont la valeur ne pourra pas changer
// Par ce fait elle doit etre defini au moment de sa déclaration
tomate = 6;
banane = 2;
let a,b,c;
var d, e=5, f=1;
// Je peux declarer plusieurs variables a la suite en les separant d'une virgule.
/*
    Les noms des variables peuvent contenir des lettres, des chiffres des "_" ou des "$" (entre autre)
    ! Elles ne peuvent pas commencer par un chiffre    
*/


// -------------------La portée des variables----------------------//


let gLet = 1;
var gVar = 1;
{
    let hLet = 2;
    var hVar = 3;
    console.log(gLet, gVar, hLet, hVar)
}
// console.log(gLet, gVar, hLet, hVar)
/*
    Une variable defini avec let est accessible uniquement dans son bloc et ses enfants.
    ici hLet n'est pas accessible hors de sn bloc.
    const suit les meme regles que let
*/
// let gLet = 5;
// On ne peut pas redeclarer une variable deja existante.
{
    let gLet = 5;
    var gVar = 5;
    // Redeclarer une variable dans un bloc n'est pas une erreur . C'est une variable différente
    console.log("Dans le block :", gLet, gVar)
}
console.log("Hors le block :", gLet, gVar)
/*
    let à créé une nouvelle variable dans le bloc, et hors du bloc nous retourne celle d'origine.
    var a écrasé l'ancienne variable pour ne garder que la nouvelle
*/


//----------------------------Types de variables---------------------------//


let num = 5,
    str ="Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
    // typeof va me retourner le type de variable donnée en parametre
    // Javascript à 5 types principaux :
console.log("num :", typeof(num));   
// Number 
console.log("str :", typeof(str));  
// String  
console.log("bol :", typeof(bol)); 
// Boolean   
console.log("arr :", typeof(arr));    
console.log("obj :", typeof(obj));  
// Object
// Les tableaux et les objets fonctionnent differement mais sont tous les deux de types "object"  
console.log("und :", typeof(und));
// Undefined
bol = 42;
/*
    Js est un language non typé, ce qui signifie qu'on a pas besoin de preciser le type d'une variable lors de sa declaration.
    Cela signifie qu'on peut changer le type d'une variable sans provoquer d'erreur.
*/ 


// --------------------------string----------------------//


let s1 = "Coucou",s2 = 'Coucou',s3 = `Coucou`;
// Pour definir un string on utilisera au choix "", '' ou ``
// "" et '' ont peu ou pas de difference d'utilisation.
s1 = "L'appostrophe ne pose aucun problème ici";
s2 = 'L\'appostrophe pose problème ici';
s1 = "Le grand ordinateur a dit \"42\"";
s2 = 'Le grand ordianteur a dit "42"';
/*
    Si on souhaite utiliser des guillemets dans un string fait à partir de guillemet (et inversement avec les appostrophes)
    Il nous faudra les echapper en plaçant un "\" avant le caractere.
    Cela indiquera à JS de ne pas prendre en compte ce caractere.
*/
s1 = "KARL";
s2 = 'Bonjour ' + s1 + " Comment vas tu ?";
console.log(s2);
// Le symbole de la concatenation (Fusion de chaine de caractere) en js est "+";
s3 = `Bonjour ${s1} Comment vas tu ?`;
console.log(s3);
// Les string en `` permettent de faire usage d'interpolation. C'est à dire de pouvoir integrer du JS directement dans le string, pour cela on utilisera "${}"
s3 = `Je peux très bien 
sauter à la ligne`;
console.log(s3);


// ----------------------------number--------------------------//


console.log(999999999999999);
// JS perd en precision sur les très grand nombre.
console.log(0.2 + 0.1);
// JS peut avoir des imprecisions avec les chiffres à virgule.
console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%2,
    5**5
);
// % le modulo (retourne le reste la division)
// ** La puissance
console.log(
    5 + "5",
    5 - "5",
    5 + "Banane",
    5 - "Banane"
);
/*
    JS si il doit additionner un string et un nombre, il fera une concatenation.
    Si il doit soustraire un string et un nombre, il testera si le string continet un nombre, si c'est le cas, il fera la soustraction
    sinon il repondra NaN (Not a number)
*/
console.log(typeof(NaN));
// isNaN() permet de verifier si le para metre n'est pas un nombre.
console.log(
    isNaN(5-"Chaussette"),
    isNaN(5-"1")
);
// Le mot clé infinity represent le nombre maximum utilisable en JS
console.log(Infinity, -Infinity);
// Blague JS :
console.log(("b" + "a" + + "a" + "a").toLowerCase());

let n = 0;
n = n + 5;
n += 5;
n -= 2;
n*= 3;
n /= 4;
console.log(n);
// += permet de donner à la variable sa propre valeur additionné du nombre suivant, (de meme pour les autres operateurs)

n += 1;
n++;
++n;
--n;
n--;
console.log(
    n,
    n++,
    ++n,
    n--,
    --n
);
/*
    L'incrementation (++) et la decrementaion (--) permettent d'augmenter ou diminuer la valeur d'une variable de 1.
    Selon si les operateurs sont placé avant ou apres la variable.
    La valeur retourné sera celle d'avant ou d'apres l'operation.
*/
n = 17;
console.log(
    n.toString(),
    n.toString(2),
    n.toString(11),
    );
    /*
        la methode toString() permet de trnasformer un nombre en string.
        Sans lui donner de paramere , il utilisera la base 10, mais on peut lui donner une autre base en parametre.
    */
   let s = "10011101";
   console.log(
        parseInt(s,2),
        parseInt(s)
   );
//    Inversement on peut utiliser la fonction parseInt() pour transformer un string en nombre


//--------------------------------Array---------------------------//

let a1 = [5, "truc", true],
    a2 = new Array(5, "truc", true);
    console.log(a1, a2);
// Pour acceder une valeur en particulier du tableau :
console.log(a1[0], a1.length);
/*
    Mettre le nom de la variable suivi de crochet, permet d'indiquer entre ses crochets l'index de l'élément que l'on souhaite afficher.
    Un tableau commence toujours à l'index 0.
    On peut aussi acceder à ses propriétés en faisant suivre la variable d'un point puis du nom de la propriété.
*/
console.log(a1[a1.length-1]);
/*
    Acceder au denire element d'un tableau :
    au dessus avant Ecmascript 2022
    en dessous depuis Ecmascript 2022
 */
 
console.log(a1.at(-1));
// .at() fonctionne aussi sur les string
console.log("salut".at(-1));

// LA methode push permet dajouter un élément a la fin du tableau
a1.push("bidule");
console.log(a1);
// Pop retire le dernier element du tableau
a1.pop();
console.log(a1);
// shift retire le premiere element du tableau.
a1.shift();
console.log(a1);
// Ajoute un element au debut du tableau
a1.unshift(42);
console.log(a1);
// splice retire depuis l'index donnée en premier parametre , le nombre d'element donné en second parametre
a1.splice(1, 1);
console.log(a1);
a1.push("chaussette");
// On peut ajouter autant de parametre que l'on veut a splice, il placera ces parametres à la place des elements retirés.
a1.splice(1, 1, "machin");
console.log(a1);

let a3 = [4, 1, 42, 8, 14];
// sort tri le tableau par ordre alphabetique, meme les chiffres.
a3.sort();
console.log(a3);
// On verra par la suite comment lui faire bien trier les chiffres

// On peut modifier ou ajouter des elements ainsi :
a1[a1.length] = "Pizza"
console.log(a1);

let a4 = a1;
console.log(a1, a4);
/*
    Les variables de tableau ne contiennet pas les valeurs du tableau mais l'adresse memoire ou se trouve le tableau dans l'ordinateur.
    De ce fait, ici on ajuste indiqué à a4 qu'il contient la même adresse que a1. en modifier en modifiera l'autre
*/
a4.push("Cerise");
console.log(a1, a4);
/*
    En utilisant le spread operator (...) on demande a JS de deconstruire notre tableau, plaçant les differentes valeurs du tableau les une apres les autres.
    Ici je l'ai mit dans un nouveau tableau, nous permettant ainsi de faire une copie de notre tableau
*/
let a5 =[...a1];
a5.push("avocat");
console.log(a1, a5);
console.log(...a5);
// Si je place un tableau dans un autre tableau, je me retrouve avec un tableau multidimensionnel.
// Si je souaite simplement les fusionner, je devrais la aussi utiliser le spread operator.
let a6 = ["pomme", "banane", a5, "orange"];
console.log(a6);

let a7 = ["pomme", "banane", ...a5, "orange"];
console.log(a7);
// Pour acceder à un élément d'un tableau multidimensionnel, il me suffit d'indiquer plusieurs index à la suite.
console.log(a6[2][3]);
let a8 = [[[[["Coucou"]]]]];
console.log(a8[0][0][0][0][0]);
// On peut ouon devrait utiliser des const pour les tableaux puisque ce qui est stocké est l'adresse memeoire, on peut donc modifier autant que l'on veut le tableau.
const a9 =["test"];
a9[1] ="test2";
console.log(a9);


// ------------------------Object----------------------//

const o1 = {nom: "Dupont", age: 45, loisir: ["bowling", "mahjong"]};
/*
    LEs objets ressemblent a des tableaux mais dans lesquels au lieu d'indexer par des chiffres, on index par des noms de propriete. ( ces noms ont les meme regle de nomination que les variables)
*/
console.log(o1);
// ON peut acceder aux donnes de la meme maniere qu'un tableau mais aussi via un "." suivie du nom de la propriété
console.log(o1["age"], o1.age);
console.log(o1["loisir"][0], o1.loisir[0]);
const o2 = {vegetal: {legume: {haricot: {couleur: "vert"}}}};
console.log(o2.vegetal.legume.haricot.couleur);
// Pareillement au tableau c'est l'adesse qui est sauvegardé
const o3 = o1;
o3.signe = "Balance";
console.log(o3, o1);
// LA aussi on pourra utilisetr un spread operator pour faire une copie
const o4 = {...o1};
o4.signe = "Scorpion";
console.log(o1, o4);
// On peut transformer un tableau en objet mais pas inversement
console.log({...a1});

o4.yeux ="vert";
// En cas de fusion, les doublons sont remplacé par ceux du dernier objet.
const o5 = {...o4, ...o1};
console.log(o5);

// ------------------Boolean--------------------//

let b1 = true, b2 = false;
// Les booleans ne peuvent avoir que 2 valeurs, tru ou false

// Mais on peut les faire apparaitre de plein de façcon :

console.log(" 1 < 2 : ",1 < 2 );
console.log(" 1 > 2 : ",1 > 2 );
console.log(" 1 <= 2 : ", 1 <= 2 );
console.log(" 1 >= 2 : ", 1 >= 2 );
// == permet de verifier l'egallité entre deux elements. Attention un = sert seulement a la definition des variables
console.log(" 1 == '1': ", 1 == '1' );
// === va verifier si le type correspond aussi
console.log(" 1 === '1' : ", 1 === '1' );
// different :
console.log(" 1 != '1' : ", 1 != '1' );
// strictement different :
console.log(" 1 !== '1' : ", 1 !== '1' );
console.log("b1 : ",b1, "b2 : ",b2 );
// le "!" avant un boolean inverse le resultat
console.log("b1 : ",!b1, "b2 : ",!b2 );

