$('li.mainmenu').mouseenter(function(){

    $(this).find('ul.submenu').stop().slideDown();
});
$('li.mainmenu').mouseleave(function(){

    $('ul.submenu').stop().slideUp();
});

// --------------------------------------------- 

$('.notic li').first().click(function(){
    $('.modalBox').fadeIn()
})
$('.closeBtn').click(function(){
    $('.modalBox').fadeOut()

})