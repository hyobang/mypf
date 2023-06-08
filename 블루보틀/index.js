//스크롤이벤트
$(".nav li a").click(function (e) {
  let href = $(this).attr("href");
  //a태그를 지정해주어야한다
  //a가 가르키는 주소값으로 가서
  let artTop = $(href).offset().top;
  //a속성값 위치값 불러오기(그 주소의 시작점이 window에서 얼마나 떨어져있나)
  $("html").animate({ scrollTop: artTop }, 500);
  //offset값(위치값)을 찍으면 윈도우의 스크롤을
  //html을 스크롤top값(아티클의 시작위치)으로 애니메이션 시켜라
});

//메뉴 눌렀을때 화면이동
$(window).scroll(function () {
  // if(scrTop>=h*0 && scrTop<h*1){
  //     $('.nav li').removeClass('on')
  //     $('.nav li').eq(0).addClass('on')
  // }
  // if(scrTop>=h*1 && scrTop<h*2){
  //     $('.nav li').removeClass('on')
  //     $('.nav li').eq(1).addClass('on')
  // }
  // if(scrTop>=h*2 && scrTop<h*3){
  //     $('.nav li').removeClass('on')
  //     $('.nav li').eq(2).addClass('on')
  // }
  // if(scrTop>=h*3 && scrTop<h*4){
  //     $('.nav li').removeClass('on')
  //     $('.nav li').eq(3).addClass('on')
  // }
  // if(scrTop+100>=h*4){
  //     $('.nav li').removeClass('on')
  //     $('.nav li').eq(4).addClass('on')
  // }

  // for(let i=0;i<count;i++){
  //     if(scrTop>=h*i && scrTop<h*1+i){
  //         $('.nav li').removeClass('on')
  //         $('.nav li').eq(i).addClass('on')
  //     }
  // }

  let scrTop = $(this).scrollTop();
  $("article").each(function (i) {
    //아티클 위치값 갯수만큼 구할거야 (0번째부터 갯수만큼)
    let artTop = $(this).offset().top;
    //각각의 아티클의 시작점이 윈도우에서 얼마나 떨어져있나
    if (scrTop >= artTop) {
      $(".nav li").removeClass("on");
      $(".nav li").eq(i).addClass("on");
    }
  });
});

//마우스휠 컨트롤
//자바스크립트
document.querySelectorAll("article").forEach(function (article) {
  article.addEventListener("wheel", function (e) {
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
      let artTop = target.offsetTop;
      window.scrollTo({ top: artTop, behavior: "smooth" });
    }
  });
});
