$(function(){


    
    // header
    $(window).scroll(function(){
        
        let curr = $(window).scrollTop()

        if(curr > 80){
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })



    // sec1
    const sec1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec1',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            // markers: true,
        },
    })

    sec1.addLabel('label01')
    .to('.title01',{x:120},'label01')
    .to('.title02',{x:-120},'label01')
    .to('.sec1',{'background-position':'50% 20%'},'label01')



    // sec2
    const sec2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec2',
            start: 'top top',
            end: '+=3000',
            scrub: 0.5,
            pin: true,
            // markers: true,
        },
    })

    sec2
    .set('.sec2 h1 div',{opacity:0,y:300})
    .to('.sec2 h1 div:nth-child(1)',{opacity:1,y:0})
    .set('.sec2 h1 div',{opacity:0,y:300})
    .to('.sec2 h1 div:nth-child(2)',{opacity:1,y:0})
    .set('.sec2 h1 div',{opacity:0,y:300})
    .to('.sec2 h1 div:nth-child(3)',{opacity:1,y:0})
    .set('.sec2 h1 div',{opacity:0,y:300})
    .to('.sec2 h1 div:nth-child(4)',{opacity:1,y:0})



    // sec3
    const sec3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec3',
            start: 'top top',
            end: '+=5000',
            scrub: 0.5,
            pin: true,
            // markers: true,
        },
    })

    sec3
    .from('.sec3 .box02 img',{scale:5,yPercent:50})
    .addLabel('.label02','<0.3')
    .from('.sec3 .box01',{scale:2,xPercent:-200},'label02')
    .from('.sec3 .box03',{scale:2,xPercent:200},'label02')
    .from('.sec3 div p',{yPercent:200},'label02')



    // sec4
    let sec4__top = $('.sec4').outerHeight() - $('.sec4 .box01').outerHeight()

    gsap.to('.sec4 .box01',{
        scrollTrigger: {
            trigger: '.sec4',
            start: sec4__top+'px top',
            end: '+=3000',
            scrub: 0.5,
            pin: true,
            // markers: true,
        },
    })

    gsap.to('.sec4 .box01 .con',{
        scrollTrigger: {
            trigger: '.sec4 .box01 .con',
            start: 'top 100%',
            end: '+=3000',
            scrub: 0.5,
            // markers: true,
        },
        xPercent: -125,
    })



    // sec5
    let sec5__box = gsap.timeline({
        defaults:{
            duration: 1,
            delay: 0.2,
        },
        scrollTrigger: {
            trigger: '.sec5 .tab-con',
            start: 'top 90%',
            onEnter: ()=>{
                sec5__box.restart()
            },
            onEnterBack: ()=>{
                sec5__box.restart()
            },
            // markers: true,
        },
    })

    sec5__box.addLabel('label03')
    .from('.sec5 .tab-con .box .imgbox',{opacity:0,scale:1.2,},'label03')
    .from('.sec5 .tab-con .box .textbox',{opacity:0},'label03+=0.5')

    $('.sec5 .tab-btn a').click(function(e){
        e.preventDefault()
        sec5__box.restart()
        target = $(this).attr('href')
        
        if($(this).hasClass('studio')) {
            $(this).parent('.tab-btn').addClass('on')
            $(this).addClass('on').siblings().removeClass('on')
        } else {
            $(this).parent('.tab-btn').removeClass('on')
            $(this).addClass('on').siblings().removeClass('on')
        }
        $(target).removeClass('on').siblings().addClass('on')
    })



}); // end