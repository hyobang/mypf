$('.tabmenu li a').click(function(e){
    e.preventDefault()
    $('.tabmenu li a').removeClass('on')
    $(this).addClass('on')
    let href=$(this).attr('href')    
    $('article').removeClass('on')
    $(href).addClass('on')
})

// $('.tabmenu li').click(function(e){
//     e.preventDefult()
//     let i=$(this).index()
//     alert(i)
//     $('article').removeClass('on')
//     $('article').eq(i).addClass('on')
// })

$ ('.main_tabs_menu li a').click(function (e) {
    e.preventDefault();
    $('.main_tabs_menu li a').removeClass('on')
    $(this).addClass('on')

    let href=$(this).attr('href')
    $('.tab').removeClass('on')
    $(href).addClass('on')

    $('.tabcol').stop().animate({'opacity':'0','left':'0'})
    $('.tabdesc').stop().animate({'opacity':'0','right':'0'})
    
    $(href).find('.inner .tabcol').animate({'opacity':'1','left':'80px'},500)
    $(href).find('.inner .tabdesc').delay(300).animate({'opacity':'1','right':'80px'},500)

});

//마우스휠 컨트롤
//자바스크립트
document.querySelectorAll('section').forEach(function(section){
    section.addEventListener('wheel',function(e){
        e.preventDefault()
        let delta=e.deltaY
       let target //값의 범위[scope]   

        if(delta<0){
            //console.log('위')
           target = this.previousElementSibling

        }else if(delta>0){
            //console.log('아래')
         target = this.nextElementSibling

        }
        if(target){
            let sectTop=target.offsetTop
            window.scrollTo({top:sectTop, behavior: 'smooth'})
        }

    })
})