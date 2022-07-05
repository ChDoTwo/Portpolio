$('html').animate({scrollTop:'0'},10,function(){
    $('#portpolio .footer').addClass('on');
});

// /* 새로 고침 or 첫 화면 가장 맨위 + 살짝 무빙 */
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