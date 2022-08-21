$(function(){



    // sticky menu
    $(window).scroll(function(){
        let w_top = $(this).scrollTop()

        if(w_top>44){
            $('.sticky').addClass('on')
            $('body').addClass('on')
        }else{
            $('.sticky').removeClass('on')
            $('body').removeClass('on')
        }
    })



    // sec1_gsap
    gsap.from('.sec1 .airpod',{scale:1.3,opacity:0,delay:0.5,duration:0.8})
    gsap.from('.sec1 .text',{opacity:0,delay:1,duration:0.6})

    let sec1_02 = gsap.timeline({
        scrollTrigger:{
            trigger: '.sec1',
            start: 'top top',
            scrub: 0.2,
            end: '+=1000',
            // markers: true,
        },
    })

    sec1_02.addLabel('sec1')
    .to('.sec1 .airpod',{scale:1.2},'sec1')
    .to('.sec1 .text',{scale:0.8},'sec1')



    // sec2_gsap
    let sec2 = gsap.timeline({
        scrollTrigger:{
            trigger: '.sec2',
            start: 'top top',
            scrub: 0.3,
            end: '+=3000',
            pin: true,
            // markers: true,
        },
    })

    sec2
    .set('.sec2 .box h1',{y:300,opacity:0})
    .to('.sec2 .box h1:nth-child(1)',{y:0,opacity:1})
    .set('.sec2 .box h1',{y:300,opacity:0})
    .to('.sec2 .box h1:nth-child(2)',{y:0,opacity:1})
    .set('.sec2 .box h1',{y:300,opacity:0})
    .to('.sec2 .box h1:nth-child(3)',{y:0,opacity:1})
    .set('.sec2 .box h1',{y:300,opacity:0})
    .to('.sec2 .box h1:nth-child(4)',{y:0,opacity:1})



    // sec3_gsap
    gsap.from('.sec3 p:last-child',{
        scrollTrigger:{
            trigger: '.sec3 p:last-child',
            start: 'top 90%',
            // markers: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
    })



    // sec4_gsap
    gsap.to('.sec4 .box01 img',{
        scrollTrigger:{
            trigger: '.sec4',
            start: 'top top',
            end: '+=2000',
            scrub: 0.5,
            // markers: true,
        },
        y:200
    })



    // sec6__slide
    let sec6_slide = new Siema({
        selector: '.sec6 .slidecon .slide',
        draggable: false,
        duration: 500,
    })
    
    $('.sec6 .btncon ul li').click(function(){
        let idx = $(this).index()
        sec6_slide.goTo(idx)
    })
    
    // sec6__btn,fade
    $('.sec6 .btncon ul li a').click(function(e){
        e.preventDefault()
        $(this).addClass('on').parent().siblings().children().removeClass('on')
        
        let add = $(this).attr('href')
        $(add).addClass('on').siblings().removeClass('on')
    })



    // sec7__gsap
    gsap.from('.sec7 .con div', {
        scrollTrigger:{
            trigger: '.sec7 .con div',
            start: 'top 90%',
            // markers: true,
        },
        y: 50,
        opacity: 0,
        stagger:{
            amount: 0.3
        }
    })



}); // end