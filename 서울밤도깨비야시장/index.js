//헤더bg 컬러변경
const headerBg = [
  "#1e2c5a",
  "#1e2c5a",
  "#ee781f",
  "#ffe100",
  "#7057a3",
  "#eb6ea5",
  "#c4d700",
  "#00341f",
];


//메뉴 이미지 배열
const h1Img = ['header_nav_logo_y.png', 'header_nav_logo_n.png', 'header_nav_logo_w.png']
const menu_y = ['header_nav_menu_introduce_y.png','header_nav_menu_yyd_y.png','header_nav_menu_banpo_y.png','header_nav_menu_ddp_y.png','header_nav_menu_cgc_y.png','header_nav_menu_season_market_y.png','header_nav_menu_cm_y.png']
const menu_n = ['header_nav_menu_introduce_n.png','header_nav_menu_yyd_n.png','header_nav_menu_banpo_n.png','header_nav_menu_ddp_n.png','header_nav_menu_cgc_n.png','header_nav_menu_season_market_n.png','header_nav_menu_cm_n.png']
const menu_w = ['header_nav_menu_introduce_w.png','header_nav_menu_yyd_w.png','header_nav_menu_banpo_w.png','header_nav_menu_ddp_w.png','header_nav_menu_cgc_w.png','header_nav_menu_season_market_w.png','header_nav_menu_cm_w.png']

const sns_y = ['sns_facebook_icon_y.png','sns_insta_icon_y.png','sns_youtube_icon_y.png']
const sns_n = ['sns_facebook_icon_n.png','sns_insta_icon_n.png','sns_youtube_icon_n.png']
const sns_w = ['sns_facebook_icon_w.png','sns_insta_icon_w.png','sns_youtube_icon_w.png']


let headerElem = document.querySelector("header");
headerElem.style.backgroundColor = headerBg[0];


let menuElem = headerElem.querySelectorAll(".menu li"); // 메뉴값 가져오기
let snsElem = headerElem.querySelectorAll(".sns li"); // sns값 가져오기
let sectionElem = document.querySelectorAll("section"); // 섹션값 가져오기 > document값으로 찍어야함

let home = document.querySelector('a.home')

//메뉴 애니메이션
menuElem.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    let href = li.querySelector("a").getAttribute("href");
    let secTop = document.querySelector(href).offsetTop;
    window.scrollTo({ top: secTop, behavior: "smooth" });
  });
});

window.addEventListener('scroll',function(){
let scrTop=window.scrollY // 스크롤의 위치값
sectionElem.forEach((section, i) => {
    let secTop = section.offsetTop // 각 section 시작값
    console.log(secTop + '<=>' + scrTop)
    // 스크롤 탑 값이 각각의 섹션값보다 크면
    if(scrTop >= secTop){
        headerElem.style.backgroundColor = headerBg[i];

        if (i == 0 || i == 1 || i == 4) {
            headerElem.querySelector('h1 img').setAttribute('src', './img/' + h1Img[0])
            menuElem.forEach((li, j) => {
                li.querySelector('img').setAttribute('src', './img/' + menu_y[j])
            })
            snsElem.forEach((li, k) => {
                li.querySelector('img').setAttribute('src', './img/' + sns_y[k])
            })

        }  else if (i == 2 || i == 3 || i == 5 || i == 6) {
            headerElem.querySelector('h1 img').setAttribute('src', './img/' + h1Img[1])
            menuElem.forEach((li, j) => {
                li.querySelector('img').setAttribute('src', './img/' + menu_n[j])
            })
            snsElem.forEach((li, k) => {
                li.querySelector('img').setAttribute('src', './img/' + sns_n[k])
            })

        } else {
            headerElem.querySelector('h1 img').setAttribute('src', './img/' + h1Img[2])
            menuElem.forEach((li, j) => {
                li.querySelector('img').setAttribute('src', './img/' + menu_w[j])
            })
            snsElem.forEach((li, k) => {
                li.querySelector('img').setAttribute('src', './img/' + sns_w[k])
            })
        }
    }
})

if(scrTop>=1000){
    home.style.opacity=1
}else{
    home.style.opacity=0
}
})

home.addEventListener('click',function(e){
    e.preventDefault()
    window.scrollTo({ top : 0, behavior: 'smooth'})
    
})



