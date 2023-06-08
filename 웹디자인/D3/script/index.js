$('li.mainmenu').mouseenter(function(){
    $('.submenu').stop().fadeIn()
    $('.menubg').stop().fadeIn()
})
$('li.mainmenu').mouseleave(function(){
    $('.submenu').stop().fadeOut()
    $('.menubg').stop().fadeOut()
})