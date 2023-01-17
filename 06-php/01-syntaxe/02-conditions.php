<?php
// rand retourne un nombre aleatoire
$r = rand(0,100);
echo $r, "<br>";
echo "<h1>CONDITIONS </h1>";
// if prend entre parenthese une condition (un boolean), si c'est true les accolades sont executé, sinon rien ne se passe.
if($r<50)
{
    echo "\$r est plus petit que 50. <br>";
}
// elseif fo,ctionne comme le if mais ne peut apparaitre qu'apres un if ou un autre else if, et sa condition ne sera verifié que si toute les precedentes sont fausses
elseif($r>50)
{
    echo "\$r est plus grand que 50. <br>";
}
// else n'apparait qu'apres un if ou un elseif, ne prend pas de conditions entre paretnhese, et s'execute si toute les conditions precedentes sont fausses
else
{
    echo "\$r vaut 50. <br>";
}
// Il est tout a fait possible d'imbriquer les if
echo "<h2> Autres syntaxes </h2><hr>";

/*
    Cette syntaxe retire les accolades, et les remplaces par un ":"
    pour marquer le debut de la condition, et "endif" pour marquer la fin
*/

if($r<50):
    echo "\$r est plus petit que 50. <br>";
elseif($r>50): 
    echo "\$r est plus grand 50. <br>";
else:
    echo "\$r vaut 50. <br>";
endif;

/*
    Il existe aussi une syntaxe n'acceptant qu'une seule ligne apres mes conditions
    pour laquelle on retire ":" et "endif"
*/
if($r<50)
    echo "\$r est plus petit que 50. <br>";
elseif($r>50)
    echo "\$r est plus grand 50. <br>";
else
    echo "\$r vaut 50. <br>";
/*
    On peut aussi retrouver les ternaires qui permettent une condition sur une seule ligne
*/
echo "\$r est plus". ($r<=50?" petit ou egale à ":" grand que ")."50.<br>";

// Elles peuvent aussi être imbriques
echo "\$r est plus". ($r<50?" petit que ":($r>50?" grand que ":"égale à"))." 50.<br>";

// On peut aussi verifier l'existence ou non d'une variable avec :
$message1 = "Bonjour tout le monde ! <br>";
echo $message1??"Rien à dire";
echo $message2??"Rien à dire";

echo "<h2>SWITCH</h2> <hr>";
$pays = ["France", "Japon", "Angleterre", "Suisse", "france"];
$r2= rand(0, count($pays)-1);
echo $pays[$r2], "<br>";
// switch prend une valeur à evaluer 
switch($pays[$r2])
{
    case "Japon":
        echo "Une cuisine reputée";
        // chaque cas dois finir par un break
        break;
    case "Suisse":
        echo "Persone parle la meme langue";
        break;
        // On peut donner plusieurs cas pour une meme instruction
    case "France":
    case "france":
        echo "Pays de la cuisine";
        break;
        // Default sera lanc si aucun cas ne correspond
    default:
        echo "Je ne vais pas detailler tous les pays";
}

?>