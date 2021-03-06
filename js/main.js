$(document).ready(function(){

    /* ROLLING PROJECTS */
    var i = 1;
    var t = 1;
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
    $('video').click(function(){
        t = null;
        $('.project h2').animate({
            opacity: "0",
        }, 500);
        setTimeout(function(){
            $('video').css({
                'width':'100%',
                'filter':'grayscale(0%)',
                'cursor':'default'
            });
            setTimeout(function(){
                $('.details').css('display','none');
                $('.d'+ i).css('display','block');
                $('html').css('overflow-y','scroll');
            }, 600);
            $('.close, .scroll-downs').css({
                'opacity':'1'
            });
        }, 500);
    });
    $('.close').click(function(){
        t = 0;
        window.scrollTo(0, 0);
        $('video').css({
            'width':'',
            'filter':'',
            'cursor':''
        });
        $('.close, .scroll-downs').css({
            'opacity':''
        });
        $('.details').css('display','');
        $('html').css('overflow-y','');
        setTimeout(function(){
            $('.project h2').animate({
                opacity: "1",
            }, 500);
        }, 500);
    });

    /* SOUND */
    $('.music').click((function(toggleValue){
        return function(e){
            if(toggleValue){
                $('img', this).attr('src','img/on.svg');
                $('audio', this)[0].play();
            }else{
                $('img', this).attr('src','img/off.svg');
                $('audio', this)[0].pause();
            }
            toggleValue = !toggleValue;
        }
    })(true));

    /* PACE */
    Pace.on('done', function() {
            $('#preloader').animate({
                opacity: "0",
            }, 1000);
        setTimeout(function(){
            $('#preloader').css('pointer-events','none');
            setTimeout(function(){
                $('#preloader').css('display','none');
            }, 500);
        }, 500);
        t = 0;
    });
});