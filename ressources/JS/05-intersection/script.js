"use strict";

const indicator = document.querySelector('.scroll-indicator');
const main = document.querySelector('main');
const options = {
    /*
        L'option root permet de changer le scrolling observé.
        Par defaut c'est celui du document (et donc du viewport)
        mais si on a ajouté un scrolling sur un element html, on peut lui indiquer cet element comme racine.
    */
    // root: main
    /*
        rootMargine permet d'etendre ou reduire la zone de detection.
        Avec un nombre positif, la detection sera déclenché hors de l'ecran.
        Avec un nombre negatif, la detection sera déclenché dans une zone reduite de l'ecran.
        (Que se soit pour l'entrée ou la sortie de l'element.)
    */
    // rootMargin: "-200px"
    /*
        Indique avec un chiffre entre 0 et 1 quel pourcentage de l'element doit etre visible pour declencher l'evenement.
        ! ATTENTION d'avoir un chiffre possibme, si votre element est plus grand que votre viewpoert, il n'atteindra jamais 1.
    */
    // threshold: 0.15
};
/*
    Intersection Observer est un objet permettant de detecter lorsq'un element html rentre dans le viexport lors du scrolling.

    Il prend obligatoirement une fonction callback en premier argument suivi d'optionnellement un objet contenant ses options.
*/
const observer = new IntersectionObserver(setIndicator, options);
// On utilise la methode "observe" pour lui indiquer quel element html il doit observer
observer.observe(main)
// On peut observer autant d'element que l'on souhaite.
function setIndicator(entries)
{
    /*
        La fonction donné en callback à l'observer sera lancé chaque fois que l'objet observé rentre ou sort du viewport.
    */
    let entry = entries[0];
    console.log(entry);
    /*
        Dans une entrée on trouvera les informations suivantes : 
        target => la cible qui a été détecté dans le viewport
        isIntersecting => boolean qui indique si l'element est dans le viewport
        intersectionRatio => chiffre entre 0 et 1 indiquant le pourcentage de l'element visible lord du declenchement
        boudingClientRect => taille et position de l'élément cible.
        intersectionRect => taille et position de l'element cible visible dans le viewport.
        rootBounds => Position et taille de l'element racine (par defaut dans le viewport).
    */
   if(entry.isIntersecting)
   {
    window.addEventListener("scroll", indicatorAnimation);
   }
   else{
    window.removeEventListener("scroll", indicatorAnimation);
   }
}
function indicatorAnimation()
{
    // scrollY represente combien de pixel on a scroll
    // offsetTop represente la position de notre element par rapport au haut de la page.
    if(window.scrollY > main.offsetTop)
    {
        // scrollHeight represente la hauteur de l'element incluant le padding vertical.
        // toFixed retourne un string correspondant à notre nombre avec "n" apres la virgule.
        const prc = ((window.scrollY - main.offsetTop)/main.scrollHeight).toFixed(2);
        // console.log(prc);
        indicator.style.transform =`scaleX(${prc})`;
    }
    else
    {
        indicator.style.transform ="scaleX(0)";
    }
}
/*
    Pour arreter d'observer un element on peut utiliser : 
    variableObserver.unobserve(elementHTML)
    ici :
    observer.unobserv(main)
    On peut arreter toute observation avec :
    variableObserver.disconnect()
    ici : 
    observer.disconnect()
*/
const par = document.querySelectorAll('main p');
const obspar = new IntersectionObserver(visibility, {threshold: 0.5})
par.forEach(i=>(obspar.observe(i)));
function visibility(entries) { 
entries.forEach(reveal)
}
function reveal(entry) {
    if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        obspar.unobserve(entry.target)
    }
    
}

const foot = document.querySelector('footer p');
console.log(foot);
const obsfoot = new IntersectionObserver(setOpa, {threshold: 0.5});
obsfoot.observe(foot)

function setOpa(entries){

    if(entries[0].isIntersecting){
        entries[0].target.style.opacity = "1";
        obspar.unobserve(entries[0].target)
    }
}