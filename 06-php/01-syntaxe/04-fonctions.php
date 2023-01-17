<?php
    echo "<h1> Declaration des fonctions </h1>";

    /*
        Pour declarer des fonctions en php on utilisera le mot clef "function"
        suivi du nom de la fonction qui suis les meme regles que les noms des variables
        Ensuite des parenthes qui vont accueilir les possibles arguments
        et enfin les accolades contenat le corps de la fonction
    */

    function salut()
    {
        echo "Salut tout le monde ! <br>";
    }
    /*
        Pour appeler une fonction on utilise son nom suivi de parenthese.
        Le code d'une fonction n'est executé qu'une fois qu'elle est appelé
    */
    salut();
    /*
        PHP déclare les fonctions avant de lire le code
        On peut donc appeler une fonction avant qu'elle soit declaré
    */
    salut1();
    function salut1()
    {
        echo "Salut les autres ! <br>";
    };

    /*
        Si une fonction est declaré dans un bloc ( un if par ewemple).
        elle n'est appeleable que apres avoir été declaré
    */
    if(true)
    {
        function salut2()
        {
            echo " Salut moi meme ! <br>";
        }
        salut2();
    }
    /*
        Appeler ce genre de fonction hors de son block peut poser probleme si elle se retrouve non declaré. (si la condition est false par exemple)
    */
    // salut2();
    if(true) salut2();

    /*
        Une fonction peut se contenter d'effectuer des actions.
        Mais peut aussi retourner des informations.
        On utilisera pour cela le mot clef "return" suivi ou non des informations à retourner
        le mot clef return met fin a la fonction, tout code qui suit ne sera pas effectué.
    */

    function aleaString()
    {
        $r = rand(0,100);
        // si $r est plus petit que 50 on ne retourne rrien
        if ($r<50)return;
        // sinon on retourne le nombre sous forme de string
        return(string)$r;
    }

    // On peut utiliser la valeur de retour, directement dans une autre fonction :
    echo aleaString(), "<br>";
    // Ou alors l'attribuer a une variable :
    $alea = aleaString();
    echo $alea, "<br>";

    #---------------------------------

    echo "<h2> ARGUMENTS </h2> <hr>";

    /*
        Entre les parentheses de la declaration de fonction,
        nous pouvons avoir entre 0 et l'infini arguments.
        Ces arguments sont séparé d'une virgule et nommé comme une variable

        Quand on appelle une fonction avec un argument, la valeur donnée est transmise à la variable
        declarée dans la fonction

    */
    function bonjour($nom)
    {
        echo "Bonjour $nom ! <br>";
    }
    bonjour("Maurice");

    // Si il manque des arguments, PHP lancera une fatal error.
    // bonjour()

    function bonjour1($n1, $n2)
    {
        echo "Bonjour $n1 et $n2 ! <br>";
    }
    bonjour1("Pierre", "Jacques");

    // il est possible d'avoir un nombre d'argument infini

    function bonjour2(...$noms)
    {
        // Dans ce cas la, tous les arguments sont place dans $noms sous forme de tableau
        foreach($noms as $n) echo " Salut $n ! <br>";
    }
    bonjour2("Pierre", "Jacques", "Camille", "Estelle");

    /*
        Il est possible de donner une valeur par defaut à un argument.
        Dans ce cas la, l'argument devient optionnel.
        Si l'argument est fourni, alors il l'utilisera
        Sinon il utilisera sa valeur par defaut
        Un argument est optionnel que si les arguments suivant sont disponible
    */
    function bonjour3($n1, $n2 ="personne d'autre")
    {
        echo "Bonjour $n1 et $n2 ! <br>";
    }
    bonjour3("Julie");
    bonjour3("Julie", "Mauricette");

    /*
        Quand on donne un argument aune fonction via une variable.
        Si l'argument est modifié cela ne modifie pas la variable.
    */

    function titre($nom)
    {
        $nom .= " le grand";
        return $nom;
    }
    $mau = "Maurice";
    $mau2 = titre($mau);
    // $mau n'a pas changé malgré que l'argument lui est modifié
    echo "$mau est devenu $mau2 ! <br>";

    /*
        Par contre, il est possible de passer des arguments par "reference"
        Cela signifie que les modifications qui auront lieu sur l'argument, auront lieu assi sur la varaible
        Ce n'est plus la valuer qui est transmise mais la position de la variable dans la memoire
    */

    function titre1(&$nom)
    {
        $nom .= " le petit !<br> ";
    }
    titre1($mau);
    echo "Voici $mau ";

    #--------------------------------------------
    echo "<h2> RECURCIVITE </h2> <hr>";

    /*
        Une fonction s'appelant elle meme, est dire recurcive.
        La premiere chose à faire lorsque l'on crée ce genre de fonction, c'est de pprevoir une condition de sortie,
        sous peine d'avoir une boucle infinie.
    */

    function decompte($n)
    {
        echo $n, "<br>"; // Action realisé par la fonction
        if($n<=0) return; // condition de sortie de la boucle
        decompte(--$n); // la recurcivité
    }
    decompte(5);

    #-------------------------------------------------

    echo "<h2> Typage et description </h2> <hr>";

    /*
        Sur les dernieres version de php, il est possible voir conseillé bien que non obligatoir
        de typer ses arguments et valuer de retour
        Ainsi que de decrire ses fonctions

        Faire ceci ne va fondamentalement changer le fonctionnement de votre code, mais facilier sa relecture, que ce soit par vous ou un collegue.
    */

    function presentation(string $nom, int $age, bool $travail):string
    {
        return "Je m'appelle $nom, j'ai $age ans. Je ".($travail?"travaille":"ne travaille pas"); 
    }

    echo presentation("Louis",25,true);

    #---------------------------------------------

    echo "<h2> Portée des variables et static </h2> <hr>";

    // Une variable déclaré hors du fonction, n'est pas accessible dans celle-ci

    $z = 5;
    function showz()
    {
        // Ici $z est inconnu
        // echo $z
        /*
            On peut recuperer une varaible global grace au mot clef "global"
            Mot clef que l'on fera suivre du nom des varaibles que l'on souhaite recuperer.
        */
        global $z;
        echo $z, "<br>";
    }
    showz();
    /*
        Dans un cas normal, une variable declaré dans une fonction, est detruite une fois la fonction terminée.
        Le mot clé "static" permet de sauvegarder et de ne pas la reinitialiser
    */

    function compte()
    {
        $a = 0;
        // $b est iitailisé seulement au prmier appel
        static $b = 0;
        echo "a : $a <br> b : $b <br>";
        $a++;
        $b++;
    }
    compte();
    compte();
    compte();

    #-------------------------------------------
    echo "<h2> Fonction anonyme, fleché, callback </h2> <hr>";

    /*
        Bien que plus rarement utilisé qu'en JS, il est possible d'utiliser des fonctions anonymes et fleches en php.

        Une fonctiona nonyme est une fonction qui ne porte pas de noms
        Elle sera rangé dans une variable ou utilisé en callback

        Un callback est une fonction appelé en argument d'une autre fonction

        Une fonction fleché est une fonction anonyme raccourci
    */

    function dump(array $arr, callable $func): void
    {
        foreach($arr as $a)
        {
            $func($a);
            echo "<br>";
        }
    }
    $a2 = ["sandwich", "ramen", "pizza"];
    /*
        Ici je donne un tableau à ma fonction suivi d'une fonction anonyme
        qui fera un echo.
    */
    dump($a2, function($x){echo $x;});
    // la meme fonction avec une fonction féchée
    dump($a2, fn($x)=> var_dump($x));
    $superFonction = function($x)
    {
        $x = strtoupper($x);
        print($x);
    };
    dump($a2, $superFonction);
?>
