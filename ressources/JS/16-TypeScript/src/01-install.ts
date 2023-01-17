"use strict"
/*
    Typescript est une surcouche a JS, c'est a dire que tout ce qui est faisable
    en js, est faisable en ts

    Au contraire d'une bibliotheque classique, ici on se retrouve avec des fichiers ".ts"
    Par ce fait ils sont illisibles par le navigateur, il faudra compiler notre code avant de le donner a lire a celui ci.

    ---------------Avantage---------------

    TS apport le typage, cela nous force à coder avec rigueur en indiquant le type de chaque variable, argument ...
    Une fois maitrisé, cela nous permet d'eviter certaines erreurs et gagner du temps.
    Il peut nous permettre d'adapter un code moderne a de vieux navigateurs.
    Ts n'a pas besoin d'etre chargé par le site, donc notre projet n'est pas allourdi

    --------------Desavantage--------------

    On est forcé de compiler notre code.
    Cela rajoute un outil supplementaire à notre projet

    ------------Installation---------------

    L'installation se fait via npm avec la commande suivante :
    * npm install typescript --save-dev

    Une fois installé, vous pouvez lancer la compilation d'un fichier avec : 
    * npx tsc pathToFIle.ts

    Il est de bon ton de separer les fichier TS et JS :
    * npx pathToFile.ts --outDir folderName

    Pour eviter de retaper tout cela, on peut creer à la racine de notre projet, un fichier nommé :
    * ts.config.json

    qui continedra un objet avec les proprietes suivantes :
    * {
        "compilerOptions": {
            "outDir": "dist"
        },
        "files":[
            "src/01-install.ts"
        ]
    } 
    Une fois cela fait, je n'aurais plus qu'a taper 
    *npx tsc
    Et comme avec scss, il est possible de demander à typeScript de surveiller nos fichier pour les compiler à chaque sauvegarde avec
    *npx tsc --watch
*/

const btn = document.querySelector('#compte');
let i = 0;
/* btn.addEventListener('pointerdown', ()=>{
    i++
    // Ici typescript provoque une erreur car textContent attend un string et on lui donne un nombre
    // btn.textContent = i
    //On devra alors le transfromer en string
    btn.textContent = i.toString();  
}) */
// btns.style.background = "orange";
    /*
        Par defaut typescript compile pour du JS un peu agé, faisant disparaitre let, const et fonction
        fléché pour les remplacer par des var et des fonctions anonymes.
        On peut ajouter à notre fichier de configuration l'option suivante :
        * "target": "ES2022"
        Pour indiquer vers quelle version de Ecmascript la compilation doit se faire.

        Si on fait une erreur sur le nom d'une variable, TS peut nous indiquer si le nom est ressemblant, quel est le bon nom.
        Cela dit il compilera quand meme le code avec l'erreur

        On peut lui interdire la compilatio si ili ya des erreurs avec l'option
        * "noEmitOnError" : true

        Et si on veut un code capable de gerer n'importe quelle erreur, on peut demander à TS d'être bien plus strict sur sa detection d'erreur avec l'option :
        * "strict": true

        Des erreurs sont apparu dans notre code, nous allons voir dans le chapitre suivant comment corriger cela

    */
