"use strict";

/*
    Ecmascript permet l'export et l'import de fonction et objets entre autre choses/
    Cela va permettre de pouvoir diviser notre codes sans avoir a devoir ajouter les fichiers dans le bon ordre dans le head de notre HTML.

    Pour cela la premiere chose a faire est d'ajouter l'attribute suivant a notre balise script :
        * type ="module"

    ?----------------------------------Export------------------------------

    Pour importer du code, il faut avant tout l'exporter, pour cela rendons nous dans le fichier contenat ce que l'o souhaite exporter.

    On va ajouter l'un des mots cles suivant devant ce que l'on va exporter :
        * export
        * export default
    On peut exporter autant d'element que l'on souhaite, mais seul l'un d'entre eux peut profiter de "export default"

    ?-----------------------------------Import-----------------------------

    Par defaut, l'import ne peut se trouver qu'au "top level" du fichier 
    C'est a dire que l'on ne peut pas le placer dans un block.(boucle, condition, fonction)

    L'import va suivre la syntae suivante
        le mot cle import suivi d'accolades, contenant l'element ou les elements que l'on souhaite importer (separé d'une virgule)
        puis le mot clé "from" et enfin un string contenant le chemin vers le fichier à importer

        *import { salut,coucou } from "./salut.js";

    Si notre fichier contient un export default, on peut le recuperer en plaçant un nom avant les accolades.
    Ce nom n'a pas besoin d'çetre le même que celui de la fonction

        *import b, { salut,coucou } from "./salut.js";
    
    Dans le cas de l'importation de nombreux fichier, il n'est pas rare de se retrouver avec des fonctions de même nom
    il est alors possible de les rennomer grace au mots clé "as".

        *import b, { salut,coucou as c} from "./salut.js";

    SI il y a de nombreuses choses a importer, au lieu de les lister on peut toute les importer d'un coup grace à "* as nomDeVariable"

        *import * as salut from "./salut.js";
        On obtient alors un objet contenat tous nos exports
        l'export default est rangé dans "default" et non via son nom

*/
import * as salut from "./salut.js";
salut.salut();
salut.coucou("Maurice");
salut.default()

window.addEventListener("keyup", e=>{if(e.key=="Enter")hello()});
/*
    Pour importer des elements situationnellement ( dans un block par exemple)
    On ne peut pas utiliser le mot clé "import" qui doit etre au top level du module.
    On va donc utiliser la fonction import() qui prend en argument le chemin vers le fichier et retourne une promesse.
    Cette promesse nous rendra un objet contenant tous les elements exporté comme dans l'exemple precedent avec "* as"
*/
async function hello()
{
    const s = await import("./salut.js")
    console.log(s);

    s.coucou("charlotte")
}
/*
    On notera que le console log qui vient du fichier importé n'est lancé que la premiere fois.
    JS lorsque l'on tente d'importer plusieurs fois le meme fichier.
    N'interprete le script que la premiere fois.
*/