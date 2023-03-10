
<?php
    require "../ressources/service/_pdo.php";
    $pdo = connexionPDO();

    // Je determine mon point de depart pour le LIMIT sql
    $page = $_GET['page'] ?? 1;

    $start = (($page - 1) * 4);

    $sql = $pdo->prepare("SELECT * FROM messages");
    $sql->execute();
    $mess = $sql->fetchAll();
    $messCount = $sql->rowCount();
    echo "<p> $messCount messages</p>";

    $sql = $pdo->prepare("SELECT * FROM messages LIMIT :lim, 4");
    $sql->execute(["lim"=>$start]);
    $pagination = $sql->fetchAll();

    

    //Je determine me nombres de page pour mon affichage

    $nbPages = ceil($messCount / 4);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        main, footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin: 20px;
        }
        section{
            display: flex;
            gap: 20px;
            border: 2px solid black;
            width: 60%;
            align-items: center;
            justify-content: center;
        }
        
    </style>
</head>
<body>
    <main>
        <section>
            <p>ID</p>
            <p>Message</p>
            <p>Date</p>
        </section>
        <?php
        foreach($pagination as $m)
        {
            echo 
            '<section>
                <p>'.$m['idMessage'].'</p>
                <p>'.$m['content'].'</p>
                <p>'.$m['createdAt'].'</p>    
            </section>';
             
        }
            // Affichage de la liste
        ?>
    </main>
    <footer>
        <section>
            <?php 
            if((int)$page === 1)
                echo "<p><a href=?page=1>Precedent</a></p>";
            else
            echo "<p><a href=?page=".$page - 1 .">Precedent</a></p>";
        ?>
        <?php
        // pagination
            for($i = 1; $i<=$nbPages; $i++)
            {
                echo "<p><a href=?page=".$i.">".$i."</a></p>";
            }
            
        ?>
        <?php 
            if((float)$page === $nbPages)
                echo "<p><a href=?page=$nbPages>Suivant</a></p>";
            else
            echo "<p><a href=?page=".$page + 1 .">Suivant</a></p>";
        ?>
        </section>
    </footer>
</body>
</html>