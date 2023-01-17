<?php
    echo "<h1> WHILE </h1>";
    $x = 0;
    // Tant que la condition entre parenthes est "true", l'action entre accolade sera repetée
    while($x<5)
    {
        echo $x, "<br>";
        $x++;
    }
    // Syntaxe sans accolade :
    while($x<10):
        echo $x, "<br>";
        $x++;
    endwhile;
    // Syntaxe sur une seule ligne
    while($x<15)
        echo $x++,"<br>";

    echo "<h2> DO WHILE </h2> <hr>";
    // Ici l'instruction sera realisé au moins une fois, puis il veriiera apres si il doit le repeter
    do{
        echo $x, "<br>";
        $x++;
    }while($x<5);
    // syntaxe sur une seule ligne : 
    do
    echo $x++, "<br>";
    while($x<5);

    echo "<h2> FOR </h2> <hr>";
    /*
        La boucle for est particulierement adapté aux boucles numerique.
        elle est structuré ainsi :
            for(expr1;expr2;expr3){instruction à repeter}

        expr 1 sera evalué avant de commencer la boucle
        expr 2 sera evalué au debut de chque iteration et decidera si la booucle doit continuer ou non.
        expr3 sera evalué à la fin de chaque iteration.
    */
    for($y=0; $y < 5; $y++)
    {
        echo $y, "<br>";
    }
    // sructure en ":" et end
    for($y=0; $y < 5; $y++):
        echo $y, "<br>";
    endfor;
    // structure sur une seule ligne
    for($y=0; $y < 5; $y++)
        echo $y, "<br>";

    echo "<h2> FOREACH</h2> <hr>";
    $a = ["spaghetti", "thon", "mayo", "oignon"];
    /*
        foreach est specialement adapté au tableau.
        Il fera une iteration pour chaque element du tableau
        plaçant cet element dans une variable

        On utilisera le mot clef as pour indiquer quelle sera la variable qui accueillera
        les element du tableau
    */
    foreach($a as $food)
    {
        echo $food, "<br>";
    }
    /*
        En precisant deux variables sépares de "=>" apres le as, on recupere la clef en plus de la valeur.
        Cela peut etre particulierement utile sur un tableau associatif
    */
    foreach($a as $key => $value)
    {
        echo $key. " : " . $value . " <br>";
    }
    // structure avec ":" et "end"
    foreach($a as $v):
        echo $v, "<br>";
    endforeach;

    echo "<h2> CONTINUE ET BREAK </h2> <hr>";

    /*
        Les mots clefs continue et break fonctionnent sur n'importe quel type de boucle.
        Continue met fin à l'iteration actuel et passe a la suivante.
        Break met fin a la boucle
    */
    foreach($a as $food)
    {
        if($food === "spaghetti") continue;
        if($food === "mayo") break;
        echo $food, "<br>";
    }
?>