

$('li.mainmenu').mouseenter(function(){

    $('ul.submenu').stop().slideDown();
});
$('li.mainmenu').mouseleave(function(){

    $('ul.submenu').stop().slideUp();
});

$('.tabmenu li').click(function(){
   
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')
})