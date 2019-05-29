$(window).on('load', function() {
    /* RELLAX INIT */
    var rellax = new Rellax('.rellax');

    /* CLOCK INIT */
    $(".clock .time").text($.datepicker.formatDate('mm.dd.yy', new Date()));

    /* FADEIN FUNCTION & PAGE TRANSITIONS */
    
    
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
        $('.container_logo polygon').css('animation-play-state','running');
        $('.container_logo #pink').css('animation-play-state','running');
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
            opacity = 1 - iScrollPos/900;
            if (opacity < 0.6) {
                opacity = 0.6;
            }
            $('.big-text').css('opacity', opacity);
    });

    /* ROLLING PROJECTS */
    
    var i = 1;
    var nbItems = $('.project').length;
    $('.p0').removeClass('hidden');
    $('.next').click(function(){
        $('.project h2').animate({
            opacity: "0",
        }, 500);
        $('.project h3').animate({
            opacity: "0",
        }, 500);
        $('.project video').animate({
            width: "0vh",
        }, 500);
        setTimeout(function(){
            $('.project h2').css('bottom','initial');
            $('.project').addClass('hidden');
            $('.p'+ i).removeClass('hidden');
            i++;
            if (i == nbItems) {
                i = 0;
            }
            $('.project h2').animate({
                opacity: "1",
            }, 300);
            $('.project h3').animate({
                opacity: "1",
            }, 300);
            $('.project video').animate({
                width: "67vh",
                hright: "67vh"
            }, 500);
        }, 800);
    });
    Pace.on('done', function() {
        fadein();
    });
    
});