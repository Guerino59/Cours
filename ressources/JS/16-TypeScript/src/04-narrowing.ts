"use strict";
/*
    Le narrowing cest le fait de supprimer des possibilités de type pour nos variables
*/
function birthday(age:string|number): string 
{
    // age peut etre un string, donc l'incrementation est une erreur.
    // age++;    
    if(typeof age === "number")
        age++
    else
        age = parseInt(age)+1;
    /*
        Dans notre if, age devient forcement de type nombre,
        Dans notre else, age devinet forcement de type string.
    */
    return age+" ans";
}
function chaussette(droite:string|boolean, gauche: string|number) 
{
    if(droite === gauche)
        console.log("Vous avez la paire", droite, gauche);
    /*
        Pour entrer dans la condition, droite et gauche doivent être de même type.
        TS sait donc que droite et gauche, dans la condition sont de type string,
        etant le seul type qu'ils ont en commun
    */
}
function planning(date: Date|string, days: string[]|number)
{
    //date.getDate()
    if(date instanceof Date)
        date.getDate();
    // days++
    if(!Array.isArray(days))
        days++;
}
document.addEventListener("keypress", clavier);
function clavier(e:KeyboardEvent|HTMLElement)
{
    if(typeof e == "number")
        console.log(e);
    /*
        Ici e est de type "never",
        C'est un type particulier qui idique que selon TS,
        il est impossible que le code arrive ici
    */
}
// function isDate(a:any): boolean
function isDate(a:any): a is Date
{
    return a instanceof Date;
}
function check(a:Date|HTMLElement)
{
    if(isDate(a))
        console.log(a);  
    /*
        Si j'indique que ma fonction isDate() retourne un boolean,
        TypeScript ne comprendra pas le role du boolean
        MAis en indiquant que ma fonction retourne "a is date"
        grace au mot clef "is", TS comprend que le retour d'un boolean
        à true indique que le type de a est bien une date.
    */   
}