$(document).ready(function(){

    /* RELLAX INIT */
    var rellax = new Rellax('.rellax');

    /* CLOCK INIT */
    $(".clock .time").text($.datepicker.formatDate('mm.dd.yy', new Date()));

    /* FADEIN FUNCTION & PAGE TRANSITIONS */
    $('a').click(function (e) {
        $('.container_logo').css({'left':'100vw','z-index':'999'});
        $('.container_logo polygon, .container_logo #pink').css('animation-iteration-count','2');
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
        $('.container_logo polygon, .container_logo #pink').css('animation-play-state','running');
        setTimeout(function(){
            $('.container_navigation').animate({
                left: "0",
            }, 800);
            setTimeout(function(){
                $('.container_page, .clock').css('opacity','1');
            }, 800);
        }, 500);
    }

    /* SCROLLING DOWN ACTION */
    var iScrollPos = 0;
    var opacity = 0;
    $(window).scroll(function() {
        var iCurScrollPos = $(this).scrollTop();
            iScrollPos = iCurScrollPos;
            opacity = 1 - iScrollPos/900;
            if (opacity < 0.4) {
                opacity = 0.4;
            }
            $('.big-text').css('opacity', opacity);
    });

    /* ROLLING PROJECTS */
    var i = 1;
    var nbItems = $('.project').length;
    $('.p0').removeClass('hidden');
    $('.next, .pro').click(function(){
        next();
    });
    function next(){
        $('.project-caption').animate({
            opacity: "0",
        }, 300);
        $('.project video').css('width','0px');
        setTimeout(function(){
            $('.project').addClass('hidden');
            $('.p'+ i).removeClass('hidden');
            i++;
            if (i == nbItems) {
                i = 0;
            }
            $('.project-caption').animate({
                opacity: "1",
            }, 300);
            $('.project video').css('width','');
        }, 800);
    }

    /* PACE */
    Pace.on('done', function() {
        fadein();
    });
});