/* 새로 고침 or 첫 화면 가장 맨위 + 살짝 무빙 */
// $('html').animate({scrollTop:'0'},10,function(){
//     $('.content_area').addClass('on');
// });

/* Header */
$(window).on('scroll',function(){
    if($(window).scrollTop() == 0){
        $('#header').removeClass('Top_fixed');
    }else {
        $('#header').addClass('Top_fixed');
    }
});

/* logo click */
var last_li = false; // Call Menu 클릭 여부 확인 변수
$('.logo').click(function(){
    reset_opt(); // 첫 상태로 reset
    $('html').animate({scrollTop:'0'},400); // 맨 위로 이동
});

/* nav click */
reset_opt();
$('.nav').on('click','li',function(){
    var li_i = $(this).index();

    if(li_i == 4){ // call click
        $('#call').animate({height:'15rem'},400,function(){
            $('#call').children('table').animate({opacity:'1'},400);
        });
        $(this).addClass('on');
        last_li = true;
    }else if(last_li == true) { // Call이 click이 되어있다면
        class_opt('.nav li',3,'on'); // li event ( Call li는 꺼지지 않게 설정 )
        $(this).addClass('on');
    }else if(last_li == false){
        $('.nav li').removeClass('on'); // li event (li 다 꺼지게 설정)
        $(this).addClass('on');
    }
});

/* skill */
var percent = []; // percent 값 배열 선언
var percent_color = ['#ff8a00','#003cff','#00ff66','#009cff']; // td percent color 색상 배열 선언
var skill_td = $('#skill table tr').eq(0).children('td'); // pie td 구역

for(var i = 0; i < skill_td.length; i++){ 
    percent.push(skill_td.eq(i).children('.percent').data('per')); // td data-per 값 추출하여 percent 배열에 push
    draw(percent[i], i, percent_color[i]);
}


/* call close_btn click */
$('#call .close_btn').click(function(){
    $('.nav li').eq(3).removeClass('on');
    last_li = false;
    $('#call').animate({height:'0'},400,function(){
        $('#call').children('table').animate({opacity:'0'},400);
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

square_opt('#portpolio table td') // portpolio td 정사각형 설정
square_opt('#skill table tr:first-child td') // skill td 정사각형 설정

/* reset */
function reset_opt(){ // 첫 상태
    class_opt('.nav li',2,'on'); // 첫 nav click 설정
    last_li = false; // Call menu 클릭x
    $('#call').animate({height:'0'},400,function(){
        $('#call').children('table').animate({opacity:'0'},400);
    });
}

/* Remove Add class */
function class_opt(name, index, class_n){
    $(name).removeClass(class_n);
    $(name).eq(index).addClass(class_n);
}