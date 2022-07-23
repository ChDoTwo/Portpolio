// scroll event
$(window).on('scroll',function(e){
    scroll_e(e);
});

// scroll event
function scroll_e(e){
    var [win_w, win_h, win_t, header_h, home_h] = size_check(); // size 체크
    var content_h = $('#top_header').height(); // header 높이

    if(win_w > 768){
        if(win_t == 0) { // 최상위일때 nav 조정
            $('#nav').slideDown();
        }else {
            $('#nav').slideUp();
        }

        if(win_t > content_h){ // header fixed 설정
            $('#top_header').addClass('fixed');
        }else{
            $('#top_header').removeClass('fixed');
        }
    }else{

    }
    
}

// header hover event
$('#top_header').hover(function(){
    header_hover(true);
},function(){
    header_hover(false);
});
// header hover event
function header_hover(ms){
    if($('#top_header').hasClass('fixed') == true){ // top_header 에 fixed class가 있는지
        if(ms == true) $('#nav').slideDown();
        if(ms == false) $('#nav').slideUp();
    }else {

    }
}


/* 찾기 텍스트 클릭 시 안내 문 삭제 */
$('#find_box').on('focus',function(){
    $('#find_box').val(null);
});

/* 카테고리 링크 */
function JumpLink(str){
    location.href = '/00_include/'+str+'/';

    // location.replace('/00_include/'+str+'/index.html');
};

// size 확인
function size_check(name){
    if (name == undefined){ // 아무것도 입력하지 않았을 경우
        var win_w = $(window).innerWidth(); // 크기 변경시 자동 width 값 계산
        var win_h = $(window).innerHeight(); // window height
        var win_t = $(window).scrollTop(); // window scroll 위치
        var header_h = $('#header').height();
        var home_h = $('#Home').height();

        return [win_w, win_h, win_t, header_h, home_h];
    }else {
        var toContent_t = $('#'+name).offset().top; // 선택한 name 상위 포인트
        var toContent_h = $('#'+name).height(); // 선택한 name 높이

        return [toContent_t, toContent_h];
    }
}


/* 배너 */
var Swiper_banner = new Swiper('#banner .swiper-container',{
    slidesPerView: "auto",
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