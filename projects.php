<?php $page = 'projects'; define('before','Projects'); include ('nav.php'); ?>

<section class="container_page">
    <h1>My latest projects designed in various contexts with the same passion.</h1>
    <hr class="separator">
    <div class="row projects" id="app">
        <article v-for="project in projects" class="project hidden" :class="project.id">
            <h2>{{ project.name }}</h2>
            <div class="thumbnail"></div>
            <h3>{{ project.role }}</h3>
        </article>
    </div>
    <script src="js/project.json.js"></script>
<?php include 'footer.php' ?>