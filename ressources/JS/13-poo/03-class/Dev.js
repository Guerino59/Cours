"use strict"
import H from "./human.js"

/*
    Avec le mot clé extends suivi du nom d'une autre classe 
    On donne a notre nouvelle classe toute les proprietes et methodes de la classe parente.
    On dit que notre classe "herite" de son parent.

    Toute, en verité non, les proprietes et methodes privées ne sont pas herité.
*/
export default class Dev extends H
{
    constructor(prenom, nom, age, techniques)
    {
        /**
         * @param {string} prenom prenom du developpeur
         * @param {string} nom nom du developpeur
         * @param {string|number} age age du developpeur
         * @param {string|Array<string>} techniques langages du developpeur
         */
        /*
        L'heritage JS entraine un probleme, si la classe qui a herité possede un constructor, cela va entrainer une erreur.

        Pour corriger cette erreur, il faut appleer dans le constructeur de notre nouvelle classe, la fonction super()

        Cette fonction va permettre d'appeler le contructeur du parent

        On va donc par la meme occasion en profiter pour fournier à "super" les arguments qui sont attendu par le constructor du parent.

        */
        super(prenom, nom, age);
        this.setTechnique = techniques;
    }
    set setTechnique(t)
    {
        if(Array.isArray(t)) this.tech = t;
        else this.tech = [t];
    }
    get getTechnique()
    {
        return this.tech.join(", ");
    }
    /*
        Il est possible de reecrire une methode herité du parent.
        Pour cela il suffit de la redeclarer.

        Dans ce cas, la metode originel disparait et toute les methodes qui en faisait usage, feront maintenant
        usage de la nouvelle methode.
    */
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullname} et j'ai ${this.age} ans et je maitrise ${this.getTechnique}`);
    }
}