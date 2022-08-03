$(function(){


    
    // header search
    $('#searchbtn').click(function(){
        $('#header_search').css({
            top: 90,
        })
    })
    $('#cancelbtn').click(function(){
        $('#header_search').css({
            top: -340,
        })
    })



    // header_tab_menu
    $('.header_menubtn').click(function(){
        $('#tab_menucon').css({
            top: 0,
            opacity: 1,
        })
    })
    
    $('.cancelbtn').click(function(){
        $('#tab_menucon').css({
            top: '-100%',
            opacity: 0,
        })
    })
    
    $('.tab1_main1,.tab1_main2').click(function(){
        let main = $(this)

        if(main.hasClass('tab1_main1')){
            if($('#tab1_sub1').is(':visible')){
                $('#tab1_sub1').slideUp(250)
            } else {
                $('#tab1_sub1').slideDown(250)
            }
        } else {
            if($('#tab1_sub2').is(':visible')){
                $('#tab1_sub2').slideUp(250)
            } else {
                $('#tab1_sub2').slideDown(250)
            }
        }
    })



    // sec3
    $('#sec3_con > a').mouseenter(function(){
        $(this).css({
            width: '49%',
        })
        $(this).siblings('a').css({
            width: '17%',
        })
    })

    $('#sec3_con > a').mouseleave(function(){
        $(this).css({
            width: '25%',
        })
        $(this).siblings('a').css({
            width: '25%',
        })
    })



}); // end