<?php
    /*
        Include et require permettent d'inclure d'autre fichiers dans notre code.

        Nous avons créé plusieurs fichier commencant par un "_"
        C'est juste une convention de nommage pour indiquer que ce sont des fichiers à inclure, ils doivent pas etre ouver seul

        require et include peuvent ou non prendre des parentheses.
    */
    $title = "Include et Require";
    $mainClass = "includeNav";
    /*
        Les variables declaré avant un include sont utilisable dans le fichier inclu.
    */
    require "../ressources/template/_header.php";
    /*
        Principale difference entre required et include : 
            require en cas d'erreur provoque une fatal error et met fin à votre code
            include provoque un warning et continue votre code.
    */
    include "../ressources/template/_nav.php";
?>
<div>
    <p id="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque amet magni quo totam nobis perspiciatis? Blanditiis ad cumque repudiandae consequuntur incidunt molestiae, at exercitationem iure saepe placeat magnam id fugit.</p>
    <p id="para2">Modi nemo maiores rerum, eveniet, nisi quas nam obcaecati molestias similique reiciendis itaque suscipit excepturi facilis quos unde omnis odit. Expedita amet esse suscipit cum sunt aliquid provident tempore molestias!</p>
    <p id="para3">Odit minus mollitia, adipisci delectus quod consectetur animi cum repellat tempora in expedita dolorem obcaecati earum fuga illum quae facere illo. Nam harum quis a provident aperiam optio. Cum, qui.</p>
    <p id="para4">Nesciunt velit assumenda nobis numquam optio expedita! Velit quisquam quo consequatur non ullam ipsum, facilis cumque vel, placeat voluptas laboriosam sapiente aut. Corporis veritatis ea neque eveniet? Fugiat, aspernatur totam?</p>
    <p id="para5">Iure nobis temporibus voluptas suscipit ex maiores corporis, veniam asperiores magni omnis quo, necessitatibus rerum neque cupiditate repellat voluptates, assumenda iusto nemo labore minima? Repellendus consectetur ea tenetur sunt autem.</p>
</div>
<?php
    /*
        Dans le cas d'une applications complexe avec plusieurs inclusions.
        Les chemins relatifs peuvent ne plus etre bons.
        Pour eviter cela on peut utiliser la constante "__DIR__"
        Cette constante donne le chemin absolu du fichier dans lequel elle est appelé
        (elle ne termine pas par un / donc pensez a commencer votre chemin par un /)
    */
    require __DIR__."/../ressources/template/_footer.php";
    /*
            Include_once et require_once sont un peu plus lent car il verifient avant d'inclure si l'element n'a pas deja été inclu.
    */
    require_once "../ressources/template/_footer.php";
?>