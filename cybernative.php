<?php $page = 'projects'; define('before','Cybernative'); include ('nav.php'); ?>

<section class="container_page sub-page">
    <h1>Cybernative, a card game in a neo-futurist world.</h1>
    <div class="row" id="app">
        <div class="separator"></div>
        <section v-for="key in cybernative">
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
                    <li>Promotional website</li>
                    <li>Online game</li>
                    <li>Board game</li>
                    <li>Flyers, packaging</li>
                    <li>Social media strategy</li>
                </ul>
                <h2>SYNOPSIS</h2>
                <p>Lorem Ipsum.</p>
            </article>
        </section>
    </div>
<script src="js/project.app.js"></script>
<?php include 'footer.php' ?>