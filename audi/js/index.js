$(function(){



    // sec2__tab
    $('.sec2 .tabbox .tab').click(function(e){
        e.preventDefault()
        let target = $(this).attr('href')

        $(this).addClass('on').siblings().removeClass('on')
        $(target).addClass('on').siblings().removeClass('on')
    })

    // sec2__gsap
    $('.tab01').click(function(){
         let sec2__gsap01 = gsap.from('#model a',{
            stagger: {
                amount: 1,
            },
            x: -100,
            opacity: 0,
        })

        sec2__gsap01.restart()
    })
    $('.tab02').click(function(){
         let sec2__gsap02 = gsap.from('#category a',{
            stagger: {
                amount: .5,
            },
            x: -100,
            opacity: 0,
        })

        sec2__gsap02.restart()
    })



    // sec3__gsap
    let sec3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sec3',
            start: 'top top',
            end: '+=1000',
            pin: true,
            scrub: .5,
            // markers: true,
        },
    })

    sec3.addLabel('label01')
    .to('.sec3 h1',{ y:-100,opacity:0 },'label01')
    .to('.sec3 .bg',{opacity:0},'label01')
    .from('.sec3 .audi',{y:-50,scale:0.3,opacity:0},'label01<0.01')



}); // end