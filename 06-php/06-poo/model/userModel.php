<?php
    namespace Model;
    use Classes\AbstractModel;
    class UserModel extends AbstractModel
    {
        function getAllUsers(): array|false
        {
            $sql = $this->pdo->query("SELECT idUser, username FROM users");
            return $sql->fetchAll();
        }
        function getOneUserByEmail(string $email): array|false
        {
            $sql = $this->pdo->prepare("SELECT * FROM users WHERE email = :em");
            $sql-> execute(["em"=>$email]);
            return $sql->fetch();
        }
    
        function getOneUserById(int $id): array|false
        {  
            $sql = $this->pdo->prepare("SELECT * FROM users WHERE idUser = ?");
            $sql-> execute([$id]);
            return $sql->fetch();
        }
    
        function addUser(string $us, string $em, string $pass): void
        {
            $sql = $this->pdo->prepare("INSERT INTO users(username, email, password) VALUE(?,?,?)");
            $sql-> execute([$us, $em, $pass]);  
        }
    
        function deleteUserById(int $id): void
        {
            $sql = $this->pdo->prepare("DELETE FROM users WHERE idUser=?");
            $sql-> execute([$id]);
        }
    
        function updateUserById(string $username, string $email, string $password, int $id):void
        {
            $sql = $this->pdo->prepare("UPDATE users SET (username =:us, email =:em, password = :mdp) WHERE idUSer:id");
            $sql-> execute(["id"=>$id, "em"=>$email, "mdp"=>$password, "us"=>$username]);
        }
    }
?>