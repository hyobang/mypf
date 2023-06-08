let shopActive = false;
let boardActive = false;

$('#shop').click(function(e){
    e.preventDefault();
    if (!shopActive) {
        $('#shopMenu').stop().animate({'left':'0'});
        $('#boardMenu').stop().animate({'right':'-100%'});
        shopActive = true;
        boardActive = false;
    } else {
        $('#shopMenu').stop().animate({'left':'-100%'});
        shopActive = false;
    }
});

$('#board').click(function(e){
    e.preventDefault();
    if (!boardActive) {
        $('#boardMenu').stop().animate({'right':'0'});
        $('#shopMenu').stop().animate({'left':'-100%'});
        boardActive = true;
        shopActive = false;
    } else {
        $('#boardMenu').stop().animate({'right':'-100%'});
        boardActive = false;
    }
});

$('.closeBtn').click(function(e){
    e.preventDefault();
    const menu = $(this).closest('ul').attr('id');
    if (menu === 'shopMenu') {
        $('#shopMenu').stop().animate({'left':'-100%'});
        shopActive = false;
    } else if (menu === 'boardMenu') {
        $('#boardMenu').stop().animate({'right':'-100%'});
        boardActive = false;
    }
    
    $('.slideMenu').stop().animate({'height':`${slideMenuHeight}`});
    slideToggle = false;
});

//기존 shop의 submenu 높이 저장
const slideMenuHeight = $('.slideMenu').height()

let slideToggle = false
$('li.slideMenu').click(function(e){
    e.preventDefault()
    //loa와 category의 숨겨진 서브메뉴의 높이 가져오기
    const subHeight = $(this).find('.subMenu').height()
    //서로다른 메뉴를 클릭했을 때 active된 높이 초기화
    $('.slideMenu').stop().animate({'height':`${slideMenuHeight}`})
    if(!slideToggle){
        $(this).stop().animate({'height':`${subHeight+40}`})
        slideToggle = true
    } else if(slideToggle){
        if($(this).height() != subHeight+40){
            $(this).stop().animate({'height':`${subHeight+40}`})
        }
        slideToggle = false
    }
   
})

//header 위치 설정
//스크롤 현재값이 0일경우 noticeBanner의 높이만큼 내려간다
$(window).scroll(function(){
    const bannerTop = $('#noticeBanner').height()
    const currentTop = $(window).scrollTop()
    if(currentTop>bannerTop){
        $('header').css({'top':'0'})
    } else if(currentTop<bannerTop){
        $('header').css({'top':bannerTop})
    }
})