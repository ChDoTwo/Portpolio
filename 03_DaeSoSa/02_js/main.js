// 카테고리 링크
function JumpLink(str){
    location.href = '/00_include/'+str+'/';
};

// resize event
$(window).on('resize',function(e){
    resize_e(e);
});
$(window).trigger('resize'); // resize event 강제 실행

// scroll event
$(window).on('scroll',function(e){
    scroll_e(e);
});

// header hover event
$('#top_header').hover(function(){
    if($('#top_header').hasClass('fixed') == true) $('#nav').stop().slideDown(); // 스크롤을 내린 상태에서 마우스를 올리면
},function(){
    if($('#top_header').hasClass('fixed') == true) $('#nav').stop().slideUp(); // 스크롤을 내린 상태에서 마우스를 때면
});

// 찾기 텍스트 클릭 시 안내 문 삭제 
$('#find_box').on('focus focusout',function(){
    find_box();
});









// 배너
var Swiper_banner = new Swiper('#banner .swiper-container',{
    slidesPerView: "auto",
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#banner .swiper-pagination",
        clickable: true,
    },
});

// resize event
function resize_e(e){   
    reset_opt();
}

// scroll event
function scroll_e(e){
    var [win_w, win_h, win_t] = size_check(); // size 체크
    var content_h = $('#top_header').height(); // header 높이

    if(win_w > 768){
        if(win_t > content_h){ // header fixed 설정
            $('#top_header').addClass('fixed');
            $('#nav').removeAttr('style');
            $('#nav').stop().slideUp(0);
        }else{
            $('#top_header').removeClass('fixed');
            $('#nav').removeAttr('style');
            $('#nav').stop().slideDown(200);
        }
    }else{

    }
    
}

// 찾기 텍스트 event
function find_box(){
    var findbox_val = $('#find_box').val();

    if(findbox_val == '동네 이름, 물품명 등을 검색해보세요!'){
        $('#find_box').val(null);
    }else if(findbox_val == ''){
        $('#find_box').val('동네 이름, 물품명 등을 검색해보세요!');
    }else{}
}


// size 확인
function size_check(name){
    if (name == undefined){ // 아무것도 입력하지 않았을 경우
        var win_w = $(window).innerWidth(); // 크기 변경시 자동 width 값 계산
        var win_h = $(window).innerHeight(); // window height
        var win_t = $(window).scrollTop(); // window scroll 위치

        return [win_w, win_h, win_t];
    }else {
        var toContent_t = $('#'+name).offset().top; // 선택한 name 상위 포인트
        var toContent_h = $('#'+name).height(); // 선택한 name 높이

        return [toContent_t, toContent_h];
    }
}

// reset 설정
function reset_opt(){ // 첫 상태
    $('#header').removeClass('fixed'); // 생성된 header class 삭제

    $('html').animate({scrollTop:'0'},400); // 맨 위로 이동
}
