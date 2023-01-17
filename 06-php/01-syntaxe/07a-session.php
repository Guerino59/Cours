<?php
$title = "Session Page 1";
require "../ressources/template/_header.php";

/*
    Les sessions permettent de stocker des donnees pouvant etre utilisées sur plusieurs pages.
    Le cas d'utilisation le plus classique, c'est le stockage
    d'information de connexion, permettant de garder l'utilisateur connecté sur plusieurs page d'un meme site

    Les informations sont stockés coté serveur, mais pour savoir quels informations appartiennet à quel utilisateur, le serveur envoi au navigateur
    de l'utilisateur un cookie indiquant l'ID de la session.

    Les cookies etant echanges entre le serveur et le navigateur à chaque requete, il est possible de verifier automatiquement la session

    Les informations en session sont stocké dans la superglobal $_SESSION mais celle ci n'existe qu'a partir du moment ou la session est demaré avec la fonction "session_start()"
    
    Le cookie verra par defaut l'identifiant stocké à la clef "PHPSESSID"
*/
session_start();
var_dump($_SESSION, $_COOKIE);
/*
    Pour stocker des informations en sessions, il suffit d'utiliser la superglobal $_SESSION qui est un tableau.
    On peut tout simplement ajouter des elements à notre tableau.
*/
$_SESSION["food"] = "Pizza";
$_SESSION["age"] = 34;
$_SESSION["username"] = ["nom"=>"Dupont", "prenom"=>"Maurice"];
?>
<a href="./07b-session.php">Page 2</a>
<?php require "../ressources/template/_footer.php" ?>