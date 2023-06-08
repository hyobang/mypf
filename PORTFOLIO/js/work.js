var swiper = new Swiper(".workThum", {
  spaceBetween: 60,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",    
  },  
});

var work = new Swiper(".work", {
  spaceBetween: 10,
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});



work.on("slideChange", function () {
  var idx = work.activeIndex;

  $(".workThum .swiper-slide").removeClass("on");
  $(".workThum .swiper-slide").eq(idx).addClass("on");

  $(".text li").removeClass("on");

  setTimeout(function() {
    $(".text li").eq(idx).addClass("on");
    $(".text li").eq(idx).find(".highlight").addClass("on");
  }, 300);
});


