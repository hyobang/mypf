//버튼 눌렀을때 스위치 버튼에 불 들어오게 하는거
let swBar = 0;
$(".bar").click(function () {
  swBar = !swBar;
  if (swBar) {
    $(this).addClass("on");
  } else {
    $(this).removeClass("on");
  }
  $(".menu").stop().slideToggle();
});


let swLogin = 0; //초기값을 거짓
$(".loginBtn").click(function () {
  swLogin = !swLogin; //기존에 반대값을 저장
  if (swLogin) {
    $(this).addClass("on");
  } else {
    $(this).removeClass("on");
  }
  $(".formWrap").stop().slideToggle();
});


$('.arrow').click(function(){
    //event 시점 현재 기준
    $(this).parent('.product-header').next().stop().slideToggle()
});



$('.thumnail li').click(function(e){
   // 클릭한 li 값의
  e.preventDefault();

  let idx=$(this).index()
  //index값을 불러온다
  console.log(idx);
  //잘 나오나 확인
  $(this).parents('.product').find('.product-name li').hide() //조상님의 자식 li는 안보여라
  $(this).parents('.product').find('.product-name li').eq(idx).show() //조상님의 자식 li에서 idx값만 찾아서 보여줘라
  $(this).parents('.product').find('.product-summary li').hide()
  $(this).parents('.product').find('.product-summary li').eq(idx).show()

  
  let href=$(this).find('a').attr('href')// href값을 찾아줘
  //클릭은 li  이미지값은 a가 가지고 있으므로 find
  //href는 변수에 저장=a의 이미지속성값을 가져온다 attr('a')
  console.log(href);
 
  $(this).parents('.product').find('figure img').attr({'src':href})
  //클릭한값의 조상인 .product 피규어 안에 이미지를 찾아서 src 속성을 href 값을 변경해라
  //herf 값이 잘 나오나 확인해보기
  $(this).siblings('li').removeClass('on')
  //다른 요소에도 메뉴의 li값이 존재 하므로
  //클릭한 시점의 형제 들만 안보이게 한다

  $(this).addClass('on')
  //클릭한 값을 보여라
})


// arror클릭
// 1.클릭한 시점의 있는 상세보기 슬라이드 down

// 상품목록 [li]를 클릭하면 [a]

// 1. e.preventDefault();
// 2. 클릭한 시점의 상품목록 removeClass
// 3. 클릭한 시점 addClass
// 4. href=클릭한 li의 [하위에 있는 a]의 속성값을 읽어라
// 5.클릭한 시점 부모 [product] 자식 figure img 찾아서
// img의 src 속성값을 href 값으로 변경해줘


// 6. idx=li의 클릭 순서를 가져와서

// 7. 클릭한 시점의 활성화 되어 있는 상품 이름을 숨겨라
// 8. 클릭한 시점의 상품 이름의 li[idx]의 값을 보여줘

// 9. 클릭한 시점의 활성화 되어 있는 상품 상세내용 숨겨라
// 10. 클릭한 시점의 상품 상세내용의 li[idx]값을 보여줘

