// 스와이퍼 설정
var swiper = new Swiper(".about", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 260,
    modifier: 1,
    slideShadows: false,
  },
});

var tabsMenuLinks = document.querySelectorAll('.tabs_menu li a');
var barsAnimated = false;

swiper.on('slideChange', function () {
  var activeIndex = swiper.activeIndex;

  // 모든 탭에서 'on' 클래스 제거
  for (const tab of tabsMenuLinks) {
    tab.parentNode.classList.remove('on');
  }
  // 활성 탭에 'on' 클래스 추가
  tabsMenuLinks[activeIndex].parentNode.classList.add('on');

  // 모든 강조 요소에서 'on' 클래스 제거
  var highlightElements = document.querySelectorAll('.swiper-slide .highlight');
  for (const highlight of highlightElements) {
    highlight.classList.remove('on');
  }
  // 현재 슬라이드의 강조 요소에 'on' 클래스 추가
  var activeSlide = swiper.slides[activeIndex];
  var highlights = activeSlide.querySelectorAll('.highlight');
  for (const highlight of highlights) {
    highlight.classList.add('on');
  }

  if (activeIndex === 2 && !barsAnimated) {
    const bars = document.querySelectorAll(".Bar");
    bars.forEach((bar) => {
      let initRate = 0;
      let rate = bar.dataset.rate;
      let skill = bar.querySelector(".rate");
      let span = bar.querySelector("span");

      let id = setInterval(() => {
        initRate++;
        if (rate == initRate) {
          clearInterval(id);
        }
        skill.style.width = `${initRate}%`;
        span.innerText = `${initRate}%`;
      }, 10);
    });
    barsAnimated = true;
  }
});

tabsMenuLinks.forEach(function (link, index) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(index, 500);
    for (const tab of tabsMenuLinks) {
      tab.parentNode.classList.remove('on');
    }
    this.parentNode.classList.add('on');

    // 모든 강조 요소에서 'on' 클래스 제거
    var highlightElements = document.querySelectorAll('.swiper-slide .highlight');
    for (const highlight of highlightElements) {
      highlight.classList.remove('on');
    }
    // 클릭된 슬라이드의 강조 요소에 'on' 클래스 추가
    var clickedSlide = swiper.slides[index];
    var highlights = clickedSlide.querySelectorAll('.highlight');
    for (const highlight of highlights) {
      highlight.classList.add('on');
    }

    if (index === 2 && !barsAnimated) {
      const bars = document.querySelectorAll(".Bar");
      bars.forEach((bar) => {
        let initRate = 0;
        let rate = bar.dataset.rate;
        let skill = bar.querySelector(".rate");
        let span = bar.querySelector("span");

        let id = setInterval(() => {
          initRate++;
          if (rate == initRate) {
            clearInterval(id);
          }
          skill.style.width = `${initRate}%`;
          span.innerText = `${initRate}%`;
        }, 10);
      });
      barsAnimated = true;
    }
  });
});
