<?php
$title = "Session Page 2";
require "../ressources/template/_header.php";

/*
    Si on a besoin de la session que sur les rare pages,
    autant ne l'activer que sur les pages ou on en a besoin.
    Mais si la majorité de notre site l'utilise,
    autant mettre la session start dans un fichier inclu partout

    On peut avoir un message d'information si on tente de start une session deja existante.
    Si on souhaite l'eviter, on peut utiliser une des constantes suivantes dans une condition :
        PHP_SESSION_NON (il n'y a pas de session)
        PHP_SESSION_DISABLED (les session sont desactivés)
        PHP_SESSIOn_ACTIVE (il y a une session demarré)
    Si je compare ces constantes à session_status(), je pourrais activer ma session que si elle n'est pas deja demarré.

    Par defaut la duree de vie de ma session correspond à celle de mon cookie, or par defaut, le cookie meurt quand on ferme le navigateur
    Mais on peut lui donner une duree de vie plus longue en option du session start
*/
session_start([
    "cookie_lifetime"=>300 // la duree est en seconde
]);
/*
    ! ATTENTION : La duree de vie des cookies n'est pas tres precise.
    Le navigateur fait regulierement un nettoyage des cookies,
    verifiant à ce moment la si leur duree de vie est depassé ou non.

    Une solution pour avoir une session plus precise, est de stocké la duree de vie en session lors de la creation et si celle ci
    est depassé, supprimer manuellement le cookie.

    Si ma session est morte, mon affichage pourrait me retourner des warnings, car je tente d'acceder à des clefs qui n'existent pas.

    Pour eviter cela, il est de bon ton de verifier l'existence de celle ci avnt de les utiliser :
        On pourra utiliser isset() qui prend autant d'argument que l'on souhaite, et retourne "true" si ils existent et "false" si ils n'existent pas .
*/
if(isset($_SESSION["username"], $_SESSION["food"], $_SESSION["age"]))
echo $_SESSION["username"]["nom"]. " "
    .$_SESSION["username"]["prenom"]. " aime la "
    .$_SESSION["food"]. " et a "
    .$_SESSION["age"]. " ans <br> ";

if(session_status() === PHP_SESSION_NONE)
    session_start();
?>
<a href="./07a-session.php">Page 1</a>
<?php require "../ressources/template/_footer.php" ?>