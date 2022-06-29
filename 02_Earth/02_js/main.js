/* Header */
$(window).on('scroll',function(){
    if($(window).scrollTop() == 0){
        $('#Header').removeClass('Top_fixed');
    }else {
        $('#Header').addClass('Top_fixed');
    }
});


/* Example Tab Menu */
$('.tab .wrap').removeClass('show');
$('.tab .wrap').eq(0).addClass('show');

$('#Example .tab_menu').on('click','li',function(){
    var tab_i = $(this).index();

    $('.tab .wrap').removeClass('show');
    $('.tab .wrap').eq(tab_i).addClass('show');
});


/* Gallery */
$('#Gallery .image_box').on('click',function(){
    $('#Gallery .main_image').animate({'opacity':0},50,function(){   // 깜빡임 표현
        $('#Gallery .main_image').animate({'opacity':1},350)
    });
    $('#Gallery .main_image').html($(this).html());
});