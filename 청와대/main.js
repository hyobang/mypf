//네비게이션 메뉴 효과
$('nav').mouseenter(function(){
    $('header').css({'background':'#fff'})
    $('nav .mainmenu a').css({'color':'#000'})
    $('nav .sub a').css({'color':'#fff'})
    $('nav .gnb a').css({'color':'#000'})
    $('h1 img.hover').css({'display':'block'})
    $('h1 img.off').css({'display':'none'})
})
$('nav').mouseleave(function(){
    $('header').css({'background':'transparent'})
    $('nav li a').css({'color':'#fff'})
    $('.baricon').css({'color':'#fff'})
    $('h1 img.hover').css({'display':'none'})
    $('h1 img.off').css({'display':'block'})
})

//sect3 버튼 호버효과
$('.watch').mouseenter(function(){
    $('watch').removeClass('on') 
    $(this).addClass('on')
})
$('.watch').mouseleave(function(){
    $(this).removeClass('on')     
})

//sect4 탭메뉴 호버 효과
$('#sect4 li').mouseenter(function(){
    $('#sect4 li').removeClass('on') 
    //li에게 초기값으로 리셋시켜준다
    $(this).addClass('on')
    //'this'로 지정해준 값에 'on'을 붙여준다
    $('.plus').removeClass('on')
    $(this).find('.plus').addClass('on')
    //span plus에도 class를 붙여야하기때문에
    //this에서 찾아준다
})
$('#sect4 li').mouseleave(function(){
    $('#sect4 li').removeClass('on')
    //li에 미우스를 뗐을때 값을 초기화 시킨다('on'을 없애준다)
    $('.plus').removeClass('on')
})


$('.tabmenu li').click(function(){
    //li를 눌렀을때 on이 추가된다(그 전의 것들은 초기화)
    let idx=$(this).index()
    //idx값이 무엇인지 헷갈릴땐 consol.log를 찍어보면 된다
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')
})

//동영상 컬러박스
$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});


//마우스휠 컨트롤
//자바스크립트
document.querySelectorAll("section").forEach(function (section) {
    section.addEventListener("wheel", function (e) {
      e.preventDefault();
      let delta = e.deltaY;
      let target; //값의 범위[scope]
  
      if (delta < 0) {
        //console.log('위')
        target = this.previousElementSibling;
      } else if (delta > 0) {
        //console.log('아래')
        target = this.nextElementSibling;
      }
      if (target) {
        let sectTop = target.offsetTop;
        window.scrollTo({ top: sectTop, behavior: "smooth" });
      }
    });
  });