function mainHide(){
    // 배치한 컨텐츠들을 원하는값에따라 이동시키기 위해
    $('main video').animate({top:'-1000px'}) //비디오
    // delay는 지연시간을 뜻한다. 500은 0.5초 후에 작동해라 라는 뜻
    $('main .btn').delay(500).animate({ bottom:'-1000px'}) //버튼
    //메인이미지
    $('.mainimg').delay(1000).animate({'margin-left':'600px'},function(){
     lineShow()
    });
}

function mainShow(){
    $('main video').delay(500).animate({top:'0'})
    $('main .btn').delay(1000).animate({ bottom:'-62px'})
    $('.mainimg').delay(1500).animate({'margin-left':'311px'})
    
}
function lineShow(){
    // callback기능은 '이전 기능을 실행한 다음 function 다음의
    // 기능을 실행해라'라는 뜻이다.
$('span.top').animate({'width':'100%'},function(){
    $('span.right').animate({'height':'100%'},function(){
        $('span.bottom').animate({'width':'100%'},function(){
            $('span.left').animate({'height':'100%'},function(){
                $('.storywrap').animate({'opacity':'1'})
            })
        })
    })
})
}
// callback기능을 제거
function lineHide(){
    $('span.top').animate({'width':'0%'});
    $('span.right').animate({'height':'0%'});
    $('span.bottom').animate({'width':'0%'});
    $('span.left').animate({'height':'0%'}), 
    $('.storywrap').animate({'opacity':'0'},function(){
        $('article').removeClass('on');
    })
    
    mainShow()

}

function recipeShow(){
    $('#recipe').show().animate({'height':'354px'}, 500);
}

function recipeHide(){
    $('#recipe').animate({'height':'0'},function(){
        $('#recipe').hide();
        $('article').removeClass('on');
    });
    mainShow();
    lineShow();
}

$('a.story').click(function (e){
      e.preventDefault();    
      $('article').removeClass('on')
      $('#story').addClass('on')
    mainHide();
    lineShow();
});

$('a.recipe').click(function (e){
       e.preventDefault();    
        $('article').removeClass('on')
        $('#recipe').addClass('on')
    mainHide();
    recipeShow();
});


$('a.storyclose').click(function(){
    lineHide();
});
$('a.recipeclose').click(function(){
    recipeHide();
});

