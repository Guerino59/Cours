<?php
    $title = "MVC - Liste des messages";
    require __DIR__."/../../../ressources/template/_header.php";


if($messages):
    foreach($messages as $m):
?>
    <div class="message">
        <div class="date1"> 
            Ajouté le <?php echo $m["createdAt"] ?>
        </div>
        <div class="date2">
            <?php echo ($m["editedAt"]?"édité le : ".$m["editedAt"]: "") ?>
            </div>
        <p><?php echo $m["message"] ?></p>
        
            <?php if($logged): ?>
                <a href="/05-mvc/list/updateMessage?id=<?php echo $m["idMessage"]?>">éditer</a>
                <a href="/05-mvc/list/deleteMessage?id=<?php echo $m["idMessage"] ?>">supprimer</a>
            <?php endif; ?>
    </div>
    <?php 
    endforeach;
    else: 
    ?>
        <p>Cet utilisateur n'a aucun message</p>

<?php 
endif;
    require __DIR__."/../../../ressources/template/_footer.php";
?>