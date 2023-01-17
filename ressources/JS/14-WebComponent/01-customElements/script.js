"use strict"
import SuperBalise from "./SuperBalise.js";
import SuperDiv from "./superDiv.js";

/*
    Les customs elements (elements personalisés) permettent de creer nos propres eleemnts HTML.
    On va pouvoir creer de nouvelles balise ayant leur propre capacités et regles.
    Pour cela on a besoin de creer une nouvelle classe.

    Il existe deux types de customs elements :
        - les elements personnalisés autonomes qui herite de "HTMLElement";
        - Les elements personallisés Integres qui heritent d'un element HTML particulier (p, div, span..)
    Puis on appelle (hors de la classe) la methode suivante : 

        customElements.define()
    Elle prendra en premier argument, un string qui sera le nom de votre balise.
        !important les noms de balise personnalisés doivent contenir un "-"
    En second argument, la classe de notre element personnalisé.
        * voir SuperBalise.js
    En troisieme, optionnellement, si l'element n'est pas autonome,
    On precisera de quel element il herite.
        cela avec un objet {extends: 'nomDuParent'}
        * voir Superdiv.js

    Une fois cela fait, notre element est fonctionnel, on peut l'appeler dans le HTML avec l'une des syntaxes suivante :
        -autonome : "<nom-balise></nom-balise>"
        -integré : "<baliseParent is = "nom de balise"></baliseParent>

    Il est aussi possible dajouter des cycles de vie a nos elements personnalisés.
    Ces cycles de vie sont des methodes qui se declenchent automatiquement a des moments precis :
    
        "connectedCallback" se declenche quand l'element est ajouté a la page.
        "disconnectedCallback" se declenche quand l'element est retiré de la page
        "adoptedCallback" se declenche quand l'element est deplacé d'un document à un autre.
            (principalement utile avec des iframe)
        "attributeChangedCallback" se declenche quand les attributs ciblés sont modifié.

            On pourra donner à ce dernier 3 arguments :
                -le premier recevra le nom de l'attribut modifié
                -le second l'attribut avant modification
                -le troisieme l'attribut apres modification
                
            Pour que cela fonctionne, on devra accompagner cette methode d'un getter static appelé :
            "observedAttributes" qui retournera un tableau contenant les attributs a observer
            * voir superDiv.js
*/