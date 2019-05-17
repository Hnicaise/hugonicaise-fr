$(document).ready(function() {
    fadein();
    $('.container_logo polygon').css('animation-play-state','running');
    $('a').click(function (e) {
        fadeout();
        e.preventDefault();
        var goTo = this.getAttribute("href");
        setTimeout(function(){
            window.location = goTo;
        }, 1300);
    });
    function fadein() {
        setTimeout(function(){
            $('.container_navigation').css('left','0');
            setTimeout(function(){
                $('.container_page').css('opacity','1');
            }, 900);
        }, 500);
    }
    function fadeout() {
        $('.container_page').css('opacity','');
        setTimeout(function(){
            $('.container_navigation').css('left','');
            setTimeout(function(){
            }, 500);
        }, 700);
    }
});