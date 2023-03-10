<?php

//fonction de verification du captcha coté serveur
function verifyReCaptcha($recaptchaCode)
{
    //on créer une requete pour "comparer" la clé publique et la clé privé
    $postdata = http_build_query(["secret" => "6Leq1GYkAAAAAB3ju1IsXAJS2x3_JeB_DLtzVaBI", "response" => $recaptchaCode]);
    $opts = [
        'http' =>
        [
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
        ]
    ];
    $context  = stream_context_create($opts);
    //on execute la requete
    $result = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
    //on récupere un résultat
    $check = json_decode($result);
    //on fourni ce résultat au reste du code
    return $check->success;
}

// gestion des données POST
$mail = $_POST['mail'] ?? null;
$reCaptchaCode = $_POST['g-recaptcha-response'] ?? null;

// 1 : mail est valide
if ((!is_null($mail) && filter_var($mail, FILTER_VALIDATE_EMAIL))
    //2 captcha est valide    
    && !is_null($reCaptchaCode) && verifyReCaptcha($reCaptchaCode) === true
) {
    echo "votre formulaire a bien été validé";
} else {
    echo "erreur lors l'envoi de votre formulaire";
}
