<?php $page = 'work'; define('before','Work Ethic'); include ('nav.php'); ?>

<section class="container_page">
    <h1>Unique & tailor-made. All my creations are developed with an UX-first approach.</h1>
    <div class="row">
        <div class="divided">
            <article class="more">
                <h2 class="over"><span>How do I work</span></h2>
                <p>As a webdesign enthusiast, I like to put a strong emphasis on the UI and UX of my work. Unless my customers have an accurate idea of their projects, I always do my best to develop the most modern and unique creation possible. I make a lot of digital watch about SEO, web technologies and design, to be able to fit the best way possible to my customer needs. Client's speech is key, so I've learned how to understand it. </p>
            </article>
            <article class="more">
                <h2 class="over"><span>My philosophy</span></h2>
                <p>In my opinion, web development and more specifically front-end design should be qualified as Art just like drawing or any other form of graphic design. As soon as there is a creation, there is Art. Sculpture, drawing, painting require practice over the years, have artistic movements as well as webdesign. So, when I create a website alone from scratch, I consider it like a digital creation first, and not like a commercial product.</p>
            </article>
        </div>
    </div>
    <hr class="separator">
    <div class="row">
        <article class="tech">
            <h2 class="more over"><span>Technologies I use</span></h2>
            <div class="image-grid" id="app">
                <h4 v-for="techno in technos" class="more delay"><img v-bind:src="techno.img" v-bind:alt="techno.name" />{{ techno.name }}</h4>
            </div>
        </article>
    </div>
    <hr class="separator">
</section>
<script src="js/techno.json.js"></script>
<?php include 'footer.php' ?>