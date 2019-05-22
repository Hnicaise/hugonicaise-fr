$('.container_logo polygon').css('animation-play-state','running');
$('.container_logo #pink').css('animation-play-state','running');
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
        sr.reveal('.more', { duration: 600, viewFactor: 0.8 });
        sr.reveal('.delay', { interval: 50 });
        $('.over1').waypoint(function(){
            $('.over1').addClass('over-t');
        }, { offset: '60%'});
        $('.over2').waypoint(function(){
            $('.over2').addClass('over-t');
        }, { offset: '60%'});
        $('.over3').waypoint(function(){
            $('.over3').addClass('over-t');
        }, { offset: '60%'});
    
    $('.project').hover(function(){
        $(this).find(".icon").addClass('animated');
    }, function(){
        $('.icon').removeClass('animated');
    });
});