<?php
$title = "Formulaire en POST";
require "../ressources/template/_header.php";

/*
    La principale difference entre GET ET POST, est la façon donbt son transmises les donnees
    En get elles sont visible dans l'url, en POST elles sont transmises dans la requete de façon invisible.

    On utilisea generalement plutot POST, surtout si on a des inofrmations sensibles ou des fichieres a transmettre
    Mais GET est souvent utiliser dans les formulaires de recherche pour rendre l'url de la recherche copiable.

    Au niveau du fichier, les seules differences sont : 
        1. l'attribut methode du formulaire est passé à "POST"
        2. On verifie si on arrive en methode "POST" avant de traiter le formulaire.
        3. On recupere nos informations dans la superglobal "$_POST" et non "$_GET".

    Comme ca serait dommage d'arreter le cours ici on va ameliorer notre formulaire :
        1. On va transformer nos tableaux de donnée en tableaux associatifs.
        2. faire apparaitre nos options et radios avec une boucle
        3. Ajouter une classe "formError" à certaines de nos balises.
        4. Ajouter une case a cocher pour valider le formulaire.
        5. Faire que nos utilisateurs n'ai pas remplir à nouveau les champs lorsqu'ils se trompent.
*/
if(isset($_POST["username"]))
{
    $username = $_POST["username"];
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
$foodList = [
    "welsh" =>"Welsh car vive le fromage", 
    "canneloni" => "Canneloni car les raviolis c'est surfait",
    "oyakodon" => "Oyakodon car j'aime l'humour noir"
];
$drinkList = [
    "jus de tomate" => "Jus de tomate",
    "milkshake" => "Milkshake",
    "limonade" => "Limonade"
];

/*
    On trouvera dans la superglobale $_server, la methode utilisée pour arriver sur cette page.
    Par defaut, aller d'une page a une autre, se fait en methode "POST"
*/
var_dump($_SERVER["REQUEST_METHOD"]);
/*
    Pour commencer la verification de nos formulaires, je vais verifier deux points.
    Si la methode correspond à celle de mon formulaire, (ici "POST")
    et si j'ai au moins un champ de ce formulaire (par exemple celui du bouton submit).
*/
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["meal"]))
{
    // Si le champ "username" est vide, j'affiche un message d'erreur.
    if(empty($_POST["username"]))
        $error["username"] = "Veuillez entrer un nom d'utilisateur !";
    else
    {
        $username = cleanData($_POST["username"]);
        if(strlen($username) < 3 || strlen($username) > 255)
            $error["username"] = "Votre nom d'utilisateur n'a pas une taille adapté.";
    }
    // On va maintenat verifier un second champ
    if(empty($_POST["food"]))
        $error["food"] = "Veuillez choisir un repas !";
    else
    {
        $food = cleanData($_POST["food"]);
        // Je verifie si le plat donne est bien une clef dans ma liste de plat
        if(!array_key_exists($food, $foodList))
            $error["food"] = "Ce repas n'existe pas !";
    }

    if(empty($_POST["drink"]))
        $error["drink"] = "Veuillez choisir une boisson !";
    else
    {
        $drink = cleanData($_POST["drink"]);
        // Je verifie si le plat donne est bien une clef dans ma liste de boisson existante
        if(!array_key_exists($drink, $drinkList))
            $error["drink"] = "Cette boisson n'existe pas !";
    }
    if(empty($_POST["cgu"]))
        $error["cgu"] = "Veuillez accepter nos conditions d'utilisaion !";
    else
    {
        $cgu = $_POST["cgu"];
        if ($cgu != "cgu")
            $error["cgu"] = "Ne modifiez pas notre formulaire !";
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

<form action="" method="POST">
    <input
     type="text" 
     placeholder="Entrez un nom" 
     name="username"
     class="<?php echo(empty($error["username"])?"": "formError")?>"
     value="<?php echo $username?>"
     >
     <!-- Si j'ai une erreur qui correspond au champ, alors je lui ajoute la classe "formError" -->
    <span class="error"><?php echo $error["username"]??"" ?></span>
    <br><br>
    <fieldset class="<?php echo(empty($error["food"])?"": "formError")?>">
        <legend>Nourriture Favorite</legend>
        <!-- J'ajoute un champ inpute avec son label pour chaque element de mon tableau $foodListe -->
        <br>
        <?php foreach($foodList as $k => $f): ?>
        <input type="radio" name="food" id="<?php echo $k ?>" value="<?php echo $k ?>" <?php echo $food===$k?"checked":"" ?>>
        <label for="<?php echo $k ?>"><?php echo $f ?></label>
        <br>
        <?php endforeach; ?>
        <span class ="error"><?php echo $error["food"]??"" ?></span>
    </fieldset>
    <label for="boisson">Boisson Favorite</label>
    <select class="<?php echo(empty($error["username"])?"": "formError")?>" name="drink" id="boisson">
    <!-- J'ai ajouté la class formError à mon select si il y a une erreur,
         et j'ajoute une option pour chaque element du tableau $drinkList -->
        <?php foreach($drinkList as $k =>$d): ?>
            <!-- On place l'attribut selected sur l'option qui correspond aux choix de l'utilisateur -->
        <option value="<?php echo $k?>" <?php echo $drink===$k?"selected":"" ?>><?php echo $d?></option>
        <?php endforeach; ?>
    </select>
    <span class ="error"><?php echo $error["drink"]??"" ?></span>
    <br>
    <!-- Une checkbox cgu pour valider le formulaire -->
    <input type="checkbox" name="cgu" id="cgu" value="cgu">
    <label for="cgu">J'accepte que mes donnees ne m'appartiennent plus.</label>
    <span class="error"><?php echo $error["cgu"]??""?></span>
    <br>
    <input type="submit" value="Envoyer" name="meal">
</form>
<!-- 
    Si notre formulaire a été soumis et sans erreur, je vais afficher la patie suivante
 -->
 <?php 
    if(empty($error) && isset($_POST["meal"])):
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