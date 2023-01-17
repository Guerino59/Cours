"use strict"

const imgs = document.querySelectorAll('.img-container')

imgs.forEach(img=>
    img.querySelector('button').addEventListener("pointerdown", fullscreen.bind(img)))

function fullscreen()
{
    if(document.fullscreenElement)
        document.exitFullscreen();
    else 
        this.requestFullscreen();
}
/*
    document.fullscreenElement est une propriété qui contient soit null
    soit l'element qui est en plein ecran.
    exitFullscreen() est une methode qui met fin au plein ecran
    requestFullscreen() est une methode qui met l'element HTML precedent en plein ecran
*/