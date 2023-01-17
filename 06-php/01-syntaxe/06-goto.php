<?php
$title = "Go TO";
require "../ressources/template/_header.php";

/*
    Go to permet de sauter une parte du code pour aller a la suivante.
    On peut s'en servir dans une condition pour ne pas executer certains codes.
    C'est une vieille fonctionnalité que les developpeurs n'apprecient pas trop car elle change l'ordre de lecture du code

    !ATTENTION :
        On ne peux pas entrer dans une fonction, une boucle ou une condition avec go to.
        On ne peux pas sortir d'une fonction non plus

    Go to fonctionne en deux parties, la premiere est une balise qui servira d'ancre à notre goto
        Elle est represente par un mot suivi de ":"
    Puis le mot clef goto suivi du nom de l'ancre
*/
for($i=0; $i < 100000; $i++)
{
    echo "ceci est le message $i <br>";
    if($i === 5) goto fin;
}
echo "Les chaussettes de l'archi duchesse... <br>";
fin:
echo "Ceci est la fin";
?>

<?php require "../ressources/template/_footer.php" ?>