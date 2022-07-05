/* 새로 고침 or 첫 화면 가장 맨위 + 살짝 무빙 */
$('html').animate({scrollTop:'0'},10,function(){
    $('.content_area').addClass('on');
});


/* Header */
$(window).on('scroll',function(){
    if($(window).scrollTop() == 0){
        $('#Header').removeClass('Top_fixed');
    }else {
        $('#Header').addClass('Top_fixed');
    }
});


/* Example Tab Menu */
class_opt('.tab .wrap',0);
class_opt('.tab_list li',0);
$('#Example .tab_list').on('click','li',function(){
    var tab_i = $(this).index();

    class_opt('.tab .wrap',tab_i);
    class_opt('.tab_list li',tab_i);
});


/* Gallery */
class_opt('#Gallery .image_box',0);
$('#Gallery .image_box').on('click',function(){
    var box_i = $(this).index();

    $('#Gallery .main_image').animate({'opacity':0},50,function(){   // 깜빡임 표현
        $('#Gallery .main_image').animate({'opacity':1},350)
    });
    $('#Gallery .main_image').html($(this).html()); // main image 변경
    class_opt('#Gallery .image_box',box_i); // .image_box show evnet
});


/* class_opt */
function class_opt(name, i) {
    $(name).removeClass('show');
    $(name).eq(i).addClass('show');
}
