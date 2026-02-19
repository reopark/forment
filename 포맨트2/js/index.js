/* header */
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $('header').addClass('fixed')
        } else {
            $('header').removeClass('fixed')
        }
    })

    $('.fa-magnifying-glass').click(function() {
        $('.search').css({display : 'block'})
    })

    $('.close').click(function() {
        $('.search').css({display : 'none'})
    })
})

/* section1 */
$(function() {
    const $color = $('.section1 .right .bar .color');

    var swiper1 = new Swiper(".s1-swiper", {
        slidesPerView : 4,
        spaceBetween : 20,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 4
            }
        },
        navigation : {
            nextEl: ".section1 .next",
            prevEl: ".section1 .prev",
        },
        on: {
            init: function () {
            updateBar(this);
            },
            slideChange: function () {
            updateBar(this);
            }
        }
    });

    function updateBar(swiper){
        let total = swiper.slides.length;          
        let spv = swiper.slidesPerViewDynamic();    
        let current = swiper.activeIndex;           

        let percent = ((current + spv) / total) * 100;

        $('.section1 .right .bar .color').css('width', percent + '%');
    }

    $('.section1 .icon1').on('mouseenter', function () {
        $(this).find('.fa-regular').hide();
        $(this).find('.fa-solid').show();
    });

    $('.section1 .icon1').on('mouseleave', function () {
        $(this).find('.fa-regular').show();
        $(this).find('.fa-solid').hide();
    });
})

/* section4 */
$(function() {
    var swiper4 = new Swiper(".s4-swiper", {
        slidesPerView : 4,
        spaceBetween : 20,
        speed: 600,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            560: {
                slidesPerView: 2.2,
                spaceBetween: 18,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 22,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        },
        navigation:{
            nextEl:'.s4_area .next',
            prevEl:'.s4_area .prev',
        },
    });
})