<?php 
/*
    Ici nous allons voir l'upload de fichier.
    Meme si on ne touchera pas à la BDD ici, il est important de savoir que en BDD
    nous ne sauveagrdons que le nom du fichier
    le fichier en lui meme est sauvegardé sur notre serveur, comme tout fichier deja present
*/
$error = $target_file = $target_name = $mime_type = $oldName;
/*
    $target dir continet lke chemin vers le dossier ou l'on rangera nos fichiers
    Pour des raisons de securité, si ce sont des fichiers accessible par les utilisateurs(exemple photo de prfle)
    Il vaudra mieux ranger vos fichiers televerses dans un dossier "public" loin du fonctionnement de votre site.
    Le chemin de vos fichier etant visible.
*/
$target_dir = "./upload/";
// La liste des types mimes dont j'accepte l'upload
$typePermis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];
if($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["upload"]))
{
    /*
        Lors de l'upload d'un fichier, le seveur va sauvegarder le fichier dans un dossier temporaire,
        dossier dont il sera supprimé une fois l'execution du script terminé.
        On va donc verifier notre fichier, et si il correspond le deplacer ailleurs

        La premiere etape est de verifier si l'upload s'est bien passé.
        Pour cela on va utiliser la variable superglobal $_FILES

        Elle contiendra un tableau associatif au nom de l'attribut name de notre input:file (ici superFichier)
        qui contiendra mui meme un autre tableau associatif avec plusieurs nformations lies au fichier
    */
    // Dans "tmp_name" on va retrouver le chemin vers le fichier temporaire.
    echo'<pre>'.print_r($_FILES, 1).'</pre>';
    if(!is_uploaded_file($_FILES["superFichier"]["tmp_name"]))
        $error = "Veuillez selectionner un fichier";
    else
    {
        /*
            On trouvera le nom d'origine du fichier à la clef name.
            basename() va retourner le dernier composant d'un chemin.
        */
        $oldName = basename($_FILES["superFichier"]["name"]);
    }
}
$title = "Upload de fichier";
require ("../ressources/template/_header.php");

?>
<form action="" method="post" enctype="multipart/form-data">
    <label for="fichier">Choisir un fichier :</label>
    <input type="file" name="superFichier" id="fichier">

    <input type="submit" name="upload" value="Envoyer">
    <span class="error"><?php echo $error??"" ?></span>
</form>
<?php if(isset($_POST["upload"]) && empty($error)): ?>
    <p>
        Votre fichier a bien été téléversé sous le nom de "<?php echo $target_name ?>" <br>
        Vous pouvez le telecharger <br>

        <a href="<?php echo $target_file ?>"
           download="<?php echo $oldName ?>"
        >
        ici
    </a>
    </p>
<?php 
endif;
require ("../ressources/template/_footer.php"); ?>