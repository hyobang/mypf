
$('.tabmenu li').click(function(e){
    e.preventDefault();
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let i= $(this).index()
    $('article').removeClass('on')
    $('article').eq(i).addClass('on')
    dotAni($(this))//클릭한 개체요소
})

dotAni($('.tabmenu li').first())
//처음 시작하면 첫번쨰 위치 값으로 찾아가기

function dotAni(active){ //넘어오는 클릭개체
    //dot의 위치점 변경하기
    let current=active
    let currentPos=current.offset().left
    //넘어오는 개체의 윈도우 왼쪽0부터 개체까지의 left 위치값
    let currentwid=current.width()/2    

      $('.dot').stop().animate({'left':currentPos+currentwid-5})
}

$(window).resize(function(){ 
    dotAni($('.tabmenu li').first())
})

//sect2 탭메뉴 누를때 index번째 내용으로 바뀌는부분
$('ul.item li').click(function(e){
    e.preventDefault
    $('ul.item li').removeClass('on')
    $(this).addClass('on')
    let i= $(this).index()
    $('ul.desc li').removeClass('on')
    $('ul.desc li').eq(i).addClass('on')   
})

// -----------------------------------------------------

let grid
const frame='.productItem'
const box='.productItem article'
const speed='.35s'

window.addEventListener('load',function(){
init()
document.querySelector('.item li a.on').click()
})
//그리드 첫번째 on된 화면 보이기

function init(){
    grid=new Isotope(frame,{
        itemSelector:box,
        columnWidth: box,
        transitionDuration:speed
    
    })
}
//아이소토페 기본 세팅

const items=document.querySelectorAll('.item li a')

items.forEach(item=>{
    item.addEventListener('click',function(e){
        e.preventDefault()
        let href=this.getAttribute('href')
        grid.arrange({filter:href})

        items.forEach((item)=>{
            item.classList.remove('on')
        })
        this.classList.add('on')
    })
})