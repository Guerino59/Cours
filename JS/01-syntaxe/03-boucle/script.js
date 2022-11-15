"use strict";


// ----------------------- While ------------------------------//

let a = 0;
// tant que a est plus petit que 10 :
while(a<10)
{
    // On répete ce qui se trouve en accolade.
    console.log("a vaut", a);
    // On prevoit la condition de sortie.
    a++;
}
// ! ATTENTION de toujours prevoir un moyen de sortir.
while(true)
{
    a++;
    if (a<20)
    {
        // Continue met fin à l'iteration en cours mais continue la boucle
        continue;
        // Ici ce qui suis ne s'executera que si a arrive à 20
    }
    
    console.log("a vaut ", a);
    if (a == 25)
    {
        // Break met fin a la boucle
        break;
    }
}

/*
    do while permet de lancer une action au moins une fois avant de verifier si elle doit etre repétè.
    Ici a est plus grand que 5, donc il n'y aura pas de boucle, mais le console.log se lancera quand meme une fois
*/

do{
    console.log("a vaut ", a);
}while(a<5);


// --------------------FOR------------------------//


for(let i = 0; i<10; i++)
{
    /* 
        La boucle for prend 3 parametres séparé de ;
        LE premier est une declaration et definition de variable qui sera executé avant le debut de la boucle.
        LE second est la condition qui sera verifié avant chaque itération pour savoir si la boucle continue.
        LE troisieme est la modification de la variable qui aura lieu à la fin de chaque itération.
    */
    console.log("i vaut", i);
}
let arr =["Pizza", "cannelé", "gratin"];
let person ={nom: "Maurice", age: 55, yeux: "vert"};

for(let food in arr)
{
    // for in permet de recuperer les differents index d'un tableau.
    console.log(food, "->", arr[food]);
    // a chaque iteration, la variable déclaré dans le for prendra la valeur de l'index suivant.
}
for(let carac in person)
{
    // utilisé sur un objet, on obtient le nom des proprietes
    console.log(carac, "->", person[carac]);
}

for(let f of arr)
{
    // for of comme for in va parcourir mon tableau, mais au lieu de selectionner les index, il selectionnera directement les valeurs.
    console.log(f);
}
// for of ne fonctionne pas sur les objets


// ---------------------foreach et map--------------------------//

let a1 = [8, 42, 34, 13, 97];
/*
    forEach et map sont des methodes(fonctions) appartenant aux tableaux
    Elles ne fonctionnes donc que sur des tableaux,
    avec la synthaxe suivante :
    tableau.forEach(fonction);
    tableau.map(fonction);
*/
a1.forEach(chiffre=>console.log(chiffre));
/*
    forEach crée une itération pour chaque element du tableau.
    cet element est recupéré dans la variable donnée en paramètre de forEach,
    et peut etre utilisé comme on le souhaite dans la fonction callback.
     (plus de detail dans le cours sur les fonctions)
*/
let a2 = a1.map(val => val*2);
console.log(a2);
/*
    Le fonctionnement de map se rapproche de celui de forEach, a la difference qu'il permet de modifier les valeurs d'un tableau et nous retourne un nouveau tableau
    contenant les valeurs retourné par la fonction callback.
*/
let a3 = arr.map(food=>food.toUpperCase());
console.log(a3);
