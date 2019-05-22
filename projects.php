<?php $page = 'projects'; define('before','Projects'); include ('nav.php'); ?>

<section class="container_page">
    <h1>My latest projects designed in various contexts, with various people, but always with the same passion.</h1>
    <div class="row">
        <div class="col" id="app">
            <article class="more project" v-for="project in projects">
                <h2><img v-bind:src="project.img" v-bind:alt="project.alt" v-bind:class="project.class">{{ project.name }}</h2>
                <p>{{ project.desc }}</p>
                <a class="read" v-bind:href="project.link">→ read more</a>
            </article>
        </div>
    </div>
</section>
<script src="js/projects.json.js"></script>
<?php include 'footer.php' ?>