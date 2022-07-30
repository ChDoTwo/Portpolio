// 배너
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
var sub_banner_00 = new Swiper('#sub_banner_00 .swiper-container', swiper_opt);
var sub_banner_01 = new Swiper('#sub_banner_01 .swiper-container', swiper_opt);
var sub_banner_02 = new Swiper('#sub_banner_02 .swiper-container', swiper_opt);
var sub_banner_03 = new Swiper('#sub_banner_03 .swiper-container', swiper_opt);
var sub_banner_04 = new Swiper('#sub_banner_04 .swiper-container', swiper_opt);
var sub_banner_05 = new Swiper('#sub_banner_05 .swiper-container', swiper_opt);
var sub_banner_06 = new Swiper('#sub_banner_06 .swiper-container', swiper_opt);


/* product copy */
for(var i=0; i<49; i++){
    $('#products ul li').eq(0).clone().appendTo('#products ul');
    console.log($('#products ul li').eq(0));
}