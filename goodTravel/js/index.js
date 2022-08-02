$(function(){



    // headermenu

    $('#pc_koreamenu').hover(function(){
        $('#pc_koreasubmenu').css({
            display: 'flex',
        })
    },function(){
        $('#pc_koreasubmenu').css({
            display: 'none',
        })
    })

    $('#pc_foreignmenu').hover(function(){
        $('#pc_foreignsubmenu').css({
            display: 'flex',
        })
    },function(){
        $('#pc_foreignsubmenu').css({
            display: 'none',
        })
    })

    $('#pc_thememenu').hover(function(){
        $('#pc_themesubmenu').css({
            display: 'flex',
        })
    },function(){
        $('#pc_themesubmenu').css({
            display: 'none',
        })
    })

    $('#pc_packagemenu').hover(function(){
        $('#pc_packagesubmenu').css({
            display: 'flex',
        })
    },function(){
        $('#pc_packagesubmenu').css({
            display: 'none',
        })
    })



    // header_search

    $('#pc_searchbtn').click(function(){
        $('#pc_searchwrap').css({display: 'flex'})
    })

    $('#closeBtn1').click(function(){
        $('#pc_searchwrap').css({display: 'none'})
    })



    // tab_menu

    $('#tab_menu').click(function(){
        $('#tab_menucon').css({display:'block'})
    })

    $('#tab_closebtn').click(function(){
        $('#tab_menucon').css({display:'none'})
    })


    
}); // end