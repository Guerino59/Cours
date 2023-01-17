"use strict";

// import createSlider from "../10-module/exercice/slider.js";
// window.addEventListener("click", createSlider)

const div = document.querySelector('.anime')

document.querySelector(".b1").addEventListener("click", animation1);
document.querySelector(".b2").addEventListener("click", animation2);
document.querySelector(".b3").addEventListener("click", animation3);
document.querySelector(".b4").addEventListener("click", animation4);
document.querySelector(".b5").addEventListener("click", animation5);

function animation1()
{
    /*
        La methode animate de JS prend deux arguments,

        le premier est la liste des keyframes que l'element HTML devra parcourir.
        le second est un objet contenant les options de l'animation.

        *Les keyframes peuvent etre données sous forme de tableau ou d'objet.
    */
   const keyframes = [
    {
        left:0,
        top:0
    },
    {
        left: "80%",
        top: "200px"
    },
    {
        left: "20%",
        top: "500px"
    }
   ];

   const options = {
    duration: 2000,
    iterations: 3,
    fill: "forwards",
    direction: "alternate",
    }

    div.animate(keyframes, options);
}
function animation2()
{
    // Les keyframes peuvent aussi etre données sous cette forme :
    const keyframes = {
        backgroundColor: ["blue", "red", "green"],
        opacity: [1, 0, 0.5]
    }
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iterations: 2
    })
}
function animation3()
{
    // On a la possibilité de ranger l'objet retourné par animate dans une variable pour acceder à de nouvelles methodes.
    const anim = div.animate(
        {transform: ["skew(0deg, 0deg)", "skew(360deg, 180deg)", "skew(0deg, 3600deg)"]},
        {duration: 1500, direction: "alternate", iterations: 1}
    )
    // console.log(anim);
    // Je peux par exemple ajouter un evenement sur mon animation
    anim.addEventListener("finish", ()=>{
        document.querySelector(".b4").style.opacity = 1;
    })
}
let a4 = false;

function animation4()
{
    // cancel arrete et annule l'animation.
    if(a4)
    {
        a4.cancel();
        a4 = false;
    }else{
        a4 = div.animate(
            {borderRadius: ["0", "50%", "5px", "25%"]},
            {duration: 2500, fill: "forwards"}
        )
    }
}
// La methode animation, n'est qu'un raccourci pour les objets suivants :
let keyframes = new KeyframeEffect(div,[
    {transform:"translate(0,0)"},
    {transform:"translate(100%,50%)"}
],
{
    duration: 3000,
    fill:"forwards"
});
let anime5 = new Animation(keyframes, document.timeline)
async function animation5()
{
    console.log(anime5.playState);
    const b5 = document.querySelector(".b5");
    switch(anime5.playState)
    {
        // idle est l'etat par defaut, celui d'attente
        case "idle":
            anime5.play();
            b5.textContent = "Pause";
            // La propriété finished contient une promesse qui est resolue quand l'animation se termine.
            await anime5.finished;
            b5.textContent = "Reverse";
            break;
            // running est l'etat de l'animation quand elle se deroule
        case "running":
            anime5.pause();
            b5.textContent = "Continue"
            break;
            // paused est l'etat de l'animation en pause.
        case "paused":
            anime5.play();
            b5.textContent = "Pause";
            break;
            // finshed es l'etat quand l'animation est terminé
        case "finished":
            anime5.reverse();
            await anime5.finished;
            b5.textContent = "Start";
            // Je relance le reverse et je l'annule tout de suite pour remettre toute l'animation dans son etat de base.
            anime5.reverse();
            anime5.cancel();
            break;
    }
}