<?php
$title = "Formulaire en GET";
require "../ressources/template/_header.php";

/* 
    On retrouvera les informations envoyé par un formulaire en méthode "GET" dans la variable 
    super global "$_GET".
    Elle s'utilise tel un tableau associatif, dont chaque entrée correspond à l'attribut "name" de notre
    input.
*/
// var_dump($_GET);
/* 
    Il est important de vérifier l'existence de notre donnée dans la variable $_GET.
    Si on arrive ici sans avoir validé le formulaire, des erreurs apparaîtrons si on tente d'utiliser
    les données du formulaire.
*/
if(isset($_GET["username"]))
{
    $username = $_GET["username"];
}
/*
    Optionnellement, on peut declarer en debut de fichier PHP, les differentes variables que l'on va utiliser.
    Cela permet de preciser ce qu'elles vont contenir et gerer la possibilité qu'elles soit utilisées sans passer par une condition suivante.
*/
# Une variable pour chaque entrée de mon formulaire
$username = $food = $drink = "";
# Une variable pour mes erreurs
$error = [];
# Les choix possibles pour l'utilisateur :
$foodList = ["welsh", "canneloni", "oyakodon"];
$drinkList = ["jus de tomate", "milkashake", "limonade"];

/*
    On trouvera dans la superglobale $_server, la methode utilisée pour arriver sur cette page.
    Par defaut, aller d'une page a une autre, se fait en methode "GET"
*/
var_dump($_SERVER["REQUEST_METHOD"]);
/*
    Pour commencer la verification de nos formulaires, je vais verifier deux points.
    Si la methode correspond à celle de mon formulaire, (ici "GET")
    et si j'ai au moins un champ de ce formulaire (par exemple celui du bouton submit).
*/
if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["meal"]))
{
    // Si le champ "username" est vide, j'affiche un message d'erreur.
    if(empty($_GET["username"]))
        $error["username"] = "Veuillez entrer un nom d'utilisateur !";
    else
    {
        $username = cleanData($_GET["username"]);
        if(strlen($username) < 3 || strlen($username) > 255)
            $error["username"] = "Votre nom d'utilisateur n'a pas une taille adapté.";
    }
    // On va maintenat verifier un second champ
    if(empty($_GET["food"]))
        $error["food"] = "Veuillez choisir un repas !";
    else
    {
        $food = cleanData($_GET["food"]);
        // Je verifie si le plat donne est bien dans ma liste de plat existante.
        if(!in_array($food, $foodList))
            $error["food"] = "Ce repas n'existe pas !";
    }

    if(empty($_GET["drink"]))
        $error["drink"] = "Veuillez choisir une boisson !";
    else
    {
        $drink = cleanData($_GET["drink"]);
        // Je verifie si le plat donne est bien dans ma liste de plat existante.
        if(!in_array($drink, $drinkList))
            $error["drink"] = "Cette boisson n'existe pas !";
    }
    /*
        Si on devait faire un ajout en BDD,
        c'est aprres toutes ces verifications, donc ici qu'on ferait l'ajout
    */
}   
/**
 * Nettoie le string donne en argument afin de le securiser
 * 
 * @param string $data
 * @return string $data nettoyé
 */
function cleanData(string $data): string
{
    // On se sert de trim pour supprimer les espaces accidentels qui pourrait se trouver en debut ou fin de string.
    $data = trim($data);
    // On retire les possible "\" present dans le string.
    $data = stripslashes($data);
    // On remplace les caracteres HTML tel qu "<" par leurs code non interpretes comme "&lt;"
    return htmlspecialchars($data);
}
?>

<form action="" method="get">
    <input type="text" placeholder="Entrez un nom" name="username">
    <span class="error"><?php echo $error["username"]??"" ?></span>
    <br><br>
    <fieldset>
        <legend>Nourriture Favorite</legend>
        <br>
        <input type="radio" name="food" id="welsh" value="welsh">
        <label for="welsh">Welsh car vive le fromage</label>
        <br>
        <input type="radio" name="food" id="canneloni" value="canneloni">
        <label for="canneloni">Canneloni car les raviolis c'est surfait</label>
        <span class ="error"><?php echo $error["food"]??"" ?></span>
        <br>
        <input type="radio" name="food" id="oyakodon" value="oyakodon">
        <label for="oyakodon">Oyakodon car j'aime l'humour noir</label>
    </fieldset>
    <label for="boisson">Boisson Favorite</label>
    <select name="drink" id="boisson">
        <option value="jus de tomate">Jus de tomate</option>
        <option value="milkshake">Milkshake</option>
        <option value="limonade">Limonade</option>
    </select>
    <span class ="error"><?php echo $error["drink"]??"" ?></span>
    <br>
    <!-- Si ma page a plusieurs formulaire differents à traiter, je peux par exemple ajouter un name au submit pour verifier que le formulaire a été envoyé
         Sinon je change l'action du formulaire, pour que les differnets formulaires soit traites par une page differente. -->
    <input type="submit" value="Envoyer" name="meal">
</form>
<!-- 
    Si notre formulaire a été soumis et sans erreur, je vais afficher la patie suivante
 -->
 <?php 
    if(empty($error) && isset($_GET["meal"])):
 ?>
 <!-- 
    On peut encapsuler du HTML dans une condition, ou une boucle php.
    La fermeture de la balise PHP, ne met pas fin à la condition
    Elle attend toujours qu'on reouvre php pour fermer la condition.
    Le html ci dessous s'affichera donc que que si la condition est true
  -->
 <h2>Super Repas !</h2>
 <p>
    <?php echo "Pour $username, le meilleur repas est un \"$food\" avec \"$drink\"."?>
 </p>
<?php
endif;
require "../ressources/template/_footer.php";
?>