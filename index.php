<?php include ('header.php'); ?>
    <audio id="player" src="sound/tick.mp3" loop="true"></audio>
    <div class="close">
        <p>x</p>
    </div>
    <img src="img/off.svg" class="sound" />
    <section class="row video" id="app">
        <div>
            <article v-for="project in projects" class="project hidden" :class="project.class">
                <h3 class="left project-caption">{{ project.date }}</h3>
                <h2 class="project-caption"><span>{{ project.id }}</span>{{ project.name }}</h2>
                <video autoplay="true" loop="true" :src="project.video" preload="auto" muted="true"></video>
                <h3 class="right project-caption">{{ project.role }}</h3>
            </article>
        </div>
    </section>
    <div class="details d0 hidden">
        <?php include('projects/flight.php'); ?>
    </div>
    <div class="details d1 hidden">
        <?php include('projects/cybernative.php'); ?>
    </div>
    <div class="details d2 hidden">
        <?php include('projects/nailed.php'); ?>
    </div>
    <div class="details d3 hidden">
        <?php include('projects/from2060.php'); ?>
    </div>
    <div class="details d4 hidden">
        <?php include('projects/last-trip.php'); ?>
    </div>
    <script src="js/project.app.js"></script>
<?php include 'footer.php' ?>