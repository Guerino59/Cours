<?php
    require "./routes.php";
    require "./classes/Autoloader.php";
    require "./classes/Router.php";

    AutoLoader::register();
    Router::routing();
?>