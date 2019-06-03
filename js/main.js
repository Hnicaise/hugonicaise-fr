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
            }, 600);
            $('.close').css({
                'opacity':'1'
            });
        }, 500);
    });
    $('.close').click(function(){
        t = 0;
        $('video').css({
            'width':'',
            'filter':'',
            'cursor':''
        });
        $('.close').css({
            'opacity':''
        });
        $('.details').css('display','');
        setTimeout(function(){
            $('.project h2').animate({
                opacity: "1",
            }, 500);
        }, 500);
    });

    /* SOUND */
    $('.sound').click((function(toggleValue){
        return function(e){
            if(toggleValue){
                $('.sound').attr('src','img/on.svg');
                $("#player")[0].play();
            }else{
                $('.sound').attr('src','img/off.svg');
                $("#player")[0].pause();
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
    });
});