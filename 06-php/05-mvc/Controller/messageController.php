<?php

    require __DIR__."/../../ressources/service/_shouldBeLogged.php";
    require __DIR__."/../Model/messageModel.php";
    require __DIR__."/../../ressources/service/_csrf.php";
    /*
        Gere la vue des messages de chque utilisateurs
    */
    function seeMessage(): void
    {
        if(empty($_GET["id"])){
            header("Location: /05-mvc");
            exit;
        }
        
        $messages = $flash = $user = $logged = "";

        $messages = showMessageByUser($_GET["id"]);

        if(isset($_SESSION["flash"])){
            $flash = $_SESSION["flash"];
            unset($_SESSION["flash"]);
        }
        $logged = isset($_SESSION["idUser"]) && $_GET["id"]==$_SESSION["idUser"];

        require __DIR__."/../View/message/listmessage.php";
    }

    function updateMessage(): void
    {
        shouldBeLogged(true, "05-mvc/connexion");
        $message = showMessageByIdMessage($_GET["id"]);
        if(!$message || $message["idUser"] != $_SESSION["idUser"])
        {
            header("Location: /05-mvc");
            exit;
        }
        
        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['updateMessage']))
        {
            if(empty($_POST["message"]))
            {
                $error["message"] = "Veuillez entrer un message";
            }
            else
            {
                $m = cleanData($_POST["message"]);
            }
            if(empty($error))
            {
                if(empty($_POST["categorie"]))
                {
                   updateMessageWithoutCat($m, $message["idMessage"]);
                }
                else
                {
                   updateMessageWithCat($m, $_POST["categorie"], $message["idMessage"]);
                }

                $_SESSION["flash"] = "Message édité !";
                header("Location: /05-mvc/list?id=".$_SESSION["idUser"]);
                exit;
            }
        }
        $categories = showCat();
        require __DIR__."/../View/message/updateMessage.php";
    }
    
    function deleteMessage(): void
    {
        shouldBeLogged(true, "05-mvc/connexion");
        if(empty($_GET["id"]))
        {
            header("Location: /05-mvc/list?id=".$_SESSION["idUser"]);
            exit;
        }
        $message = showMessageByIdMessage($_GET["id"]);
        if(!$message || $message["idUser"] != $_SESSION["idUser"])
        {
            header("Location: /05-mvc");
            exit;
        }
        deleteMessageById($_GET["id"]);

        header("refresh: 5; url = /05-mvc/list?id=".$_SESSION['idUser']);

        require __DIR__."/../View/message/deleteMessage.php";
    }
    function createMessage(): void
    {
        shouldBeLogged(true, "05-mvc/connexion");
        $error = [];
        $message = "";
        if($_SERVER['REQUEST_METHOD']=='POST'&& isset($_POST["createMessage"]))
        {
            if(empty($_POST["message"]))
                $error["message"] = "Veuillez entrer un message";
            else
            {
                $message = cleanData($_POST["message"]);
               
                if(empty($_POST["categorie"]))
                {
                    createMessageWithoutCat($message, $_SESSION["idUser"]);
                }
                else
                {
                    createMessageWithCat($message, $_SESSION["idUser"], $_POST["categorie"]);
                }
                
            } 
        }
        $categories = showCat();
        require __DIR__."/../View/message/createMessage.php";
    }
?>