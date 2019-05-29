<!--- Hand coded by Hugo Nicaise with ♥ --->
<!DOCTYPE html>
<html>
    <head>
        <script src="js/pace.min.js"></script>
        <title><?php echo before; ?> — Front-End Engineering, Digital Creation and Webiste Development</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/vue.min.js"></script>
        <link rel="icon" type="image/png" href="img/fav.png" />
    </head>
    <body>
        <section class="container_logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 615 615">
                <title>Logo Hugo Nicaise</title><g id="Logo" data-name="Logo">
                <g id="Calque_1-2" data-name="Calque 1"><rect x="410" y="410" width="205" height="205"
                    id="pink"  style="fill:white;shape-rendering:crispEdges;" />
                    <polygon id="red" style="fill:white;shape-rendering:crispEdges;" points="615 205 615 410 410 410 615 205"></polygon>
                    <polygon id="blue" style="fill:white;shape-rendering:crispEdges;" points="410 0 615 0 615 205 410 0"></polygon>
                    <polygon id="green" style="fill:white;shape-rendering:crispEdges;" points="410 410 205 410 205 205 410 410"></polygon>
                    <polygon id="orange" style="fill:white;shape-rendering:crispEdges;" points="205 205 0 205 0 0 205 205"></polygon>
                    <polygon id="purple" style="fill:white;shape-rendering:crispEdges;" points="0 410 0 205 205 205 0 410"></polygon>
                    <polygon id="yellow" style="fill:white;shape-rendering:crispEdges;" points="0 615 0 410 205 410 0 615"></polygon>
                </g>
            </svg>
        </section>
        <section class="container_navigation">
            <p class="big-text rellax" data-rellax-speed="-3"><?php echo before; ?></p>
            <a href="index.php"><img src="img/logo_white.svg" alt="Hugo Nicaise logo" /></a>
            <nav>
                <a class="<?php if($page=='home'){echo 'active';} ?>" href="index.php">home</a>
                <br>
                <a class="<?php if($page=='projects'){echo 'active';} ?>" href="projects.php">projects</a>
                <br>
                <a class="<?php if($page=='contact'){echo 'active';} ?>" href="contact.php">contact</a>
            </nav>
        </section>
        <div class="clock">
            <p class="time"></p>
            <p class="caption">HUGOフロントエンドエンジニア</p>
        </div>