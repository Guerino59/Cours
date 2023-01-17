"use strict"
/*
    C'est bien connu les developpeurs n'aiment pas se repeter.
    TS l'a bien compris et permet de creer nos propre types ou collection de type
*/

// ----------------------ALIAS---------------------

type Fruit = {nom: string, couleur: string};
/*
    J'ai declaré un type Fruit avec le mot clé "type"
    Puis je l'utilise pour type mes variables
*/
let f: Fruit = {nom: "pomme", couleur: "rouge"}
let af: Fruit[] = [
    f,
    {nom: "banane", couleur: "jaune"}
]
type Age = number|string
type Person = {nom: string, age:Age}
/*
    Je declare un type age qui est de type nombre ou string.
    Puis je declare un type Person qui est un objet, dont une des proprietes est de type "Age"
*/
let p: Person = {nom:"Maurice", age: 45}

type Name = Fruit["nom"];
/*
    Ici j'indique que "Name" est du même type que la propriété "nom" du type "Fruit"
*/
let n: Name = "Georges";

type Full = keyof Person;
/*
    Ici notre type "Full" n'accepte grace à "keyof" que des string qui sont égaes aux noms des proprietes de "Person"
*/
let fp: Full = "age";
fp = "nom"

let objet = {vieux: true, prenom: "Maurice", age: 78};
type Item = typeof objet;
/*
    Sur ce dernier exemple, le type est crée par rapport à l'objet precedemment déclaré.
    Il lit les proprietes de l'objet et en fait un type correspondant.
*/

//-------------------Generics---------------------

function useless(arg: any): any
{
    return arg;
}
let machine = useless("salut");
/*
    Dans notre premier cas, la fonction prend n'importe quel type.
    Mais rien n'indique que le type sera le meme
    Notre variable dependant du type de retour de la fonction devient donc de type any

    Dans notre second cas, on lui indique qu'elle va recevoir un type particulier, elle ne sait pas lequel mais il est sauvegardé,
    et on lui indique ensuite qu'elle retournera ce meme type

    ma variable prendra donc le meme type que l'argument qui est donné a la fonction
*/
function usefull<Type1>(arg: Type1): Type1
{
    return arg;
}
let machine2 = usefull("Bonjour");
let machine3 = usefull(45);

function lastOf<TypeArr>(arr: TypeArr[]): TypeArr|undefined
{
    return arr.at(-1)
}
/*
    Ici on indique que notre argument est un tableau d'un type precis
    MAis que le retour n'est pas un tableau, seulement le type qui etait contenu dans le tableau. (ou undefined)
*/
let last = lastOf([23, 45, 12]);

function logSize<Type2 extends {length:number}>(arg :Type2): Type2
{
    console.log(arg.length);
    return arg;     
}
/*
    Ici on precise a notre fonction, qu'ele peut certe prendre n'importe qu"elle type.
    Mais que ce type doit au moins avoir la propriete length qui est un nombre
    On peut donc par exemple lui donner un tableau, un string, mais pas un nombre
*/
// let size1 = logSize(45)
let size2 = logSize([45])
let size3 = logSize("Chaussette")