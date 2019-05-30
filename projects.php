<?php $page = 'projects'; define('before','Projects'); include ('nav.php'); ?>

<section class="container_page">
    <h1>My latest projects designed in various contexts with the same passion.</h1>
    <div class="row projects" id="app">
        <article v-for="project in projects" class="project hidden" :class="project.class">
            <h3 class="left project-caption">{{ project.date }}</h3>
            <h2 class="project-caption"><span>{{ project.id }}</span>{{ project.name }}</h2>
            <a class="pro" :href="project.link">
                <video autoplay="true" loop="true" :src="project.video" preload="auto" muted="true"></video>
            </a>
            <h3 class="right project-caption">{{ project.role }}</h3>
        </article>
        <div class="nav">
            <p class="next">next project</p>
        </div>
    </div>

    <script src="js/project.app.js"></script>
<?php include 'footer.php' ?>