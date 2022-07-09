/* 새로 고침 or 첫 화면 가장 맨위 + 살짝 무빙 */
var win_w = $(window).innerWidth();
var win_h = $(window).innerHeight(); // window height
var header_h = $('#header').height();
var home_h = $('#Home').height();

square_opt('#Portpolio table td') // portpolio td 정사각형 설정
square_opt('#Skill table tr:first-child td') // skill td 정사각형 설정

/* Header */
$(window).on('scroll',function(){
    var win_t = $(window).scrollTop(); // window scroll 위치

    if(win_t <= (home_h - header_h)){
        $('#header').removeClass('trans_h');
    }else {
        $('#header').addClass('trans_h');
    }
});

/* logo click */
var call_li = false; // Call Menu 클릭 여부 확인 변수
$('.logo').click(function(){
    reset_opt(); // 첫 상태로 reset
    $('html').animate({scrollTop:'0'},400); // 맨 위로 이동
});

/* nav click */
reset_opt();
$('.nav').on('click','li',function(){
    var li_i = $(this).index();
    var toContent_t = $('#'+$(this).text()).offset().top; // 선택한 li content 상위 포인트
    var toContent_h = $('#'+$(this).text()).height(); // 선택한 li content 높이

    if(li_i == 4){ // call click
        $('#Call').animate({height:'15rem'},400,function(){
            $('#Call').children('table').animate({opacity:'1'},400);
        });
        $(this).addClass('on');
        call_li = true;
    }else if(call_li == true) { // Call이 click이 되어 있다면
        class_opt('.nav li',3,'on'); // li event ( Call li는 꺼지지 않게 설정 )
        $(this).addClass('on');
        $('html').animate({scrollTop:((toContent_t + win_h) - (toContent_h + win_h))},500);
    }else if(call_li == false){ // Call이 click이 안 되어 있다면
        $('.nav li').removeClass('on'); // li event (li 다 꺼지게 설정)
        $(this).addClass('on');
        $('html').animate({scrollTop:((toContent_t + win_h) - (toContent_h + win_h))},500);
    }
});

/* skill */
var percent = []; // percent 값 배열 선언
var percent_color = ['#ff8a00','#003cff','#00ff66','#009cff']; // td percent color 색상 배열 선언
var skill_td = $('#Skill table tr').eq(0).children('td'); // pie td 구역

for(var i = 0; i < skill_td.length; i++){ 
    percent.push(skill_td.eq(i).children('.percent').data('per')); // td data-per 값 추출하여 percent 배열에 push
    draw(percent[i], i, percent_color[i]);
}


/* call close_btn click */
$('#Call .close_btn').click(function(){
    $('.nav li').eq(3).removeClass('on');
    call_li = false;
    $('#Call').animate({height:'0'},400,function(){
        $('#Call').children('table').animate({opacity:'0'},400);
    });
});

/* skill pie draw */
function draw(max, td_n, color_n){
    var i = 1;
    var set_i = setInterval(function(){
        if(i<=max){     
            skill_td.eq(td_n).css('background','conic-gradient('+color_n+' 0% '+i+'%, rgba(0,0,0,0.1) '+i+'% 100%)'); // 원 채우기
            skill_td.eq(td_n).children('.percent').text(i +'%'); // percent text 값 증가
            i++;
        }else {
            clearInterval(set_i);
        }
    },20);
}

/* 정사각형 설정 */
function square_opt(name){
    var name_w = $(name).width();
    $(name).height(name_w);
}

/* reset */
function reset_opt(){ // 첫 상태
    class_opt('.nav li',0,'on'); // 첫 nav click 설정
    call_li = false; // Call menu 클릭x
    $('#Call').animate({height:'0'},400,function(){
        $('#Call').children('table').animate({opacity:'0'},400);
    });
}

/* Remove Add class */
function class_opt(name, index, class_n){
    $(name).removeClass(class_n);
    $(name).eq(index).addClass(class_n);
}