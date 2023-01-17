"use strict"

/*
    L'interface est à mi chemin entre les types et les classes abstraites.
    à la difference de la classe abstraite, l'interface ne contiendra que des declaration, mais aucune definition.
    à la difference des types, l'interface sera reservé aux objets et pourra etre redefini (fusionné)
*/
type Chaussette = string;
// Erreur je ne peux pas redefinir mon type
// type Chaussette = number;

interface Point
{
    x: number
    y:number
    get(): number
}
interface Point
{
    z: number
}
/*
    Vs code utilise de nombreses interfaces pour indiquer a l'utilisateur ce que contienne tel ou tel variable de JS.
    Par exemple, si on prend "document" qu'on a souvent utilisé,
    si on fait "ctrl+click" sur document, on va finir par trouver
    l'interface Document

    On peut donc fusionner cette interface avec une que l'on aura crée nous même
*/
interface Document
{
    chaussette: number
}
/*
    Pour vscode, document contient bien une propriete "chaussette",
    bien qu'en vrai, elle sera "undefined"
*/
document.chaussette

class Point3D implements Point
{
    x = 0;
    y = 0;
    z = 0;
    get()
    {
        return this.x;
    }
}