<!-- Tout le code php se trouve entre les balises "<?php ?>" -->
<?php
    // PHP signifie "PHP Hypertext Preprocessor"
    // Originellement appellé "Personal Home Page"
    # Les commentaires PHP peuvent s'ecire avec // ou # pour une seule ligne ou /* Ou cela pour du multiligne */
    // Chaque instruction php se termine par ";"

    // Le code PHP ne s'affiche pas sur notre navigateur
    // Pour afficher des informations via php, on utilisera une des fonctions suivantes :

    /*
        echo est la fonction d'affichage la plus utilisé; et elle a  la particularité de ne pas avoir besoin de parenthese
    */
    echo "Coucou", "Salut";

    /*
        Print fonctionne comme echo mais legerement plus lente et retourne une valeur de 1

           * Peu importe la fonction utilisé, une fois la valuer affiché, elle est traité comme du HTML classique
    */
    print "<br> PHP !";

    /*
        var_dump(); sera votre meilleur ami, il affichera des informations supplementaires sur  les valeurs qui lui sont données.
        Tres utile pour le debug
    */
    var_dump("Bonjour", "Le monde !");

    /*
        var_export(); affichera le contenu de ceux qui lui a été donné, en tant que php utilisable
    */
    var_export("bidule");

    # fonctions utile pour le developpement
    // phpinfo() affiche tout les parametres du serveur
    // phpinfo();
    // getenv() permet de recuperer des variables d'environment du serveur
    echo getenv("SERVER_PORT");

    #-----------------------------------------------------------

    echo "<h1> Decalaration des variables </h1><hr>";
    /*
        On declare une variable php avec un $ puis une letrre ou un _ 
        Puis ensuite les chiffres sont aussi acceptés.

        Tenter d'appeler une variable avant sa declaration provoque une erreur.
    */
    // echo $banane;
    $banane;
    $banane = "jaune";
    echo "banane: ", $banane, "<br>";
    /*
        PHP gere aussi les constantes, elles sont déclarées differement avant ou apres la 8.0

        Ancienne version :
    */
    define("AVOCAT", "vert");
    echo "avocat: ", AVOCAT, "<br>";

    # Nouvelle version
    const TOMATE = "rouge";
    echo "tomate: ", TOMATE, "<br>";

    //  get_defined_constants() permet de recuperer un tableau des deifferentes constantes definis. certaine sont presentes par defaut
    //  get_defined_vars() permet de recuperer un tableau des deifferentes varaibles definis. certaine sont presentes par defaut
    var_dump(get_defined_vars());
    echo "<br>";
    // variables dynamaiques.
    $chaussette = "rouge";
    $$chaussette = "bleue";
    /*
        Le nom de mes variables sont créés dependement de la valeur de la variable precedente.
    */
    echo $chaussette, $rouge, "<br>";

    // on utilisera unset() pour supprimer une varaible;
    unset($banane);
    var_dump(get_defined_vars(), "<br>");

    #------------------------------------------------------------------------------------

    echo "<h1> Types des variables </h1><hr>";

    $num = 5;
    $dec = 0.5;
    $str = "coucou";
    $arr = [];
    $boo = true;
    $nul = NULL;
    $obj = (object)[];

    // integer Nombre entier
    echo gettype($num), "<br>";
    // double est un nombre à virgule
    echo gettype($dec), "<br>";
    // string est une chaine de caractere
    echo gettype($str), "<br>";
    // array est un tableau.
    echo gettype($arr), "<br>";
    // boolean qui accepte uniquement true or false;
    echo gettype($boo), "<br>";
    // NULL qui n'a aucune valeur
    echo gettype($nul), "<br>";
    // object pour la POO;
    echo gettype($obj), "<br>";

    #------------------------------------------------------------------------------------

    echo "<h1> String </h1><hr>";

    // Les strinfs ce sont des chaines de caractère entre guillemet ou apostrophe.
    echo "bonjour", ' coucou', "<br>";

    // En php on peut faire des sauts de lignes dans les strings mais ils ne sont pas pris en compte à l'affichage.
    echo "Ceci est un message
            sur plusieurs lignes <br>";

    // Les backticks ne sont pas utilisé pour les strings en php.$
    $nom = "Maurice";
    $age = 54;

    // L'interpollation ne fonctionne qu'entre guillemet,et utiliser le nom de la variable suffit :
    echo "$nom a $age ans. <br>";
    echo '$nom a $age ans. <br>';

    // Pour concatener deux strings on utilisera le caractère "."
    echo $nom . " a " . $age . " ans <br>";
    $nom .= " Dupont";
    echo $nom, "<br>";

    // Quelque petites fonctions plus ou moins utiles

    # Donne la longueur du string
    echo strlen($nom), "<br>";
    # Donne le nombre de mot
    echo str_word_count($nom), "<br>";
    # Inverse le string
    echo strrev($nom), "<br>";
    # Recherche le string en second parametre dans celui en premier prametre et retourne le premier string à partir du moment ou la recherche à été trouvé 
    echo strchr($nom, "i"), "<br>";
    # Pareil mais retourne la position des caracteres
    echo strpos($nom, "i"), "<br>";
    # On peut afficher un caractere donnée en indiquant sa position : 
    echo $nom[4], "<br>";
    # On peut modifier un string en indiquant la position que l'on souhaite modifier.
    $nom[8] = "L";
    echo $nom, "<br>";
    # Remplace le premier string par le second, dans le troisieme.
    echo str_replace("ce", "cette", $nom), "<br>";

    #------------------------------------------------------------------------------------

    echo "<h1> Nombres </h1><hr>";
    // On peut indiquer avec un prefixe quelle est la base de mon chiffre.

    # 0b pour base 2 (binaire)
    $bin = 0b10000;
    echo "\$bin = $bin <br>";
    # 0 pour base 8 (octale)
    $oct = 020;
    echo "\$oct = $oct <br>";
    # aucun pour la base 10 (decimale)
    $dec = 16;
    echo "\$dec = $dec <br>";
    # 0x pour hexadecimal (base 16)
    $hex = 0x10;
    echo "\$hex = $hex <br>";

    // Les nombres sont soit des INTEGER soit des FLOATS, des nombre decimaux.
    var_dump("3.14 is int?", is_int(3.14));
    echo "<br>";
    var_dump("3.14 is float?", is_float(3.14));

    // is_int er is_float retourne un boolean indiquant si le nombre en parametre est un integer ou un float.
    echo "<br>", PHP_INT_MAX, "<br>", PHP_INT_MIN,"<br>";
    echo "<br>", PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN,"<br>";

    // Les constantes precedentes indiquent les plus petits et plus grand nombre possibles.
    // is_numeric verifie si le parametre peut etre un nombre
    var_dump(is_numeric("lol"), is_numeric("098.76"));

    // Mettre int entre parenthese avant une valeur permet de la transformer en INTEGER(Marche aussi avec le float).
    echo "<br>", (int)"42chaussettes", "<br>", (int)3.14;

    // On va evidemment retrouver les operations mathematiques classiques.
    echo "1+1=", 1+1, "<br>";
    echo "1-1=", 1-1, "<br>";
    echo "2*2=", 2*2, "<br>";
    echo "8/2=", 8/2, "<br>";
    // modulo :
    echo "11%3=", 11%3, "<br>";
    // Puissances :
    echo "2**4=", 2**4, "<br>";
    // Les operateurs d'assignements sont aussi disponible.

    $x =5;
    $x +=2;
    $x -=3;
    $x *=4;
    $x /=2;
    $x %=3;
    $x **=5;
    echo $x, "<br>";

    // L'incrementation et la decrementation font leur retour :

    echo $x++, "-->", $x, "<br>";
    echo ++$x, "-->", $x, "<br>";
    echo $x--, "-->", $x, "<br>";
    echo --$x, "-->", $x, "<br>";
    #------------------------------------------------------------------------------------

    echo "<h1> Tableaux </h1><hr>";

    // Version d'origine de la creation de tableau :
    $a = array("banane", "pizza", "avocat");
    // Version moderne :
    $b = ["banane", "pizza", "avocat"];
    // echo n'accepte pas les tableaux, il faut donc utiliser var_dump
    var_dump($a, $b);
    // Une jolie façon d'afficher les tableaux
    echo "<pre>".print_r($b, 1)."</pre>";
    
    echo "j'aime la $a[0], la $a[1], et l'$a[2].<br>";
    // Pour connaitre la taille d'un tableau.
    echo count($a), "<br>";
    // Pour ajouter un element à mon tableau :
    $b[] = "fraise";
    echo'<pre>'.print_r($b, 1).'</pre>, <br>';
    /*
        en PHP il existe des tableaux associatif (associative array).
        Leur principe est de remplacer les index "numerique" par des clefs nominative (string);
    */
    $person = ["prenom"=>"Maurice", "age"=>42];
    // Pour afficher les donnes on utilisera des clefs nominatives :
    echo $person["prenom"]. " a ". $person["age"]. " ans. <br>";
    // Les tableaux peuvent etre multidimensionel :
    $person["loisir"] = ["petanque", "bowling"];
    // echo'<pre>'.print_r($person, 1).'</pre>';
    // Pour afficher ces donnes je vais placer les crochets cotes a cotes
    echo $person["loisir"][1], "<br>";
    // Une donnee du tableau se supprime comme une variable avec unset 
    unset($person["age"]);
    // Cette façon de faire ne pose aucun probleme avec un tableau associatif, mais peut poser probleme avec un tableau classique
    unset($b[1]);
    echo'<pre>'.print_r($b, 1).'</pre>';
    // Pour corriger cela on peut utiliser : 
    $b = array_values($b);
    // Cette fonction retourne un tableau contenant toutes les valeurs du tableau donné en aragument
    //On peut aussi eviter le probleme en remplacant unset par array_splice
    array_splice($b, 1, 1);
    /*
        array_splice prend un tableau en premier argument
        en second l'index depuis lequel on doit couper le tableau.
        en troisieme, combien d'element on souhaite couper
    */
    echo'<pre>'.print_r($b, 1).'</pre>';
    // On peut aussi utiliser cette fonction pour remplacer.
    array_splice($a, 1, 1, ['brocoli', 'pamplemousse']);
    echo'<pre>'.print_r($a, 1).'</pre>';

    // On pourra fusionner des tableaux avec :
    $ab = array_merge($a, $b);
    echo'<pre>'.print_r($ab, 1).'</pre>';

    // On pourra trier nos tableau avec la fonction sort()
    sort($ab);
    echo'<pre>'.print_r($ab, 1).'</pre>';
    /*
        rsor() tri par ordre decroissant.

        Puis specifique aux tableaux associatif on a :
            asort() tri par ordre croissant des valueurs
            ksort() tri par ordre croissant des clefs
            arsort() tri par ordre decroissant des valeurs
            krsort() tri par ordre decroissant des clefs
    */
    #------------------------------------------------------------------------------------
    
    echo "<h1> Boolean </h1><hr>";

    // Les booleans prennent une valeur true or false

    $t = true;
    $f = false;
    var_dump($t, $f);
    echo "<br> 5<3";
    var_dump(5<3);
    echo "<br> 5<=3";
    var_dump(5<=3);
    echo "<br> 5>3";
    var_dump(5>3);
    echo "<br> 5>=3";
    var_dump(5>=3);
    echo "<br> 5=='5'";
    var_dump(5=='5');
    echo "<br> 5==='5'";
    var_dump(5==='5');
    echo "<br> 5!='5'";
    var_dump(5!='5');
    echo "<br> 5<>'5'";
    var_dump(5<>'5');
    echo "<br> 5!=='5'";
    var_dump(5!=='5');

    // On peut aussi combiner les bolleans :

    echo "<br> true and false : ";
    var_dump($t and $f);
    echo "<br> true && true : ";
    var_dump($t && $t);
    echo "<br> true or false : ";
    var_dump($t or $f);
    echo "<br> false || false : ";
    var_dump($t || $f);
    // La porte logique xor retourne true seulement si un des deux cotes est true;
    echo "<br> false xor true : ";
    var_dump($f xor $t);
    // Si les deux cotes ont la meme valeur, elle retounre false
    echo "<br> true xor true : ";
    var_dump($t xor $t);
    // On peut inverser le resultat avec "!"
    echo "<br> !true and false : ";
    var_dump(!($t and $f));

    //Dans les cas uisvants, $machin n'existe pas, mais PHP n'ira meme pas lire cette partie du code, car la porte logique ne l'y oblige pas.
    echo "<br>";
    var_dump(true or $machin);
    echo "<br>";
    var_dump(false and $machin);
    #------------------------------------------------------------------------------------

    echo "<h1> Les variables SUPERGLOBALS </h1><hr>";
    /*
            Les variables superglobals sont des varaiables defini par php et accessible partout dans votre code.

            * $GLOBALS contient toute les variables globales definie par php ou par vous
    */
    // var_dump($GLOBALS);
    // $_SERVER contine les informùations lies au serveur ou la requete.
    // echo'<pre>'.print_r($_SERVER, 1).'</pre>';

    // $_REQUEST contient les meme informations que $_GET, $_POST et $ _COOKIE
    echo'<pre>'.print_r($_REQUEST, 1).'</pre>';
    // $_POST contient toutes les informations envoyer en methode POST lors de la requete.
    echo'<pre>'.print_r($_POST, 1).'</pre>';
    // $_GET contient toute les informations envoyer en methode GET lors de la requete
    echo'<pre>'.print_r($_GET, 1).'</pre>';
    // $_FILES contient les informations liés aux fichiers envoyer en POST (upload).
    echo'<pre>'.print_r($_FILES, 1).'</pre>';
    // $_ENV contient les variables d'environment
    echo'<pre>'.print_r($_ENV, 1).'</pre>';
    // $_COOKIE contient les cookies.
    echo'<pre>'.print_r($_COOKIE, 1).'</pre>';
    // $_SESSION contient les informations stockes en session ( mais n'esxiste qu'une fois la session lancé.)
    // echo'<pre>'.print_r($_SESSION, 1).'</pre>';
?>