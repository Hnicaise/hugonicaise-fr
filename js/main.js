$(document).ready(function() {

    /* RELLAX INIT */
    var rellax = new Rellax('.rellax');

    /* CLOCK INIT */
    $(".clock .time").text($.datepicker.formatDate('yy.mm.dd', new Date()));

    /* FADEIN FUNCTION & PAGE TRANSITIONS */
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
                $('.clock').css('opacity','1');
            }, 800);
        }, 500);
    }

    /* SCROLLING DOWN ACTION */
    var iScrollPos = 0;
    var opacity = 0;
    $(window).scroll(function() {
        var iCurScrollPos = $(this).scrollTop();
            iScrollPos = iCurScrollPos;
            opacity = 1 - iScrollPos/400;
            $('.big-text').css('opacity', opacity);
    });

    /* ROLLING PROJECTS */
    
        var i = 1;
        
        $('.p0').removeClass('hidden');
        $('video').click(function(){
            $('.project').addClass('hidden');
            $('.p'+ i).removeClass('hidden');
            i++;
            if (i == 10) {
                i = 0;
            }
        });
});