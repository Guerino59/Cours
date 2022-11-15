"use strict";

function test(e)
{
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/*
    On peut ajouter un evenement grace a la methode ".addEventListener"
    Celle-ci se met al la suite de l'element HTML que l'on souhaite écouter.
    Elle prendra en premier parametre un string avec le nom de l'evenement en minuscule.
    et en second argument une fonction callback.
*/
h1.addEventListener("click", test);
// removeEventListener ne fonctionquavc une fonction callback nommé.
h1.removeEventListener("click", test);
// On peut aussi mettre une fonction anonyme
h1.addEventListener("mouseover", function(e){
    let r = Math.floor(Math.random()*360);
    /*
        La cible de l'evenement (event.target) n'est pas forcement celle sur laquelle on ecoute l'evenement, cela peut aussi etre ses enfants
    */
    e.target.style.transform = `rotate(${r}deg)`;
    // SI je souhaite etre sur que l'evenement se deroule sur l'element que j'ecoute, deux possibilités : 
    // Je peux tout simplement reprendre mon element
    h1.style.color = "red";
    // ou alors utiliser le mot clé "this"
    this.style.backgroundColor = "pink"
    console.log(this);
})
// ! ATTENTION, this peut varier, par exemple avec un fonction fléché
h1.addEventListener("mousemove", ()=>console.log(this));
/*
    Les evenements peuvent etre ajouté directement en attribut d'un element HTML.
    Que ce soit dans le html (voir menu2) ou via javascript
*/
const menu1 = document.querySelector('.menu1');
menu1.onclick = test;
/*
    On peut ajouter autant d'ecouteur sur un meme evenement que l'on souhaite avec addEventListener.
    Mais avec les onEvent, l'attribut ne peut recevoir qu'un seul evenement, il effacera alors le precedent.
*/
menu1.onclick = e=>{
    if(e.target.style.fontSize == "2rem")
    {
        e.target.style.fontSize == "";
    }
    else{
        e.target.style.fontSize == "6rem";
    }
}

// ------------------Event pour input----------------------------//

const div1 = document.querySelector('.div1');
const inp1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');

function textChange(e){
    // Sur un input, l'attribut value contient ce qu'on y a entré
    console.log(e.target.value);
    if(e.target.value != "")
    {
        btn1.textContent = e.target.value;
        return;
    }
    btn1.textContent = "Clique moi !!!"
}
// l'evenement change s'active une fois l'input totalement validé
// inp1.addEventListener("change", textChange);
// L'evenement input s'active à chaque entrée dans l'input
inp1.addEventListener("input", textChange);

// -------------------options------------------- //

/*
    On peut ajouter en troisieme argument de addEventListener un objet contenant des options.
    par exemple "once" qui prend un boolean, qui si il est à true, ne permettra d'enclencher l'evenement qu'une seule fois
*/
btn1.addEventListener("click", ()=>{
    h1.textContent = inp1.value;
    // troisieme argument, les options
}, {once: true});

const div4 = document.querySelector('.div4');
const gp = document.querySelector('.grandParent');
const pa = document.querySelector('.parent');
const en = document.querySelector('.enfant');
/*
    Par defaut, si un evenement enclenche plusieurs ecouteurs.
    une phase de bulle s'enclenchera (bubbling phase).
    C'est a dire que les evenements les plus proche commençeront puis ceux du parent, puis du grand parent...

    Mais avant la phase bulle, il y a une phase dite de capture.
    Celle ci verifie les evenements sans les declencher. mais on peut preciser à un evenement de se declencher durant cette phase.
    En ajoutant l'option "capture" à true
*/
div4.addEventListener("click", ()=>console.log("from div4"), {capture: true});
gp.addEventListener("click", ()=>console.log("from grandParent"));
pa.addEventListener("click", (event)=>
{
    console.log("from parent");
    event.stopPropagation();
    /*
        La methode d'evenement stopPropagation permet d'arreter le declenchement des evenements parents.
        Ici on arrete la propagation dans la div "parent" l'evenement n'ira donc pas se propager à la div "grandParent"
    */
});
en.addEventListener("click", ()=>console.log("from enfant"));
/*
    Si la phase de bulle est ascendante, (de l'enfant au parent)
    la phase de capture est descendante, (du parent à l'enfant)
*/

const menu5 = document.querySelector('.menu5 a');
/*
    les evenements de pointer regroupent les evenements au clique et ceux au touché d'appareil tactile.

    preventDefault() permet de bloquer les actions par defaut d'un evenement.
    Par exemple le changement de page d'un lien,
    la soumission d'un formulaire, ...
*/
menu5.addEventListener("click", e=>e.preventDefault());

const div2 = document.querySelector('.div2');
const col = document.querySelector('.div2 input');
const btn2 = document.querySelector('.div2 button');

function colorChange(e){
    btn2.style.color = `${e.target.value}`;
    btn2.textContent = "Change moi de Couleur !!!"
}
function backChange(e){
    div2.style.backgroundColor = `${col.value}`;
    console.log(e);
}

col.addEventListener("input", colorChange);
btn2.addEventListener("click", backChange);

//

const btouv = document.querySelector('.div3 button');
const btfer = document.querySelector('.modal button:last-of-type');
const mod = document.querySelector('.modal');

function disp(){
    mod.classList.toggle("hidden");
}

btouv.addEventListener("click", disp);
btfer.addEventListener("click", disp);

//



function double(a){
    if(a.style.transform != 'scale(2)'){
        a.style.transform = 'scale(2)';
    }
    else{
        a.style.transform = '';
    };
};

const li = document.querySelectorAll('nav li');

li.forEach(i =>{
    i.onclick=()=>double(i)
});

//
const fsp = document.querySelector('footer span');
const body = document.querySelector('body');
let x;
let y;

fsp.addEventListener('mouseenter', ()=>{
    fsp.style.position='absolute';
});

document.addEventListener('mousemove', (event)=>{
   x = event.pageX;
   y = event.pageY;
   follow(fsp);
});

function follow(span){
    span.style.top=`${y}px`;
    span.style.left=`${x}px`;
};
fsp.onclick=()=>{
    fsp.style.position=`inherit`;
};
