$(function(){



    // intro

    // setTimeout(function(){
    //     $('.intro__first').fadeIn(1500).delay(1500).fadeOut(1500)
    // },800)
    
    // setTimeout(function(){
    //     $('.intro__second').css({
    //         opacity: 1,
    //         transition: '1.5s ease'
    //     })
    // },5700)



    // sec2_bgColor
    $(window).scroll(function(){

        let scroll = $(window).scrollTop(),
            sec2_top = $('#sec2').offset().top,
            sec2_bottom = $('#sec2').offset().top + $('#sec2').outerHeight()
        
        if(sec2_top-800 <= scroll && scroll <= sec2_bottom-500) {

            $('body').css({
                backgroundColor: '#000',
                transition: '0.3s ease',
            })

            $('.mainText').css({
                color: 'rgba(255,255,255,1)',
            })
            $('.mainText').hover(function(){
                $(this).css({
                    color: 'rgba(255,255,255,.4)',
                    transition: '0.3s ease',
                })
            },function(){
                $(this).css({
                    color: 'rgba(255,255,255,1)',
                    transition: '0.3s ease',
                })
            })

            $('.main_black').fadeOut(300)
            $('.main_white').fadeIn(300)

            $('#mobile_menubtn').css({
                color: 'rgba(255,255,255,1)',
            })
            $('#mobile_menubtn').hover(function(){
                $(this).css({
                    color: 'rgba(255,255,255,.4)',
                    transition: '0.3s ease',
                })
            },function(){
                $(this).css({
                    color: 'rgba(255,255,255,1)',
                    transition: '0.3s ease',
                })
            })
            
            $('#mobile2_year').css({
                color: 'white',
                transition: '0.3s ease',
            })

            $('.white').css({
                backgroundColor: 'rgba(255,255,255,1)',
            })
            
            $('#mobile_menudot>div').css({
                backgroundColor: '#fff',
            })

            $('.mobile2_menubox').css({
                backgroundColor: '#000'
            })
            $('.mobile2_menubox>div>a').css({
                color: '#fff'
            })

        } else {

            $('body').css({
                backgroundColor: '#fff',
                transition: '0.3s ease',
            })

            $('.mainText').css({
                color: 'rgba(0,0,0,1)',
            })
            $('.mainText').hover(function(){
                $(this).css({
                    color: 'rgba(0,0,0,.4)',
                    transition: '0.3s ease',
                })
            },function(){
                $(this).css({
                    color: 'rgba(0,0,0,1)',
                    transition: '0.3s ease',
                })
            })

            $('.main_white').fadeOut(300)
            $('.main_black').fadeIn(300)

            $('#mobile_menubtn').css({
                color: 'rgba(0,0,0,1)',
            })
            $('#mobile_menubtn').hover(function(){
                $(this).css({
                    color: 'rgba(0,0,0,.4)',
                    transition: '0.3s ease',
                })
            },function(){
                $(this).css({
                    color: 'rgba(0,0,0,1)',
                    transition: '0.3s ease',
                })
            })

            $('#mobile2_year').css({
                color: 'black',
                transition: '0.3s ease',
            })

            $('.white').css({
                backgroundColor: '#fff',
            })

            $('#mobile_menudot>div').css({
                backgroundColor: '#000',
            })

            $('.mobile2_menubox').css({
                backgroundColor: '#fff'
            })
            $('.mobile2_menubox>div>a').css({
                color: '#000'
            })
        }
    })



    // mobile_menudot

    $('#mobile_menudot').click(function(){
        $('.mobile2_menubox').addClass('menubox2_toggle')

        if($('.mobile2_menubox').addClass('menubox2_toggle')){
            $('.mobile2_menubox>div>a').click(function(){
                $('.mobile2_menubox').removeClass('menubox2_toggle')
            })
        }
    })



}); // end