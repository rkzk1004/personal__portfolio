$(function(){



    // trigger

    gsap.from('.sec2_align',{
        scrollTrigger: {
            trigger: '.sec2_align',
            start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
    })

    gsap.from('#sec3_work',{
        scrollTrigger: {
            trigger: '#sec3',
            toggleActions: 'restart none none reverse',
            start: 'top 60%',
        },
        y: 200,
        opacity: 0,
        duration: 1.5,
    })



}); // end