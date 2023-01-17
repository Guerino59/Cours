"use strict";

/*
    Par defaut une fonction est declaré avec le mot clef "function"
    Il est suivi du nom de la fonction.
    puis de parenthes qui accueillerpns les possibles arguments.
    Et enfin les accolades qui contiendrons le corps de la fonction.

    Une fonction déclaré ainsi peut être appelé avant ou après sa declaration

    pour appeler une fonction, on écrit son nom suivi d'une parenthese.
*/
salut();

function salut(){
    console.log("Bonjour");
}
salut();
/*
    Il existe donc d'autre declaration possible
    comme en plaçant une fonction dans une variable
*/
// salut2(); impossible d'appeler une variable avant sa declaration
const salut2 = function(){
    // Ici on a rangé dans notre variable une fonction anonyme
    console.log("Bonjour");
}
salut2();

const salut3 = ()=>{
    console.log("COUCOU");
}
salut3();

const salut3bonus = ()=>console.log("HEllo");
salut3bonus();
// On peut ecrire une fonction fléché sans accolade si il n'y a qu'une seule action à reealiser.

// JE peux aussi ranger mes fonctions dans des objets
const s = {
    salut: function(){
        console.log("YO");
    }
   
}
s.salut();

//-------------------LEs parametres----------------------//

function bonsoir(nom){
    if(nom == undefined){
        console.error("Donne moi un argument");
    }
    console.log("Bonsoir " + nom);
}
// JS accepte d'appeler une fonction qui attend des parametres sans lui en donner, ils seront alors undefined.
bonsoir();
// Si on lui donne des parametres, ils seront alors place dans les arguments de la fonction selon leur ordre.
bonsoir("MOMO");
// Si des parametres en trop sont donné, ils seront juste ignoré
bonsoir("vero", "mimi", "charles")

function bonneNuit (nom1, nom2)
{
    // %c en debut de string indique que l'on va donner du css en second argument pour mettre du style à notre console.log
    console.log("%cBonne nuit "+nom1+" et "+nom2, "color: blue; font-size: 4rem;");
}
/*
    Chaque arguments de la fonction est séparé d'une virgule, autant lors de sa declaration, que lors de son appel.
*/
bonneNuit("Jean", "Cedric")

function goodbye(nom1, nom2 = "les autres")
{
    console.log(`Goodbye ${nom1} et ${nom2}`);
}
goodbye("Kevin");
goodbye("Keven", "Allan");

function goodMorning(...noms) {
    // Le rest operator prend tous les arguments donné et les range dans un tableau
    // toString transforme un tableau en String

    // console.log("Good morning "+noms.toString());

    // *join fait de meme mais en separant les elements du tableau par le string donnée en parametre.
    console.log("Good morning "+noms.join(" et "));
}
goodMorning("j", "f", "b", "c");

//-----------------MEttre fin a une fonction et retourner des informations-----------------//
function insulte(nom) {
    if (nom == undefined) {
        console.error("Donne un nom");
        // le mot clé return met fin à une fonction
        return;
    }
    // Il peut aussi permettre de retourner des informations traitées par la fonction
    return nom + " le poltron";
    // CE console log ne sera jamais exécuté
    console.log("COUCOU");
}
insulte();
// Les iformations retournées par une fonction peuvent etre rangé dans une variable
let truc =insulte("BOB");
console.log(truc);
// Ou directement utilisé dans une autre fonction
console.log(insulte("KARL"));

// -------------- retour sur forEach et fonction callback------------------------//
let pr =["alice", "ariel", "mulan", "belle"];
/*
    forEach comme d'autres methodes, prennent une fonction en parametre.
    Donner une fonction en argument d'une autre fonction, c'est ce qu'on appele une fonction callback.
    Lorsque l'on donne une fonction callback on deonne seulement son nom et on ne met pas les parentheses, ce n'est pas un appel de fonction
*/

pr.forEach(bonsoir);
// Plutot que de declarer une fonction, on peut directement lui donner une fonction anonyme
pr.forEach(function(princesse){
    console.log("Bonsoir "+princesse);
})
// On peut aussi le reduire a une fonction fléché.
pr.forEach((princesse)=>{
    console.log("Bienvenue "+princesse);
})
// Si la fonction fléchée ne prend qu'un seul argument elle peut encore etre reduite
pr.forEach(princesse=>{
    console.log(princesse);
})
// Si on a une seule instruction, les accolades peuvent disparaitre
pr.forEach(princesse=>console.log(princesse));

let maj, maj2;
maj = pr.map(princesse=>{
    // Certaine fonctions comme map ont besoin que l'on retounr ela valeur transformé
   return princesse.toUpperCase();
})
console.log(maj);
// La fonction fléché à une seule instruction (sans accolades) fait ce qu'on appelle un retour implicite, c'est a dire que meme si le return n'est pas ecrit, l'instruction est bien retourné.
maj2 = pr.map(princesse=>princesse.toUpperCase());
console.log(maj2);

function compliment(salutation, nom) {
    salutation(nom+ " le magnifique")
}
compliment(bonsoir, "Greg");
compliment(nom=>console.log("Guttentag "+nom),"Hanz");

//--------------------fonction recurcives------------------------//

// Une fonction recursive est une fonction qui s'apelle elle meme
function encore(x) {
    // Attention pensez toujours à une condition de sortie
    if (x<=0)return; 
    console.log(x);
    encore(--x);
}
encore(10);