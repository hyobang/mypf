$(".item").click(function () {
  $(".option").stop().slideUp();
  $(this).parent("p").next().stop().slideToggle();
});

$(".storyMenu li").mouseenter(function () {
  //마우스 enter한 li의 인덱스 값을 get 해서 변수에 저장한다
  let i = $(this).index(); //인덱스값을 가져온 기억장소 이름

  // banner 이미지가 겹쳐 있어 기존에 보여진 이미지는 안보이게 한다
  $(".storyBanner li").fadeOut('on')
  // storyBanner 의 변수번째를 보여라
  $(".storyBanner li").eq(i).fadeIn("on");

  // 기존 li에 class는 모두 해제한다
  $(".storyMenu li").removeClass("on");
  // li 클릭 할때마다 class를 지정한다
  $(this).addClass("on");
});
