<?php
    require_once __DIR__."/../../ressources/service/_pdo.php";

    function showMessageByUser(int $id)
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM messages WHERE idUser =:idU ORDER BY createdAt DESC");
        $sql->execute(["idU"=>$id]);
        return $sql->fetchAll();
    }
    function showMessageByIdMessage(int $id)
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM messages WHERE idMessage =:idM");
        $sql->execute(["idM"=>$id]);
        return $sql->fetch();
    }
    function deleteMessageById($idMessage) :void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("DELETE FROM messages WHERE idMessage =?");
        $sql->execute([$idMessage]);
    }
    function updateMessageWithoutCat(string $message, int $idMessage)
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("UPDATE messages SET message = ?, editedAt = current_timestamp(), idCat = NULL WHERE idMessage = ?");
        $sql->execute([$message, $idMessage]);
    }
    function updateMessageWithCat(string $message, int $idCat, int $idMessage)
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("UPDATE messages SET message = ?, editedAt = current_timestamp(), idCat = ? WHERE idMessage = ?");
        $sql->execute([$message,$idCat, $idMessage]);
    }
    function showCat(): array|false
    {
        $pdo = connexionPDO();
        $sql = $pdo->query("SELECT * FROM categories ORDER BY nom ASC");
        return $sql->fetchAll();
    }
    function createMessageWithCat(string $message, int $idUser, int $idCat):void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("INSERT INTO messages(message, idUser, idCat) VALUES (?, ?, ?)");
        $sql->execute([$message, $idUser, $idCat]);
    }
    function createMessageWithoutCat(string $message, int $idUser):void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("INSERT INTO messages(message, idUser) VALUES (?, ?)");
        $sql->execute([$message, $idUser]);
    }
?>