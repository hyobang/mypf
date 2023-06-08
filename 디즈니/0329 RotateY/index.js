$('#oBtn').click(function(){
    $('.btnMenu i').removeClass('on')//버튼을 전부 리셋.
    $('#xBtn').addClass('on')//X버튼을 보이기위해 Class on추가
    $('nav').addClass('on') //메뉴 리스트 보여
    //햄버거를 눌렀을 때 #grid도 addclass on이되어야한다
    $('#grid').addClass('on')
})
//X를 눌렀을 때 햄버거가 보이고 메뉴가 사라진다.
//햄버거가 보이는거는 addclass를 쓴다.
//메뉴가 사라지는거는 removeclass를 쓴다.
$('#xBtn').click(function(){
    $('.btnMenu i').removeClass('on')
    $('nav').removeClass('on')
    $('#oBtn').addClass('on')
    //x를 눌렀을 떄 #grid가 removeclass on이 되어야한다.
    $('#grid').removeClass('on')
})

$('nav li a').click(function(){
    $('nav').removeClass('on') //메뉴 리스트 사라져
    //버튼메뉴li를 클릭했을때 x버튼이 사라져야하고
    $('#xBtn').removeClass('on')
    //다시 햄버거 버튼이 생겨야된다.
    $('#oBtn').addClass('on')
    $('nav li a').removeClass('on') //메뉴 리스트 스타일 취소
    $(this).addClass('on') //클릭한 메뉴 스타일 설정
    let href=$(this).attr('href')
    $('.grid').removeClass('on')
    $(href).addClass('on') //href 클릭 할때마다 위치값 변수
    $('#grid').removeClass('on')
    //href로 가져온 것의 자식(div)에 on클래스를 추가하고 제거한다.
    $('.grid div').removeClass('on')
    $(href).children().addClass('on')
})
//.grid를 가져왔을때 body의 색상을 변경한다.
const body = document.querySelector('body')
const grid = document.querySelectorAll('.grid')
//
function colorChange(tab){
    tab.style.background-color = ''
}

