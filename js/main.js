$(document).ready(function(){

    /* ROLLING PROJECTS */
    var i = 1;
    var t = 0;
    var nbItems = $('.project').length;
    $('.p0').removeClass('hidden');
    
    $(window).on('mousewheel', function() {
        if (t == 0) {
            t--;
            next();
            setTimeout(function(){
                t++;
            }, 1000);
        }
    });
    function next(){
        $('.project-caption').animate({
            opacity: "0",
        }, 500);
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
        
    });
});