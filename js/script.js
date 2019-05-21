$('.container_logo polygon').css('animation-play-state','running');
$('.container_logo #pink').css('animation-play-state','running');
$(document).ready(function() {
    fadein();
    $('a').click(function (e) {
        //fadeout();
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
    /*function fadeout() {
        $('.container_page').css('opacity','');
        setTimeout(function(){
            $('.container_navigation').css('left','');
            setTimeout(function(){
            }, 500);
        }, 700);
    }*/
});