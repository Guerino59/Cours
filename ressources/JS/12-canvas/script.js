"use strict";
/*
    La balise canvas ne sert a rien sans js
    Mais avec JS on peut l'utiliser pour faire des animations,
    des jeux, des outils interactif ou autre.
*/

const canvas = document.querySelector("canvas");
/*
    Pour nteragir avec le canvas, on a besoin d'un contexte.
    pour cela on va utiliser la methode getContext() en lui donnant
    en argument le context voulu.
    Le plus classique et celui qu'on va voir ici, le context "2d"

    MAis il est possible de faire de la 3d avec "webgl" par exemple.
*/
const ctx = canvas.getContext("2d");

//----------------------Optionnelle------------------------//

// Redimension du Canvas :

function resize()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resize();
window.addEventListener("resize", resize);

//--------------CANVAS----------------------

// la plupart des methodes du canvas se lance sur le contexte.
/*
    fillRect et strokeRect permettent de dessiner un rectangle avec les parametres suivants :
        position x, position y, largeur, hauteur.
    Le premier est un rectangle rempli, le second, donne juste les contours
*/
ctx.fillRect(50, 50, 150, 25);
ctx.strokeRect(100, 150, 25, 150);
/*
    fillStyle et fillStroke sont des proprietes qui permettent de changer la couleur de remplissage ou de contour.
    Elles prennent un string contenat une couleur.
    (rgb, hexadecimal, mot clef)

    Le changement ne s'applique qu'aux dessins qui suivent et non aux precedents.
*/
ctx.fillStyle = "rgb(156, 78, 94)";
ctx.strokeStyle = "red";
ctx.fillRect(25, 59, 78, 95);
ctx.strokeRect(150, 150, 54, 245);

// Pour des formes plus complexes, o va devoir faiore appelle à :
// On commence un chemin avec beginPath()
ctx.beginPath();
//On de place notre curseur de depart
ctx.moveTo(345, 70);
// Je trace un chemin vers une nouvelle position
ctx.lineTo(450,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(500, 40);
ctx.lineTo(160, 543);
// closePath permet de refermer une forme dessiner par des lignes.
ctx.closePath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
// lineWidth permet de changer la largeur de mes traits
ctx.lineWidth = 8;
ctx.stroke();
// fill permet de remplir la forme precedemment dessiné
ctx.fill();

//----------------cercle--------------------//

ctx.beginPath();
/*
    arc permet de dessiner des cercles ou arc de cercle, avec les propriete suivantes :
    position x, position y, taille du rayon, position de depart du radiant (0 pour un cercle complet)
    position de fin de radiant (Math.PI*2 pour un cercle complet)
*/
ctx.arc(800, 500, 42, 0, 2*Math.PI);
ctx.stroke();
// clearRect permet d'effacer ce qui se trouve dans la zone rectangulaire selectionner
ctx.clearRect(50, 60, 70, 80);
// ctx.clearRect(0,0, canvas.width, canvas.height);

/*
    Mini exercice :
    declarer 5 variables representant les elements suivants :
    position X, positionY, vitesse Verticale, vitesse Horizontale, rayon.
    Faire une fonction qui dessine un cercle de rayon defini par la variable precedentes

    Ajouter des conditions:
    si x + le rayon est plus grand que la largeur du canvas, ou si x moins le rayon, plus petit que 0.
    Alors inverser la vitess horizontale
    de meme pour les coordonnées verticale
    Enfin ajouter la vitesse verticale a la position y et la vitesse horizontale a la position X
*/

let posX = 100
let posY = 100
let speedV = 50
let speedH = 50
let rayon = 42

function cercle()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath()
    ctx.arc(posX, posY, rayon, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
    if (posX+rayon > canvas.width || posX-rayon < 0)
       speedH = -speedH;
    if (posY+rayon > canvas.height || posY-rayon < 0)
       speedV = -speedV;
    posX += speedH;
    posY += speedV;
    // requestAnimationFrame va appeler la fonction donnée en argument au rythme optimale pour une animation.
    requestAnimationFrame(cercle);
}

//cercle()

//------------------------Images-------------------
//je cree une nouvelle image
let img = new Image();
// je lui donne une source
img.src= "sea.jpg"
// on attend le chargement de l'image pour la dessiner

img.onload = ()=>{
    ctx.drawImage(img, 200, 200, 23, 23)
   
}

//-------------------------Texte---------------------

ctx.lineWidth = "1"

// font permet de changer la taille et la police

ctx.font = "82px serif"

ctx.strokeText("Coucou", 500, 500);
ctx.fillText("Coucou", 500, 300);
//textAlign pour l'alignement du texte
ctx.textAlign = "center";
ctx.fillStyle = "purple";
// On peut ajouter optionellement un dernier parametre pour limiter sa largeur
ctx.fillText("Salut tout le monde!", 500, 100, 580)
//avec le texte align center, son x à 50 se retrouve au milieu du texte et non au debut

// ------------------- forme des traits ----------------------

ctx.lineWidth = 16;

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(700,40)
ctx.lineTo(700,400)
ctx.stroke()

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(750,40)
ctx.lineTo(750,400)
ctx.stroke()

ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(800,40)
ctx.lineTo(800,400)
ctx.stroke()