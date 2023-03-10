<?php
    require_once __DIR__."/../../../../ressources/service/_pdo.php";
    $pdo = connexionPDO();
    function getAllUsers()
    {
        global $pdo;
        $sql = $pdo->query("SELECT idUser, username FROM users");
        return $sql->fetchAll();
    }

    function getOneUserByEmail(string $email): array|false
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT * FROM users WHERE email = :em");
        $sql-> execute(["em"=>$email]);
        return $sql->fetch();
    }

    function getOneUserById(int $id): array|false
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT * FROM users WHERE idUser = ?");
        $sql-> execute([$id]);
        return $sql->fetch();
    }

    function addUser(string $us, string $em, string $pass): array
    {
        global $pdo;
        $sql = $pdo->prepare("INSERT INTO users(username, email, password) VALUE(?,?,?)");
        $sql-> execute([$us, $em, $pass]);  

        $id = $pdo->lastInsertId();
        return getOneUserById($id);
    }

    function deleteUserById(int $id): void
    {
        global $pdo;
        $sql = $pdo->prepare("DELETE FROM users WHERE idUser=?");
        $sql-> execute([$id]);
    }

    function updateUserById(string $username, string $email, string $password, int $id):array
    {
        global $pdo;
        $sql = $pdo->prepare("UPDATE users SET username =:us, email =:em, password = :mdp WHERE idUser=:id");
        $sql-> execute(["id"=>$id, "em"=>$email, "mdp"=>$password, "us"=>$username]);
        return getOneUserById($id);
    }

    
?>