
$('.tab .wrap').removeClass('show');
$('.tab .wrap').eq(0).addClass('show');

$('#Example .tab_menu').on('click','li',function(){
    var tab_i = $(this).index();

    $('.tab .wrap').removeClass('show');
    $('.tab .wrap').eq(tab_i).addClass('show');
});