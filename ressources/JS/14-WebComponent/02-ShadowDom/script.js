"use strict";
/*
    Le shadow DO permet de creer un arbre DOM séparé du reste du DOM.
    Ce DOM fantome obeit à ses propres regles, ignorant les scrips et style du DOM parent
    De meme les scripts et styles du shadow DOM n'influe pas sr ceux du parent.

    Pour creer un hote fantome (shadow host), il suffit d'appeler la methode suivante "attach Shadow" :
        element.attachShadow({mode:""})
            le mode peut être "open" ou "closed"
    Le mode open est accessible dupuis n'importe quel script via l'attribut "shadowRoot" de son hote.
    Alors que le "closed" est censé ne pas etre accessible.

*/
const open = document.querySelector('.open')
const close = document.querySelector('.close')

const shadowpen = open.attachShadow({mode: "open"})
const shadowclose = close.attachShadow({mode: "closed"})
//accessible
console.log(open.shadowRoot);
// non accessible
console.log(close.shadowRoot);
/*
    Dans l'exemple suivant, chacun des h1 ne sont affecté que par le style de leur propre DOM

    a noter que j'utilise des feuilles de style interne dans cet exemple, mais il est tout a fait possible d'ajouter une feuille de style externe.

    On notera aussi le selecteur css ":host" qui est utilisable uniquement en shadowDom et qui correspondra au "root" ou au "body" de notre DOM Fantome.
*/
const style1 = document.createElement("style")
style1.textContent = /* CSS */
`
:host{
    text-align: right;
}
h1{
    background-color: black;
}
`;
const h01 = document.createElement("h1")
h01.textContent = "Je vois des fantomes dans les ombres"
shadowpen.append(style1, h01)


const style2 = document.createElement("style")
style2.textContent = /* CSS */
`
:host{
    text-align: center;
}
h1{
    text-shadow: 5px 5px 5px red
}
`;
const h02 = document.createElement("h1")
h02.textContent = "Je vois des fantomes dans les ombres"
shadowclose.append(style2, h02)

/*
    Si je tente de selectionner touos mes h1, seul celui du DOM principale sera trouvé

    Pour selectionner ceux des DOM fantomes, il faudra soit faire la recherche dans le shadowRoot retourné par attachShadow, soit si il est "open" via l'attribut shadowRoot de l'host fantome.

*/
const hx = document.querySelectorAll('h1')
console.log(hx);

const h01bis = shadowpen.querySelector('h1')
const h01bis2 = open.shadowRoot.querySelector('h1')

/*
    Maintenant fusionnons notre shadow DOM avec nos custom elements.

    Pour cela je vais lier directement un shadow DOM à mon custom element dans son constructor.

    Je peux ainsi ajouter son style directement sous forme de balise "style" ou "link"
*/
import SuperBalise from "./SuperBalise.js";