
<?php
$title = "Creation message";
require __DIR__."/../../../ressources/template/_header.php";

?>

<form action="" method="post">
    <textarea name="message" placeholder="Creation du message" cols="30" rows="10"
    ></textarea>
    <span class="error"><?php echo $error["message"]??"" ?></span>
    <br>
    <div>
        <select name="categorie">
            <option value="">Selection de Catégorie</option>
           
            <?php foreach($categories as $cat): ?>
                <option value="<?php echo $cat["idCat"] ?>"
                >
                    <?php echo $cat["nom"] ?>
                </option>
            <?php endforeach; ?>
        </select>
    </div>
    <input type="submit" value="AddMessage" name="CreateMessage">
</form>
<?php 
require __DIR__."/../../../ressources/template/_footer.php"; ?>