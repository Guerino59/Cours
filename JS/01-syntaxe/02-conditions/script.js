"use strict";
/*
    On va chercher la methode "floor" de l'objet "Math" qui nous permet d'arrondir à l'inferieur.
    Math.random() nous permet d'obtenir un chiffre entre 0 et 1.
    x contiendra donc un chiffre entre 0 et 20
*/
let x = Math.floor(Math.random()*20);
// Un if permet de verifier une condition, il attend un boolean pour savoir si il peut faire l'action entre accolade ou non
if(x<10)
{
    console.log(x + " est plus petit que 10")
}
// a la suite de if , on peut optionnellement ajouter un else if pour verifier une autre condition
else if(x>10)
{
    console.log(x + " est plus grand que 10");
}
// a la suite d'un if ou d'un else if, on peu ajouter un else, qui s'enclenchera si toute les autres condtions sont fausse.
else
{
    console.log("x = 10");
}
// On peut mettre autant de else if que l'on veut
/* 
    d'autres syntaxe existent comme ne ne mettant pas d'accolade
    mais seule l'instruction qui suit sera pris en compte 
*/
if(x<10)
    console.log(x + " est plus petit que 10");
else if(x>10)
    console.log(x + " est plus grand que 10");
else
    console.log("x = 10");
/*
    On peut aussi utiliser une ternaire, c'est a dire une condition sous la forme :
    condition?true:false
*/
    let message = x<10?x + " est plus petit que 10":x +  " est plus grand que 10";
    console.log(message);
    // Je peut imbriquer une ternaire dans une autre
    message = x<10?x + " est plus petit que 10":x>10?x +  " est plus grand que 10":"x vaut 10";
    console.log(message);


// ----------------------Switch----------------------//

let ville = prompt("De quelle ville venez vous?")
console.log(ville);
// le switch accueil une variable avec un parametre
switch(ville.toLowerCase())
{
    // Plusieurs cas peuvent lancer la meme action
    case "paris":
    case "londres":
    case "tokyo":
        alert("De la capital donc");
        break;
        // Le mot clé break permet d'arreter le cas ici et de ne pas lancer les prochaines actions.
    case "lille" :
        alert("Moules, frites et bières");
        break;
        // Le mot clé default permet de creer un cas par defaut qui se lance si les precedents ne correspondent pas
    default:
        alert("Je ne connais pas");
}

// ------------------------ ?? ------------------------//

// Le "??" permet de verifier si la variable precedente est defini et dans le cas contraire, utiliser ce qui est donné après les "??"
let a, b = undefined, c = null , d = "chaussette", e = {nom: "BRuno"}, f = ["test"];
console.log(
    a??"COUCOU",
    b??"COUCOU",
    c??"COUCOU",
    d??"COUCOU",
    e??"COUCOU",
    f[0]??"COUCOU"

);