$(function() {
    var swiper = new Swiper(".section1 .mySwiper", {
        slidesPerView : 4,
        spaceBetween : 20,
        navigation : { 
            prevEl : '.section1 .swiper-button-prev',
            nextEl : '.section1 .swiper-button-next'
        },
    });
})