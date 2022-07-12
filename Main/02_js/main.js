// resize 시
$(window).on('resize',function(e){
    resize_e(e);
});
$(window).trigger('resize'); // resize event 강제 실행

// scroll 시
$(window).on('scroll',function(e){
    scroll_e(e);
});

// logo click
$('.logo').click(function(){
    reset_opt(); // 첫 상태로 reset ( 맨위로 이동 )
});

// call close_btn click 
$('#Call .close_btn').click(function(){
    $('.call').removeClass('on');
    $('#Call').animate({height:'0'},400,function(){
        $('#Call').children('table').animate({opacity:'0'},400);
    });
});

// nav click
$('.nav').on('click','li',function(){
    var [win_w, win_h, win_t, header_h, home_h] = size_check(); // size 체크
    var [toContent_t, toContent_h] = size_check($(this).text()); // content 상위 포인트와 높이 체크

    if($('.call').hasClass('on') == false){ // Call이 click이 안 되어 있다면
        $('.nav li').removeClass('on');
        $(this).addClass('on');

        if($(this).hasClass('call') == true){ // Call을 click 한거라면
            $('#Call').animate({height:'15rem'},400,function(){ // Call Menu 열기
                $('#Call').children('table').animate({opacity:'1'},400);
            });
        }else{ 
            if(win_w > 768){ // pc 버젼
                $('html').animate({scrollTop:((toContent_t + win_h) - (toContent_h / 2 + win_h))},500); // 아니라면 해당 개체로 이동
            }else { // 모바일
                $('html').animate({scrollTop: toContent_t - ( win_h / 3 ) },500); // 아니라면 해당 개체로 이동
            }
        }
    }else { // Call이 click이 되어 있다면
        $('.nav li').removeClass('on');
        $('.call').addClass('on'); // call class on
        $(this).addClass('on'); // 선택한 class on

        if(win_w > 768){ // pc 버젼
            $('html').animate({scrollTop:((toContent_t + win_h) - (toContent_h / 2 + win_h))},500); // 아니라면 해당 개체로 이동
        }else { // 모바일
            $('html').animate({scrollTop: toContent_t - ( win_h / 3 ) },500); // 아니라면 해당 개체로 이동
        }
    }
});


// scroll 시
var isStop = false; // 한번만 실행되게 하기
var drawing = true; // 그래프 중첩 현상
function scroll_e(e){
    var [win_w, win_h, win_t, header_h, home_h] = size_check(); // size 체크
    var [toContent_t, toContent_h] = size_check('Skill'); // content 상위 포인트와 높이 체크

    if(win_w > 768){
        if(win_t <= (home_h - header_h)){ // header의 위치가 home content 영역을 벗어나면
            $('#header').removeClass('trans_h');
        }else {
            $('#header').addClass('trans_h');
        }

        if(isStop == false) { // 실행 멈춤이 안 되어 있고
            if(win_t > (home_h / 3 * 2 ) && win_t < toContent_t + (toContent_h / 2)){ // 이 구역에 들어 왔을 때
                drawing = true; // draw 실행
                skill_draw(); // draw 실행
            }else{}
        }else { // 실행멈춤이 되어 있고
            if(win_t < (home_h / 3 * 2 ) || win_t > toContent_t + toContent_h){ // 위 구역을 벗어 나면
                drawing = false; // draw 멈춤
                isStop = false; // 실행 멈춤을 취소
            }else{}
        }
    }else {

    } 
}

// resize 시
function resize_e(e){
    reset_opt();
    square_opt('#Portpolio table td') // portpolio td 정사각형 설정
    square_opt('#Skill table tr:first-child td') // skill td 정사각형 설정
}

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

// skill pie 설정
function skill_draw(){
    var percent = []; // percent 값 배열 선언
    var percent_color = ['#ff8a00','#003cff','#00ff66','#009cff']; // td percent color 색상 결정
    var skill_td = $('#Skill table tr').eq(0).children('td'); // pie td 구역

    for(var i = 0; i < skill_td.length; i++){ 
        percent.push(skill_td.eq(i).children('.percent').data('per')); // td data-per 값 추출하여 percent 배열에 push
        draw(percent[i], i, percent_color[i], skill_td);
    }
    isStop = true; // 더이상 실행x
}


// skill pie draw
function draw(max, td_n, color_n, class_n){
    var i = 1;
    var set_i = setInterval(function(){
        if(i<=max){     
            if(drawing == true){
                class_n.eq(td_n).css('background','conic-gradient('+color_n+' 0% '+i+'%, rgba(0,0,0,0.1) '+i+'% 100%)'); // 원 채우기
                class_n.eq(td_n).children('.percent').text(i +'%'); // percent text 값 증가
                i++;
            }else {clearInterval(set_i);}
        }else {
            clearInterval(set_i);
        }
    },20);
    
}

// 정사각형 설정
function square_opt(name){
    var name_w = $(name).width(); // 설정한 class name의 width값 생성
    $(name).height(name_w); // 그 설정한 class name의 height값에 width을 대입
}

// reset
function reset_opt(){ // 첫 상태
    $('#header').removeClass('trans_h'); // 생성된 header class 삭제
    $('.nav li').removeClass('on');
    $('.nav li').eq(0).addClass('on'); // 첫 nav click 설정

    $('#Call').animate({height:'0'},400,function(){ // Call menu 닫기
        $('#Call').children('table').animate({opacity:'0'},400);
    });

    $('html').animate({scrollTop:'0'},400); // 맨 위로 이동
}