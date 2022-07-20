/* 찾기 텍스트 클릭 시 안내 문 삭제 */
$('#find_box').on('click',function(){
    $('#find_box').val(null);
});

/* 카테고리 링크 */
function JumpLink(str){
    location.href = '/00_include/'+str+'/index.html';

    // location.replace('/00_include/'+str+'/index.html');
};

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