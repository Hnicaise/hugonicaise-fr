$(document).ready(function() {
    fadein();
    $('a').click(function (e) {
        $('.container_logo').css('left','100vw');
        $('.container_logo').css('z-index','999');
        $('.container_logo polygon').css('animation-iteration-count','2');
        $('.container_logo #pink').css('animation-iteration-count','2');
        $('.container_logo').animate({
            left: "0",
        }, 800);
        e.preventDefault();
        var goTo = this.getAttribute("href");
        setTimeout(function(){
            window.location = goTo;
        }, 800);
    });
    function fadein() {
        setTimeout(function(){
            $('.container_navigation').animate({
                left: "0",
            }, 800);
            setTimeout(function(){
                $('.container_page').css('opacity','1');
            }, 800);
        }, 500);
    }
    window.sr = ScrollReveal({ reset: false });
    sr.reveal('.more', { duration: 600, viewFactor: 0.5 });
    sr.reveal('.delay', { interval: 50 });

    
    $('.over').waypoint(function(direction){
        $(this.element).addClass('over-t');
    }, { offset: '65%'});

    $('.whitebg').waypoint(function(direction){
        if (direction == 'down') {
            $('.container_navigation').css('transition','.8s');
            $('.container_navigation').addClass('white-mode');
            $('article p').css('color','black');
            $('article h2').css('color','black');
        } else {
            $('.container_navigation').removeClass('white-mode');
            $('article p').css('color','');
            $('article h2').css('color','');
        }
    }, { offset: '100%'});
});