// 카테고리 링크
function JumpLink(str){
    location.href = '/03_DaeSoSa/03_include/'+str+'/';
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
var header_scroll = false; // 스크롤 여부 (현 상태 = 상위)
$('#top_header').hover(function(){
    if(header_scroll != false){ // 스크롤 내렸다면
        header_hover(true);
    }else{}
},function(){
    if(header_scroll != false){
        header_hover(false); // 스크롤 내렸다면
    }else{}
});

// 텍스트 박스 클릭 시 안내 문 삭제 
$('#find_box, #id_box, #pw_box').on('focus focusout',function(){
    var n = $(this).attr('id');
    text_box(n);
});

// tab menu click event
$('.tab_menu').on('click','li',function(){
    var tab_i = $(this).index(); // li index 값 추출
    var content_n = $(this).parents('.content').attr('id'); // click 한 tab 요소의 section 찾기

    tab_menu(tab_i, content_n, this);
});







// swiper
var swiper_opt = {
    slidesPerView: "auto",
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".content .swiper-pagination",
        clickable: true,
    },
};
var Main_banner = new Swiper('#banner .swiper-container', swiper_opt);
var sub_banner_00 = new Swiper('#sub_banner_00 .swiper-container', swiper_opt);
var sub_banner_01 = new Swiper('#sub_banner_01 .swiper-container', swiper_opt);
var sub_banner_02 = new Swiper('#sub_banner_02 .swiper-container', swiper_opt);
var sub_banner_03 = new Swiper('#sub_banner_03 .swiper-container', swiper_opt);
var sub_banner_04 = new Swiper('#sub_banner_04 .swiper-container', swiper_opt);
var sub_banner_05 = new Swiper('#sub_banner_05 .swiper-container', swiper_opt);
var sub_banner_06 = new Swiper('#sub_banner_06 .swiper-container', swiper_opt);

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
            header_scroll = true;
            $('#top_header').addClass('fixed');
            $('#nav').stop().slideUp(0);
        }else{
            header_scroll = false;
            $('#top_header').removeClass('fixed');
            $('#nav').stop().slideDown(0);
        }
    }else{

    }
    
}

// header hover event
function header_hover(ms){
    if(ms == true){ // 마우스 올린 상태
        $('#nav').stop().slideDown(400);
    }else{ // 마우스 땐 상태
        $('#nav').stop().slideUp(400);
    }
}

// 찾기 텍스트 event
function text_box(id_n){
    var name = "#" + id_n;
    var box_val = $(name).val();
    

    if(box_val == '동네 이름, 물품명 등을 검색해보세요!' || box_val == 'ID'){
        $(name).val('');
    }else if(box_val == 'PASSWORD'){
        $(name).prop('type','password');
        $(name).val('');
    }else if(box_val == ''){
        if(name == '#find_box'){
            $(name).val('동네 이름, 물품명 등을 검색해보세요!');
        }else if(name == '#id_box'){
            $(name).val('ID');
        }else if(name == '#pw_box'){
            $(name).val('PASSWORD');
            $(name).prop('type','text');
        }
    }
}

// tab menu click event
function tab_menu(i, name, tab_n){
    // tab list 효과
    $('#'+name).find('.tab_menu').children('li').removeClass('on'); // 해당 tab content에서 tab menu list 효과 종료
    $(tab_n).addClass('on'); // 해당 list 효과만 적용

    // tab item box 교체
    $('#'+name).find('.item_box').removeClass('on');
    $('#'+name).find('.item_box').eq(i).addClass('on');
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
    $('.tab_menu li').removeClass('on'); // 모든 tab menu list 효과 종료
    $('.tab_menu li').eq(0).addClass('on'); // 첫번째 list에게만 적용


    $('html').animate({scrollTop:'0'},400); // 맨 위로 이동
}


/* product copy */
for(var i=0; i<30; i++){
    $('#products ul li').eq(0).clone().appendTo('#products ul');
    $('#products_4 ul li').eq(0).clone().appendTo('#products_4 ul');
    $('#products_5 ul li').eq(0).clone().appendTo('#products_5 ul');

}
