"use strict"
/*
    Une fois l'element HTML video selectionné,
    certaines methodes particulieres apparaissent :
    .play() qui lance la video
    .pause() qui met la video en pause
    .currentTime qui donne le temps de la video ens econde
    .muted qui est boolean indiquant si le son de la video est coupé
    .volume qui prend un chiffre entre 0 et 1 indiquant le volume.
    .controls qui prend un booleen affichant ou non les controls par defaut de html5
    .duration qui indique la durée totale de al video
    .paused qui est un boolean indiquant si la video est en pause
    .ended qui est un boolean indiquant si la video est terminé.
*/
const vC = document.querySelector('.vContainer')
console.log(vC);
const play = document.querySelector('.stop');
const vid = document.querySelector('video');
const fulls = document.querySelector('.full');
const options = document.querySelector('.options');
const replay = document.querySelector('.fa-rotate-right')
play.addEventListener("pointerdown", ()=>
{
    if(play.classList[play.classList.length-1] === 'fa-pause')
    {
    vid.pause();
    play.classList.toggle("fa-play")
    play.classList.toggle("fa-pause")
    }
    else
    {
    vid.play();
    play.classList.toggle("fa-play")
    play.classList.toggle("fa-pause")
    }
})
fulls.addEventListener("pointerdown", ()=>
{
    if(fulls.classList[fulls.classList.length-1] === 'fa-compress')
    {
    document.exitFullscreen();
    fulls.classList.toggle("fa-expand")
    fulls.classList.toggle("fa-compress")
    }
    else
    {
    vC.requestFullscreen();
    fulls.classList.toggle("fa-expand")
    fulls.classList.toggle("fa-compress")
    }
})
function vidFinish (){
    if(vid.ended)
    {
        replay.style.display = "block"      
    }else
        return;
}
setInterval(vidFinish, 1000)
replay.addEventListener("pointerdown",()=>
{
    replay.style.display = "none" 
    vid.play()
})

const vol = document.querySelector('#volume');
const vlogo = document.querySelector('.vol');
vol.addEventListener('change', sound)
vlogo.addEventListener('pointerdown', ()=>
    {
        vid.volume = 0
        vol.value = 0
        vlogo.classList.add("fa-volume-xmark")
    })
function sound() {
    vid.volume = vol.value
    if (vid.volume > 0 || vid.volume <= 0.5) {
        vlogo.classList.remove("fa-volume-xmark")
        vlogo.classList.remove("fa-volume-high")
        vlogo.classList.add("fa-volume-low")
    }
    if (vid.volume > 0.5) {
        vlogo.classList.remove("fa-volume-xmark")
        vlogo.classList.remove("fa-volume-low")
        vlogo.classList.add("fa-volume-high")
    }
    console.log(vid.volume);
}
const pbar = document.querySelector('.progress-bar')

setInterval(time,10)
function time() {
    pbar.style.width = `${100 * vid.currentTime/vid.duration}%`
}