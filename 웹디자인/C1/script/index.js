$('.mainmenu').mouseenter(function(){
    $(this).find('.submenu').stop().slideDown()
})
$('.mainmenu').mouseleave(function(){
    $(this).find('.submenu').stop().slideUp()
})

// ------------------------------------------------------ 메인메뉴

$('.tabmenu li').click(function(e){e.preventDefault()
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

// ------------------------------------------------------- 탭메뉴

// $('.slide:gt(0)').hide()
//   setInterval(function(){
//   $('.slide:first').fadeOut(1000).next().fadeIn(1000)
//   $('.slide:first').appendTo('.slideWrap')
//  },3000)

// ------------------------------------------------------------ 나타나는거
// setInterval(() => {
//     $('.slidewrap').animate({'margin-left':'-100%'},function(){
//         $('.slide:first').appendTo('.slidewrap')
//         $('.slidewrap').css({'margin-left':'0'})
//     })

// }, 3000);

// ------------------------------------------------------------- 넘어가는거

setInterval(() => {
        $('.slidewrap').animate({'margin-top':'-350px'},function(){
            $('.slide:first').appendTo('.slidewrap')
            $('.slidewrap').css({'margin-top':'0'})
        })
    
    }, 3000);

// ------------------------------------------------------------- 올라가는거