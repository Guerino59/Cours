<?php

header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

session_start();
require __DIR__."/../model/userModel.php";
require __DIR__."/../../../../ressources/service/_csrf.php";


switch($_SERVER["REQUEST_METHOD"])
{
    case "POST"; connect(); break;
}









function connect():void
{

    $json = file_get_contents("php://input");
    $data = json_decode($json);
    $email = $password = "";
    $error = setError();

    if($data || isset($data->userForm)){
        if(empty($_POST["email"])){
            setError("email", "Veuillez entrer un email.");
        }else{
            $email = trim($_POST["email"]);
        }
        if(empty($_POST["password"])){
            setError("password", "Veuillez entrer un mot de passe.");
        }else{
            $password = trim($_POST["password"]);
        }
        if(empty($error)){
           $user = getOneUserByEmail($email);
            if($user){
                if(password_verify($password, $user["password"])){
                    $_SESSION["logged"] = true; 
                    $_SESSION["username"] = $user["username"];
                    $_SESSION["idUser"] = $user["idUser"];
                    $_SESSION["expire"] = time()+ (60*60);
                    exit;
                }
                else{
                    setError("password", "Votre mdp ou email est incorrect (pass)");
                }
            }
            else{
                setError("email", "Votre mdp ou email est incorrect (email)");
            }
        }
        $error = setError();
        if(empty($error["violations"]))
        {
            sendResponse($user, 200, "Vous êtes desormais connecté");
        }
    }
    sendResponse($error, 400, "Formulaire incorrect");
}
?>