/* 반응형 */
var mHtml = $("html"); 
var page = 1;

$(window).on('resize',function(e){ // 화면이 resize 되면 wheel_e 함수 실행
    wheel_e(e);
});

$(window).on("wheel", function(e) { // wheel 작동 시 wheel_e 함수 실행
    wheel_e(e);    
});

/* wheel event */
function wheel_e(e){
    var win_w = $(window).width(); // 현재 window의 width값 계산
    if(win_w > 768) { // width값이 768px 이상일때만 작동
        if(mHtml.is(":animated")) return; // 움직이고 있을땐 작동 x
        if(isStop != false) return; // 햄버거 버튼 클릭시 작동 x
        if(e.originalEvent.deltaY > 0) { // 아래로 이동
            if(page == ($('.footer').index()+1)) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) { // 위로 이동
            if(page == 1) return;
            page--;
        }
        var posTop = (page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop},800);

        /* animation */
        for(var i=2;i<$('.footer').index()+1;i++){
            if(i == page){
                $('.content').eq(page-1).addClass('on');
            }
        };   

        /* (PC버젼) top_btn main에서는 안보이고 section에서부터 보임 */
        if(page == 1){
            $('.top_btn').hide(800);
        }else {
            $('.top_btn').show();
        };

    }else {
        /* 모바일 버전에서는 animation 정지 */
        for(var i=1;i<$('.footer').index()+1;i++){
            $('.content').eq(i).addClass('on');
        };   
    };
}

/* wheel event 강제 실행 */
$(window).trigger('resize'); // 첫 실행하면 wheel_event 실행



/* Roading */
setTimeout(function(){
    $('#Road').hide();
    $('.main_middle').addClass('show');
    mHtml.animate({scrollTop : 0},10); // html 상위 이동
},3100);


/* top_btn click시 상위 이동 */
$('.top_btn').on('click',function(){
    mHtml.animate({scrollTop : 0},500);
    page = 1;
    $('.top_btn').hide(500);
});

  
/* main */
var main_bg = 1;
var isStop = false;
function bg_change() { 
    $('#main_season > span').removeClass('on');
    $('#main').animate({opacity: '0.5'},500,function(){
        $('#main').css('backgroundImage','url("00_image/00_main/bg_0'+main_bg+'.jpg")');
        $('#main').animate({opacity:'1'},1500);
        $('#main_season > span').eq((main_bg-1)).addClass('on');
    });
};
var interval = setInterval(function(){
    if (!isStop){
        main_bg++;
        if(main_bg <= 4){
            bg_change();
            
        }else {
            main_bg = 1;
            bg_change();
        }
    }
},5000);


/* hamburger menu click */
$('.hamburger').click(function(){
    $('.hamburger_menu').show(500);
    isStop = true;
});
$('.hamburger_close').click(function(){
    $('.hamburger_menu').hide(50);
    isStop = false;
});
$('.hamburger_menu a').click(function(){
    var menu_i = $(this).index();
    $('.hamburger_menu').hide(50);
    page = menu_i + 2;
    isStop = false;
});


/**** Swiper */
/* Spring */
var spring_swiper = new Swiper('#spring .swiper-container',{
    grabCursor: true,
    slidePerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '#spring .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="'+className+'"><img src="00_image/01_spring/slide_0'+(index+1)+'.jpg" alt="" /></span>';
        },
    },
    on:{
        slideChange: function(){
            $('#spring .slide_txt').removeClass('visible');
            $('#spring .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});

/* Summer */
var summer_swiper = new Swiper('#summer .swiper-container',{
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        1200: {
            spaceBetween: 100,
        },
        768: {
            spaceBetween: 50,
        },
        640: {
            spaceBetween: 100
        }
    },
    on:{
        slideChange: function(){
            $('#summer .slide_txt').removeClass('visible');
            $('#summer .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});

/* Fall */
var fall_swiper = new Swiper('#fall .swiper-container',{
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: "#fall .swiper-button-next",
        prevEl: "#fall .swiper-button-prev",
    },
    on:{
        slideChange: function(){
            $('#fall .slide_txt').removeClass('visible');
            $('#fall .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});

/* Winter */
var winter_swiper = new Swiper('#winter .swiper-container',{
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    on:{
        slideChange: function(){
            $('#winter .slide_txt').removeClass('visible');
            $('#winter .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});
