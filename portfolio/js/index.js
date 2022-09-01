$(function(){



    // intro_fadeIn/Out
    // setTimeout(function(){
    //     $('.intro').fadeIn(1300).delay(1000).fadeOut(1300)
    // },800)
    // setTimeout(function(){
    //     $('.wrap').addClass('on')
    // },4300)



    // info_bg
    $(window).scroll(function(){
        let curr = $(window).scrollTop()
        let info_bottom = $('.info').offset().top + $('.info').outerHeight()

        if(500<curr && curr<info_bottom/1.25){
            $('body').addClass('on')
        }else{
            $('body').removeClass('on')
        }
    })



    // info_gsap
    gsap.from('.info .talk',{
        scrollTrigger:{
            trigger: '.info .talk',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y:100,
        opacity:0,
        duration:0.7,
    })

    gsap.from('.info .skill',{
        scrollTrigger:{
            trigger: '.info .skill',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y:100,
        opacity:0,
        duration:0.7,
    })



    // work__height
    let work_totalHeight = $('.work .box').innerWidth()
    
    $('.work').css({ height: work_totalHeight * 4.5 })



    // mobile_btn
    $('.mobile_btn .btn').click(function(){
        $('.mobile_slide').addClass('on')
    })
    $('.mobile_slide .btn a').click(function(){
        $('.mobile_slide').removeClass('on')
    })



}); // end