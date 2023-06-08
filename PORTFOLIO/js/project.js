

$(".link").click(function (e) {
  e.preventDefault();
  $(".link").removeClass("on");
  $(this).addClass("on");
});

//.project_desc li에 트랜지션 주는 것
$(".desc li").eq(0).animate({ top: "10%", opacity: "1" }, 900);
$(".desc li").eq(0).addClass("on");
$(".highlight1").addClass("on");
$(".highlight2").addClass("on");

// name li를 클릭했을 때 이벤트
let sw = 0;

$(".name li").click(function () {
  $(".name li").removeClass("on");
  $(this).addClass("on");

  let idx = $(this).index();

  $(".desc li")
    .eq(sw)
    .animate(
      {
        top: "-100%",
        opacity: "0",
      },
      1000,
      function () {
        $(".desc li").eq(idx).animate({ top: "10%", opacity: "1" });
        sw = idx;
      }
    );
  $(".desc li").animate({ top: "0%", opacity: "0" });
  $(".slideWrap").animate({ marginLeft: idx * -100 + "%" }, 900);

  $(".highlight1").removeClass("on");
  $(".highlight2").removeClass("on");
  setTimeout(function(){
    $(".highlight1").addClass("on");
    $(".highlight2").addClass("on");
  }, 1000);
});

