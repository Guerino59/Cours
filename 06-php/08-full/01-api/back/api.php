<?php
// Quelle adresse peut envoyer des requetes à notre serveur. (* pour toute adresse)
    header("Access-Control-AlloW-Origin: http://spa.localhost");
// Format des donées échangées.
    header("Content-Type: application/json; charset=UTF-8");
// Durée de vie de la requete (facultatif)
    header("Access-Control-Max-Age: 3600");
// On indique la possibilité d'echanger des identifiants.
    header("Access-Control-Allow-Credentials: true");
// Indique les entetes autorisées.
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Request-With");

    /**
     * Change le status de la requete et affiche sous format JSON les donées passées en parametre.
     * 
     * @param array $data
     * @param integer $status
     * @param string $message
     * @return void
     */

    function sendResponse(array $data, int $status, string $message): void
    {
        http_response_code($status);
        echo json_encode([
            "data"=>$data,
            "status"=>$status,
            "message"=>$message
        ]);
        exit;
    }

    /**
     * Sauveagrde des messages d'erreurs si les parametres sont fournis
     * Et retourne le total des erreurs si les parametres sont laissés vide.
     * 
     * @param string|boolean $property
     * @param string|boolean $message
     * @return void|array
     */

    function setError($property = false, $message = false)
    {
        static $error = [];
        if(!$property && !$message) return 
        ["violations"=>$error];
        $error[] = [
            "propertyPath"=>$property,
            "message"=>$message
        ];
    }
?>