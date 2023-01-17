"use strict";

/*
    Une classe est un plan de construction pour un objet.
    Elle se declare avec le mot clef "class" suivi de son nom et d'accolades
    Pour instancier une classe (creer un nouvel objet a partir de notre plan)
    on va utiliser le mot clé "new" suivi de nom de notre classe

*/
export default class Human
{
    /*
        -On peut declarer 3 types de proprietes, les proprietes ou methodes, les proprietes classiques,
        qui seront accessible et visible depuis notre objet.
        -Les proprietes privées, qui ne sont accessible qu'a l'interieur de notre objet
        -Les proprietes statics qui ne sont accessible que sur la classe et non sur l'onjet.

        Les proprietes et methodes privées, servent soit a éviter d'etre utilisé sans getter ou setter,
        soit au fonctionnement interne de l'objet. (sur un distributeur de boisson, vous avez acces au boutons et moyen de paiement,
        mais pas au decompte du stock ou au deplacement des objets)
    */
    age = 0;
    #name = {};
    static categorie = "Mamifère";
    constructor(prenom, nom, age)
    {
        this.setPrenom = prenom;
        this.#setNom = nom;
        this.age = age;
        /*
            Les proprietes static et privées sont à declarer obligatoirement avant leur utilisation, 
            mais les proprietes classiques peuvent etre declaré à la volée directement dans le code.
        */
        this.createdAt = new Date();
    }
    /*
        Dans une classe, on n'a pas les mots clé de declaration habituel comme "let, const, var, function"
        seul "static" ou "#" peuvent etre optionnellement utilisé. 

        Dans une methode static, seul les proprietes statics sont accessible.
        les autres proprietes sont declaré au moment de l'instanciation de la classe.
    */
    static description()
    {
        console.log(`un humain est un ${this.categorie} qui a generalement une tete, un buste, deux bras et deux jambes`);
    }

    /** 
    * @param {string} p 
    */
    set setPrenom(p)
    {
        this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    /** 
    * @param {string} n
    */
    set #setNom(n)
    {
        this.#name.nom = n.toUpperCase();
    }
    get getFullname()
    {
        return this.#name.prenom + " " + this.#name.nom;
    }
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullname} et j'ai ${this.age} ans`);
    }
    anniversaire()
    {
        this.age++;
        this.salutation();
    }
}