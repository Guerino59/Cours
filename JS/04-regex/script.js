"use strict";

/*
    Les regex (ou expression Reguliere) permettent la recherche dans un string, de caracteres ou mots en particulier.

    Une regex commence et fini par un /
    (On peut aussi retrouver apres le / final, des "flags" voir plus bas dans le cours)
*/
// Recherche la precense de "ou"
const r1 = /ou/;
// Recherche la presence de "o" ou "u"
const r2 = /[ou]/;
// La methode test s'applique sur une regex et prend un string en argument. elle retournera true ou false selon si la regex correspond ou non.
console.log(r1, r1.test("Bonjour"), r1.test("Salut"));
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));
// Recherche la presence de "ou" en debut de string.
const r3 = /^ou/;
console.log(r3, r3.test("Bonjour"), r3.test("outre"));
// Recherche la presence de "ou" en fin de string.
const r4 = /ou$/;
console.log(r4, r4.test("Bonjour"), r4.test("mou"));
// Recherche la presence de "ou" ou "oi"
const r5 = /ou|oi/;
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));
// Recherche les caracteres entre a et z compris (voir table unicode)
const r6 = /[a-z]/;
console.log(r6, r6.test("Bonjour"), r6.test("0621442013"));
// Recherche si le string ne contient pas ces caracteres.
const r7 = /[^a-z]/;
console.log(r7, r7.test("bonjour"), r7.test("0621442013"));
// Recherche la presence de "ou" entre 0 et 1 fois.
const r8 = /(ou)?/;
console.log(r8, r8.test("Bonjour"), r8.test("Pizza"));
// Recherche la presence de "ou" 1 fois ou plus.
const r9 = /(ou)+/;
console.log(r9, r9.test("Bonjour"), r9.test("Pizza"));
// Recherche la presence de "ou" 0 fois ou plus.
const r10 = /(ou)*/;
console.log(r10, r10.test("Bonjour"), r10.test("Pizza"));
// Recherche lapresence de "ou" dont "u" apparait deux fois d'affilé.
const r11 = /ou{2}/;
console.log(r11, r11.test("Bonjour"), r11.test("Bonjouur"));
// Recherche la presence de "ou" 2 fois d'affilé
const r12 = /(ou){2}/;
console.log(r12, r12.test("Bonjour"), r12.test("Bonjouour"));
// Recherche la presence de "ou" entre 2 et 4 fois d'affilé
const r13 = /(ou){2,4}/;
console.log(r13, r13.test("Bonjour"), r13.test("Bonjouour"));
// Recherche la presence de "ou" 2 fois d'affilé ou plus
const r14 = /(ou){2,}/;
console.log(r14, r14.test("Bonjour"), r14.test("Bonjouour"));
// Pour rechercher un caractére utilisé par la regex comme ayant un sens, il faut que je l'echappe (place un "/" avant)
const r15 = /\^/;
console.log(r15, r15.test("^^"), r15.test("Bonjour"));
// INversement, des caracteres normaux ganent un sens si ils sont échappé.
// Ici "\s" sifgnifie un espace.
const r16 = /\s/;
console.log(r16, r16.test("Hello World"), r16.test("Bonjour"));
// Recherche un chiffre, equivalent à [0-9]
const r17 = /\d/;
console.log(r17, r17.test("Hello World"), r17.test("Bonjour 8 fois"));
// "." recherche n'importe quel caractere
// "\1" recherche le meme resultat que la premiere parenthese.
// (Et ainsi de suite avec \2, \3...)
const r18 = /(ou|oi).*\1/;
console.log(r18, r18.test("Coucou"), r18.test("Bonsoir 8 fois"), r18.test("Bonjour 8 fois"));

// ---------------------- Match ------------------------- //

const phrase = "J'aime la pizza, les cannelés et les okonomiyakis";
// Match est une methode string qui retourne un tableau correspondant aux elements retrouvés par ma regex.
// Match prend en argument, un regex ou un string a rechercher.
console.log(phrase.match(/pizza/));
// par defaut match s'arrete au premier element retrouvé.
console.log(phrase.match(/les/));
// le flag g pour global permet de ne pas s'arreter au premier resultat mais de fouiller le string en entier.
console.log(phrase.match(/les/g));
const phrase2 ="Vive les regex et vive javascript"
// Avec le flag "i", la regex devient insensible à la casse (minuscule ou majuscule)
console.log(phrase2.match(/vive/gi));

// -------------------------- replace --------------------------- //

// Replace est une methode de string qui va remplacer le premier element donnée en argument, par le second. (la aussi il accepte string comme regex)

console.log(phrase.replace("pizza", "salade"));
// meme resultat
console.log(phrase.replace(/pizza/, "salade"));
// L'avantage d'une regex, c'est que l'on peut verifier des cas plus complexes
console.log(phrase.replace(/pizza|okonomiyaki|cannelé/gi, "salade(s)"));
console.log(phrase2.replace(/regex|javascript/gi, "*******"));
// On peut avec "$&" garder l'element recherché et lui accoler d'autres éléments.
console.log(phrase2.replace(/javascript/gi, "$& et CSS"));
console.log(phrase2.replace(/regex/gi, "'$&' (c'est faux)"));

//------------------bonus-------------------//

const phrase3 =
`1er : Maurice
2ème : Paul
3éme : Charli`;
// Avec le flag "m" chaque ligne sera testé comme un string séparé, donc ici il nous trouvera tous les chiffres.
console.log(phrase3.match(/^\d/gm));
// Cela fonctionne aussi avec la fin des lignes.
console.log(phrase3.match(/(\w+)$/gm));
// Atention, les accents ne sont pas pris en compte.
console.log(/^[a-z]+$/.test("paul"));
console.log(/^[a-z]+$/.test("élodie"));
// pas de magie, les accents comme les caracteres speciaux doivent etre listé 1 à 1.
console.log(/^[a-zéèàâê]+$/.test("élodie"));

// par defaut "." ne prend pas en commpte les sauts a la ligne. avec le flag "s" ils sont pris en compte.
console.log(phrase3.match(/1.+3/s));

// On peut aussi construire une regex via un string grace au constructeur de "regex" qui prend en premier argument la regex et en second les flags.
const r19 = new RegExp("^[A-z]+$", "gi");
// Attention, de A majuscule à z minuscule, certains caracteres speciaux se cachent :
console.log(r19, r19.test("Hello_World"));