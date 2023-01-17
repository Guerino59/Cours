"use strict"

class Truc
{
    public prenom = "Maurice"
    protected nom = "Dupont"
    private age = 54
}
const t = new Truc()
t.prenom
/*
    Les mots clefs public, protected et private ne sont pas visible dans la version compilé, ils correspondent à :
        -une propriete ou methode classique pour public
        -une propriete ou methode precede de # pour private 
        -Et protected est le vrai nouveau ici, à mi chemin entre public et private, il n'est pas accessible hors de la classe comme private
        mais peut etre herité comme public
*/
//t.nom
//t.age
class Machin extends Truc
{
    constructor()
    {
        super();
        this.prenom
        this.nom
        // age etant privé, c'est le seul non accessible
        // this.age;
    }
    faireUnTruc(this:Document)
    {

        this
    }
}
class Collection<T>
{
    /*
        En indiquant à notre constructor que sont argument est "public", "private" ou "protected" sans rien ajouter d'autre à notre constructor.
        TS va automatiquement sauvegarder l'argument comme une propriete de la class lors de la compilation

    */
    constructor(private items:T[]){}
    addOne(arg: T): this
    {
        this.items.push(arg);
        return this;
    }
    addMore(arg: T[]): this
    {
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([54, 42, 13]);
/*
    En ayant indiquer un type generic lors de la declaration
    de ma classe, et en precisant que mes methodes attendent ce meme type
    Une fois ma classe instancié avec un tableau d'un type precis.
    Mes methodes attendront ce meme type.
*/
c.addOne(7).addMore([35, 12, 89]);
/*
    Petite astuce poo utilisable meme hors TS:
    Si une methode ne retourne aucune valeur.
    Vous pouvez lui faire retourner "this" afin de pouvoir chainer les methodes
    comme au dessus.

    La methode retournant l'objet lui meme, on peut faire appelle à une nouvelle methode tout de suite apres
*/
class Triangle
{
    c1 = 54
    c2 = 32
    c3 = 12
}
class Rectangle
{
    c1 = 12
    c2 = 28
}
function getC1(arg: Rectangle)
{
    return arg.c1;
}
getC1(new Rectangle());
getC1(new Triangle());
/*
    La comparaison des objets par TS se fait selon leurs proprietes, getC1 attend
    un "Rectangle", donc un objet contenant les proprietes "c1" et "c2".

    Lui donner un "triangle" qui contient ces memes proprietes est donc valide
*/
abstract class Polygone
{
    sides: {[key:string]: number} = {}
    abstract surface():number;
    countSide()
    {
        return Object.keys(this.sides).length
    }
}
/*
    Une classe abstraite, est une classe qui ne peut pas çetre instancié.
    Elle n'a pas pour but, que le fait d'être herité
    Elle sert de modele à ses enfants.

    Ma classe abstraite possede aussi une methode abstraite dont tout ce qu'on connait c'est son nom et sa valeur de retour.

    Cela signifie que lorsque je vais heriter ma classe, la classe enfant va devoir contenir une methode de meme nom retournant le type indiqué.
    son contenu par contre peut changer d'un enfant à l'autre.
*/
class Carre extends Polygone 
{
    constructor(c:number)
    {
        super();
        this.sides.c = c;
    }
    surface(): number {
        return this.sides.c * this.sides.c
    }
}
const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());

