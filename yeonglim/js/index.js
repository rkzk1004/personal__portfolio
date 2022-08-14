$(function(){



    // header__scoll
    $('body').on('mousewheel',function(e){
        let wheel = e.originalEvent.wheelDelta

        if(wheel > 0){
            // scroll up
            $('header').removeClass('up')
        }else{
            // scroll down
            $('header').addClass('up')
            $('header .sub').removeClass('on')
            $('.search__wrap').removeClass('on')
        }
    })

    $(window).scroll(function(){
        let curr = $(window).scrollTop()

        if(curr > 50){
            $('header').addClass('scroll')
        }else{
            $('header').removeClass('scroll')
        }
    })



    // header__sub-menu
    $('header .align .main .main-menu a').mouseover(function(){
        let target = $(this).attr('href')

        $('header .sub').addClass('on')
        $(target).addClass('on').siblings('.sub-menu').removeClass('on')
    })

    $('header').mouseleave(function(){
        $('header .sub').removeClass('on')
    })



    // header__search
    $('header .align .btnbox .search').click(function(){
        $('.search__wrap').toggleClass('on')
    })



    // header__wish
    $('header .align .btnbox .wish').click(function(){
        $('.wish__wrap').addClass('on')
        $('body').addClass('on')
    })
    $('.wish__wrap .box01 .box a').click(function(){
        $('.wish__wrap').removeClass('on')
        $('body').removeClass('on')
    })



    // sec1__swiper-btn
    $('.sec1 .swiper .btn').mousemove(function(e){
        let sec1_x = e.offsetX,
            sec1_y = e.offsetY

        $('.sec1 .swiper .btn .cursor').css({
            top: sec1_y + 'px',
            left: sec1_x + 'px',
        })
    })

    $('.sec1 .swiper .btn').mouseover(function(){
        $('.sec1 .swiper .btn .cursor').show()
        $(this).siblings(this).find('.cursor').hide()
    })
    $('.sec1 .swiper .btn').mouseleave(function(){
        $('.sec1 .swiper .btn .cursor').hide()
    })



    // sec1__gsap
    gsap.from('.sec1 .swiper .swiper-wrapper .swiper-slide .text',{
        y: 100,
        opacity: 0,
        duration: 1,
    })



    // sec2__gsap
    gsap.from('.sec2',{
        scrollTrigger:{
            trigger: '.sec2',
            start: 'top 85%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })



    // sec3__nav
    $('.sec3 nav ul li a').click(function(e){
       e.preventDefault()

       let target = $(this).attr('href')

       $(this).addClass('on').parent().siblings().children().removeClass('on')
       $(target).addClass('on').siblings().removeClass('on')
    })



    // sec3__gsap
    let sec3 = gsap.timeline({
        defaults: {
            duration: 1,
        },
        scrollTrigger: {
            trigger: '.sec3 .con .align',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
    })

    sec3.addLabel('label01')
    .from('.sec3 .con .align .box01',{ y:100,opacity:0 },'label01')
    .from('.sec3 .con .align .box02',{y:100,opacity:0},'label01+=0.3')

    let sec3__02 = gsap.timeline({
        defaults: {
            duration: 1,
        },
        scrollTrigger: {
            trigger: '.sec3 .con .align h1',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        }
    })

    sec3__02.addLabel('label02')
    .from('.sec3 .con .align h1',{y:100,opacity:0},'label02')
    .from('.sec3 .con .align .box03',{y:100,opacity:0},'label02+=0.3')



    // sec4__gsap
    gsap.from('.sec4',{
        scrollTrigger:{
            trigger: '.sec4',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })



    // sec4__video
    $('.sec4 .video').click(function(e){
        e.preventDefault()

        $('.sec4 .video iframe')[0].src += '?autoplay=1'
        $('.sec4 .video iframe').addClass('on')
    })



    // sec5__gsap
    gsap.from('.sec5',{
        scrollTrigger: {
            trigger: '.sec5',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        touchRatio: 0,
    })



    // sec6__gsap
    gsap.from('.sec6',{
        scrollTrigger: {
            trigger: '.sec6',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })



    // sec7__gsap
    gsap.from('.sec7',{
        scrollTrigger: {
            trigger: '.sec7',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })



    // sec8__gsap
    gsap.from('.sec8',{
        scrollTrigger: {
            trigger: '.sec8',
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
            // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })



}); // end