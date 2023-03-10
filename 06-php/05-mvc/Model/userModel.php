<?php
    require_once __DIR__."/../../ressources/service/_pdo.php";

    function getAllUsers()
    {
        $pdo = connexionPDO();
        $sql = $pdo->query("SELECT idUser, username FROM users");
        return $sql->fetchAll();
    }

    function getOneUserByEmail(string $email): array|false
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM users WHERE email = :em");
        $sql-> execute(["em"=>$email]);
        return $sql->fetch();
    }

    function getOneUserById(int $id): array|false
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM users WHERE idUser = ?");
        $sql-> execute([$id]);
        return $sql->fetch();
    }

    function addUser(string $us, string $em, string $pass): void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("INSERT INTO users(username, email, password) VALUE(?,?,?)");
        $sql-> execute([$us, $em, $pass]);  
    }

    function deleteUserById(int $id): void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("DELETE FROM users WHERE idUser=?");
        $sql-> execute([$id]);
    }

    function updateUserById(string $username, string $email, string $password, int $id):void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("UPDATE users SET (username =:us, email =:em, password = :mdp) WHERE idUser:id");
        $sql-> execute(["id"=>$id, "em"=>$email, "mdp"=>$password, "us"=>$username]);
    }

    
?>