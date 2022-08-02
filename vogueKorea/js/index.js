$(function(){



    // scrollbtn

    $('#scrollbtn').click(function(){
        $('html,body').stop().animate({
            scrollTop: 0,
        })
    })



    // header

    $(window).scroll(function(){

        if($(this).scrollTop()>810){
            $('#scrollbtn').css({
                opacity: 1,
            })
            $('#header').css({
                height: 60,
                backgroundColor: 'rgba(255,255,255,1)',
            })
            $('#header_logo').css({
                opacity: 1,
            })

        } else {

            $('#scrollbtn').css({
                opacity: 0,
            })
            $('#header').css({
                height: 120,
                backgroundColor: 'transparent',
            })
            $('#header_logo').css({
                opacity: 0,
            })
        }


        
        // sec1_logo
        
        scroll = $(window).scrollTop()

        $('#logo').css({
            opacity: 1 - scroll/300,
            transition: 'all .1s'
        })

    })



    // sidemenu

    $('#menubtn').click(function(){
        $('#sidemenu_bg').css({
            display: 'block',
        })
        $('#sidemenu').css({
            left: 0,
        })
    })

    $('#sideclose').click(function(){
        $('#sidemenu_bg').css({
            display: 'none',
        })
        $('#sidemenu').css({
            left: -300,
        })
    })



    // sec1
    
    function logo (){
        setTimeout(function(){
            $('#logo').css({
                opacity: 1,
            })
        },1500)
    }

    logo()



}); // end