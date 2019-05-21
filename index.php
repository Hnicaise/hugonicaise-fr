<?php
    $page = 'home';
    include ('config.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Hugo Nicaise — <?php echo  title; ?></title>
        <?php include ('nav.php'); ?>
        <section class="container_page">
            <h1>Front-end engineering, digital creation & modern design.</h1>
            <div class="row">
                <div class="divided">
                    <article class="more">
                        <h2 class=>Who am I</h2>
                        <p class=>Hello! My name is Hugo Nicaise. I'm a web developer and audiovisual student in the city of Troyes, France. I started to create websites back in 2014 by curiosity to help my father, but since I never stopped. Beside my studies, I create websites and digital projects for professionals and individuals. I also create personal projects to keep on learning every single day because I love my job.</p>
                    </article>
                    <article class="more">
                        <h2>My studies</h2>
                        <p>Back in 2015, I passed a science and mechanic baccalaureate. Right after it, I started a degree in computer science which didn't satisfy me. So, in 2017 I applied to a web development and audiovisual degree which learned me a lot. Now in 2019, I'm beginning a professional certificate in front and back development.</p>
                    </article>
                </div>
            </div>
        </section>
        <?php include 'footer.php' ?>