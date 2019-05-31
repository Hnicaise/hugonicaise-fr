<?php $page = 'projects'; define('before','Last&nbsp;trip'); include ('nav.php'); ?>

<section class="container_page sub-page">
    <h1>Last trip, my very first experience as a video director.</h1>
    <div class="row" id="app">
        <div class="separator"></div>
        <section v-for="key in lasttrip">
            <h2>SUMMARY</h2>
            <article class="clapboard">
                <div>
                    <h3>PROJECT TITLE</h3>
                    <br>
                    <p>{{ key.title }}</p>
                </div>
                <div>
                    <h3>DATE</h3>
                    <br>
                    <p>{{ key.date }}</p>
                </div>
                <div>
                    <h3>FORMAT</h3>
                    <br>
                    <p>{{ key.format }}</p>
                </div>
                <div>
                    <h3>MOOD</h3>
                    <br>
                    <p>{{ key.mood }}</p>
                </div>
            </article>
            <p class="sub-title"><span>Role :</span>{{ key.role }}</p>
            <article class="description">
                <h2>DELIVERABLES</h2>
                <ul>
                    <li>Music clip</li>
                    <li>Much gratitude</li>
                </ul>
                <h2>SYNOPSIS</h2>
                <p>Lorem Ipsum.</p>
            </article>
        </section>
    </div>
<script src="js/project.app.js"></script>
<?php include 'footer.php' ?>