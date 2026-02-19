// section1 left
$(function() {
    $('.to_title').click(function() {
        $('.to_title').not(this)
        .removeClass('on')
        .next('.to_content')
        .hide();
    
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            $(this).next('.to_content').show()

        } else {
            $(this).next('.to_content').hide()
        }
    });
})


// section1 left 자세히보기
$(function () {
    $(document).on('click', '.detail_btn', function () {
        $('.section1 .left').toggleClass('is-open');

        const top = $('.section1 .right').offset().top;
        $('html, body').animate({ scrollTop: top - 80 }, 400);
    });
});

// section1 right
$(function() {
    $('.x_btn1').click(function() {
        $('.url_pop').css({display : 'none'})
    });
    $('.fa-share-nodes').click(function() {
        $('.url_pop').css({display : 'block'})
    })
    $('.url_pop .bg').click(function() {
        $('.url_pop').css({display : 'none'})
    })

    $('.to_title2').click(function() {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
        $(this).css({borderBottom : 'none'})
        $(this).next('.to_content2').show()

        } else {
            $(this).css({borderBottom : '1px solid #000'})
            $(this).next('.to_content2').hide()
        }
    });

    const defaultOpTitle = $('.op_title h6').text();

    $('.op_title').click(function() {
        $('.op_title h6').text(defaultOpTitle);
        $('.op_content').toggle();
    })


    let selectedOption = null;

    $('.op_content').on('click', '.sub', function () {

        // 값 가져오기
        const productTitle = $('.text_title h3').text(); // 상품명
        const optionText = $(this).text();               // 옵션
        const priceText = $('.right .text1 h6').text();         // 가격
        const count = 1;

    if (selectedOption === optionText) {
        alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.');
    }
    selectedOption = optionText;
    
        // table 보이기
        $('table').show();

        // table 내용 채우기
        $('.option_title').text(productTitle);
        $('.option_sub').text(optionText);
        $('.product_price').text(priceText);

        // 상단 옵션 타이틀 변경
        $('.op_title h6').text(optionText);

        // 하단 총 가격 영역
        $('.price strong').text(priceText);
        $('.price h6').html(`<strong>${priceText}</strong>(${count}개)`);

        // 옵션 닫기
        $('.op_content').hide();
    });

    // delete 클릭
    $(document).on('click', '.delete', function (e) {
        e.preventDefault();

        // table 숨기기
        $('table').hide();

        // 선택된 옵션 초기화
        selectedOption = null;

        // 옵션 텍스트 초기화
        $('.option_title').text('');
        $('.option_sub').text('');
        $('.product_price').text('');

        // op_title 기본 문구로 복구
        $('.op_title h6').text('- [필수] 옵션을 선택해 주세요-');

        // 수량 초기화
        $('table input').val(1);

        $('.price strong').text('0원');
        $('.price h6').html('<strong>0원</strong>(0개)');
    });
})

// section1 right share
$(function() {
    $('.url_copy button').on('click', function(){

    const $input = $('.url_copy input');

    // 1️⃣ input 안 글자 선택
    $input.select();

    // 2️⃣ 복사 실행
    document.execCommand('copy');

    // 3️⃣ 토스트 보여주기
    $('#copy_complete').css('opacity', 1);

    // 4️⃣ 1.5초 뒤 숨김
    setTimeout(function(){
        $('#copy_complete').css('opacity', 0);
        },1500);

    });

})

// section1 right price
$(function() {
    // 가격 문자열 → 숫자 변환 함수
    function getPriceNumber(text) {
        return parseInt(text.replace(/[^0-9]/g, ''));
    }

    // 숫자 → "39,000원" 변환 함수
    function formatPrice(num) {
        return num.toLocaleString() + '원';
    }

    // 가격 업데이트 함수
    function updatePrice($row) {
        const unitPrice = getPriceNumber($('.text1 h6').text());
        const count = parseInt($row.find('input').val());

        const totalPrice = unitPrice * count;

        // table 안 가격
        $row.find('.product_price').text(formatPrice(totalPrice));

        // 하단 총 가격 영역
        $('.price strong').text(formatPrice(totalPrice));
        $('.price h6').html(`<strong>${formatPrice(totalPrice)}</strong>(${count}개)`);
    }

    // ▲ 증가
    $(document).on('click', '.up', function (e) {
        e.preventDefault();

        const $row = $(this).closest('tr');
        const $input = $row.find('input');

        let count = parseInt($input.val());
        count++;

        $input.val(count);
        updatePrice($row);
    });

    // ▼ 감소
    $(document).on('click', '.down', function (e) {
        e.preventDefault();

        const $row = $(this).closest('tr');
        const $input = $row.find('input');

        let count = parseInt($input.val());

        if (count > 1) {
            count--;
            $input.val(count);
            updatePrice($row);
        }
    });
})


// 스와이퍼
$(function() {
    var swiper = new Swiper(".section1 .left .mySwiper", {
        slidesPerView : 1,
        loop : true,
        grabCursor: true
    });

    var swiper1 = new Swiper(".section2 .mySwiper", {
        slidesPerView : 4,
        spaceBetween : 20,
        grabCursor: true,
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
    });

    var swiper3 = new Swiper(".section3 .poto_img", {
    slidesPerView : 9,
    spaceBetween : 10,
    grabCursor: true,
            breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 5
            },
            1000: {
                slidesPerView: 9
            }
        },
    });
})


// 상품 내용
const products = {
    60 : {
        thumb : "images/menu/60.png",
        leftimg1 : "images/sub/sub60/left/1/1.jpg",
        leftimg2 : "images/sub/sub60/left/1/2.jpg",
        leftimg3 : "images/sub/sub60/left/1/3.jpg",
        leftimg4 : "images/sub/sub60/left/1/4.jpg",
        leftimg5 : "images/sub/sub60/left/1/5.jpg",
        story1 : "images/sub/sub60/left/2/1.jpg",
        story2 : "images/sub/sub60/left/2/2.jpg",
        story3 : "images/sub/sub60/left/2/3.jpg",
        story4 : "images/sub/sub60/left/2/4.jpg",
        story5 : "images/sub/sub60/left/2/5.jpg",
        story6 : "images/sub/sub60/left/2/6.jpg",
        story7 : "images/sub/sub60/left/2/7.jpg",
        name : "아크네 퍼퓸 바디워시 코튼베이비",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,<br>등드름 고민을 완화하는 아크네 케어 성분과<br> 매끄러운 피부 결을 완성하는 정제 세정력,<br>여기에 내추럴 프로텍터 특허 보습 성분으로<br> 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸<br> 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]",
        related : [21, 20, 22, 18],
    },
    61 : {
        thumb : "images/menu/61.png",
        leftimg1 : "images/sub/sub61/left/1/1.jpg",
        leftimg2 : "images/sub/sub61/left/1/2.jpg",
        leftimg3 : "images/sub/sub61/left/1/3.jpg",
        leftimg4 : "images/sub/sub61/left/1/4.jpg",
        story1 : "images/sub/sub61/left/2/1.webp",
        story2 : "images/sub/sub61/left/2/2.webp",
        story3 : "images/sub/sub61/left/2/3.webp",
        story4 : "images/sub/sub61/left/2/4.webp",
        story5 : "images/sub/sub61/left/2/5.webp",
        story6 : "images/sub/sub61/left/2/6.webp",
        name : "퍼퓸 핸드크림 코튼베이비",
        price : "17,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트의 시그니처 퍼퓸 코튼베이비 향을 그대로 담은 핸드크림입니다.",
        desc2 : "바르는 순간, 순수한 베이비 파우더 향기의 여운을 남기는 <br> 코튼 베이비 퍼퓸 핸드크림은 잦은 세정으로 무너진 손을 <br> 호호바오일, 비타민 E로 더욱 생기있게 케어합니다.",
        desc3 : "또한 손톱 구성 성분과 유사한 케라틴 성분이 함유되어있어 <br> 지쳐있는 손과 큐티클에 풍부한 영양감을 선사합니다.",
        desc4 : "부드럽게 감싸오는 기분 좋은 향을 담은 <br> 코튼 베이스 핸드크림으로 작은 힐링의 시간을 가져보세요.",
    },
    2 : {
        thumb : "images/menu/2.png",
        leftimg1 : "images/sub/sub3/left/1/1.jpg",
        leftimg2 : "images/sub/sub3/left/1/2.jpg",
        leftimg3 : "images/sub/sub3/left/1/3.jpg",
        leftimg4 : "images/sub/sub3/left/1/4.jpg",
        story1 : "images/sub/sub3/left/2/1.webp",
        story2 : "images/sub/sub3/left/2/2.webp",
        story3 : "images/sub/sub3/left/2/3.webp",
        story4 : "images/sub/sub3/left/2/4.webp",
        story5 : "images/sub/sub3/left/2/5.webp",
        name : "시그니처 퍼퓸 코튼허그",
        price : "39,000원",
        info1 : "은방울꽃",
        info2 : "포근한 이불",
        desc1 : "피부의 경계, 존재의 감각",
        desc2 : "공기중에 퍼지는 무게와 산뜻한 베르가못의 깨끗하고 포근한 잔향",
        desc3 : "살결위로 번지는 안온한 햇빛 <br> 따뜻한 잔향 속 부드러운 의식의 경계​ <br> 면과 살 사이, 감촉과 향 사이의 ‘존재 인식’ <br> 타인의 포옹이 아닌, 자기 인식을 통한 <br> 스스로를 감싸는 감각적 루틴​",
        vol1 : "[50ml]",
        related : [5, 7, 8, 18],
    },
    3 : {
        thumb : "images/menu/3.png",
        leftimg1 : "images/sub/sub3/left/1/1.jpg",
        leftimg2 : "images/sub/sub3/left/1/2.jpg",
        leftimg3 : "images/sub/sub3/left/1/3.jpg",
        leftimg4 : "images/sub/sub3/left/1/4.jpg",
        story1 : "images/sub/sub3/left/2/1.webp",
        story2 : "images/sub/sub3/left/2/2.webp",
        story3 : "images/sub/sub3/left/2/3.webp",
        story4 : "images/sub/sub3/left/2/4.webp",
        story5 : "images/sub/sub3/left/2/5.webp",
        name : "시그니처 퍼퓸 코튼허그",
        price : "39,000원",
        info1 : "은방울꽃",
        info2 : "포근한 이불",
        desc1 : "피부의 경계, 존재의 감각",
        desc2 : "공기중에 퍼지는 무게와 산뜻한 베르가못의 깨끗하고 포근한 잔향",
        desc3 : "살결위로 번지는 안온한 햇빛 <br> 따뜻한 잔향 속 부드러운 의식의 경계​ <br> 면과 살 사이, 감촉과 향 사이의 ‘존재 인식’ <br> 타인의 포옹이 아닌, 자기 인식을 통한 <br> 스스로를 감싸는 감각적 루틴​",
        vol1 : "[50ml]",
        related : [5, 7, 2, 11, 8, 10, 9, 39, 37],
    },
    4 : {
        thumb : "images/menu/4.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "아크네 퍼퓸 바디워시 코튼허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    5 : {
        thumb : "images/menu/5.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼베이비",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    6 : {
        thumb : "images/menu/6.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "트윙클 윈터 에디션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    7 : {
        thumb : "images/menu/7.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 배쓰",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    8 : {
        thumb : "images/menu/8.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 브리즈",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    9 : {
        thumb : "images/menu/9.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 디어 나잇",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    10 : {
        thumb : "images/menu/10.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 딜라잇 부케",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    11 : {
        thumb : "images/menu/11.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼키스",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    12 : {
        thumb : "images/menu/12.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "솔리드퍼퓸 헬로키티 에디션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    13 : {
        thumb : "images/menu/13.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 헬로키티 에디션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    14 : {
        thumb : "images/menu/14.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 짱구 아크네 바디워시",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    15 : {
        thumb : "images/menu/15.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "짱구&흰둥이 에디션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    16 : {
        thumb : "images/menu/16.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 차량용 방향제",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    17 : {
        thumb : "images/menu/17.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 차량용방향제 리필",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    18 : {
        thumb : "images/menu/18.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    19 : {
        thumb : "images/menu/19.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 콭느허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    20 : {
        thumb : "images/menu/20.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    21 : {
        thumb : "images/menu/21.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 코튼 배쓰",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    22 : {
        thumb : "images/menu/22.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 코튼 디어 나잇",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    23 : {
        thumb : "images/menu/23.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 바디로션 코튼허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    24 : {
        thumb : "images/menu/24.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 바디로션 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    25 : {
        thumb : "images/menu/25.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 바디로션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    26 : {
        thumb : "images/menu/26.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 핸드크림",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    27 : {
        thumb : "images/menu/27.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 스프레이",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    28 : {
        thumb : "images/menu/28.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "섬유 향수 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    29 : {
        thumb : "images/menu/29.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 섬유유연제 코튼 허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    30 : {
        thumb : "images/menu/30.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 디스커버리 세트",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    31 : {
        thumb : "images/menu/31.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 쿠로미 에디션",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    32 : {
        thumb : "images/menu/32.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "솔리드 퍼퓸 페블",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    33 : {
        thumb : "images/menu/33.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 헤어퍼퓸",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    34 : {
        thumb : "images/menu/34.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "바디케어 세트",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    35 : {
        thumb : "images/menu/35.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "모이스처 퍼퓸 핸드워시 코튼 허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    36 : {
        thumb : "images/menu/36.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "모이스처 퍼퓸 핸드워시 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    37 : {
        thumb : "images/menu/37.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 366",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    38 : {
        thumb : "images/menu/38.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 코튼 썩세스",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    39 : {
        thumb : "images/menu/39.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 벨벳허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    40 : {
        thumb : "images/menu/40.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 디퓨저 코튼 허그",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    41 : {
        thumb : "images/menu/41.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "리페어 퍼퓸 헤어오일 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    42 : {
        thumb : "images/menu/42.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "올라운더 퍼퓸 디퓨저",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    43 : {
        thumb : "images/menu/43.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 미니어처",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    44 : {
        thumb : "images/menu/44.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 올인원 에센스",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    45 : {
        thumb : "images/menu/45.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 올인원 에센스 모이스처 플러스",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    46 : {
        thumb : "images/menu/46.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 폼클렌저",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    47 : {
        thumb : "images/menu/47.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "올라운더 퍼퓸 디퓨저 리필 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    48 : {
        thumb : "images/menu/48.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "올라운더 퍼퓸 디퓨저 리필",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    49 : {
        thumb : "images/menu/49.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "블랙헤드 바디 클린 브러쉬",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    50 : {
        thumb : "images/menu/50.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "히든 립밤",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    51 : {
        thumb : "images/menu/51.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "올라운더 퍼퓸 디퓨저 코튼 메모리",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    52 : {
        thumb : "images/menu/52.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 샤쉐(2매입)",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    53 : {
        thumb : "images/menu/53.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 여행용 7일 키트(7매입)",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    54 : {
        thumb : "images/menu/54.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워볼",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    55 : {
        thumb : "images/menu/55.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "클리어 백",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    56 : {
        thumb : "images/menu/56.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "스페셜 메시지 카드",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    57 : {
        thumb : "images/menu/57.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시향지 13종",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    58 : {
        thumb : "images/menu/58.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "퍼퓸 샤워 코튼허그(30ml)",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
    59 : {
        thumb : "images/menu/59.png",
        leftimg1 : "images/sub60/left/1.png",
        leftimg2 : "images/sub60/left/2.png",
        leftimg3 : "images/sub60/left/3.png",
        leftimg4 : "images/sub60/left/4.png",
        story1 : "images/sub60/1.png",
        story2 : "images/sub60/2.png",
        story3 : "images/sub60/3.png",
        story4 : "images/sub60/4.png",
        story5 : "images/sub60/5.png",
        story6 : "images/sub60/5.png",
        story7 : "images/sub60/5.png",
        name : "시그니처 퍼퓸 디퓨저 오브젝트(1L)",
        price : "29,000원",
        info1 : "베이비 파우더",
        info2 : "아이리스",
        desc1 : "포맨트 시그니처인 코튼베이비 향을 가장 순수하고 부드럽게 구현하고,등드름 고민을 완화하는 아크네 케어 성분과 매끄러운 피부 결을 완성하는 정제 세정력,여기에 내추럴 프로텍터 특허 보습 성분으로 씻고 난 후에도 오래 지속되는 촉촉함을 담았습니다.",
        desc2 : "향기와 케어, 등드름 케어까지 완벽하게 담아낸 아크네 퍼퓸 바디워시를 만나보세요",
        desc3 : "매일 사용하는 샤워 시간을 오래도록 편안하게 느껴보세요",
        vol1 : "[500ml]",
        vol2 : "[1000ml]"
    },
};

let product = null;

// 상품 데이터      id 데이터 받아오는거라서 products 에서 수정만 하면됨
$(function(){

    const id = location.search.split('=')[1];    // ?id , 3 에서 배열로 나뉘면 3 이 '1'로 됨

    product = products[id];

    // section1
    if(product){
        $('.p_img1').attr('src', product.leftimg1);
        $('.p_img2').attr('src', product.leftimg2);
        $('.p_img3').attr('src', product.leftimg3);
        $('.p_img4').attr('src', product.leftimg4);
        $('#story1').attr('src', product.story1);
        $('#story2').attr('src', product.story2);
        $('#story3').attr('src', product.story3);
        $('#story4').attr('src', product.story4);
        $('#story5').attr('src', product.story5);
        $('#story6').attr('src', product.story6);
        $('#story7').attr('src', product.story7);
        $('#p_name').text(product.name);
        $('#p_price').text(product.price);
        $('#p_name_info1').text(product.info1);
        $('#p_name_info2').text(product.info2);
        $('#p_desc1').html(product.desc1);
        $('#p_desc2').html(product.desc2);
        $('#p_desc3').html(product.desc3);
        $('#p_desc4').html(product.desc4);
        $('#p_vol1').text(product.vol1);
        $('#p_vol2').text(product.vol2);
    }


    // section2 
    if (product && product.related && product.related.length > 0) {
        const $section2 = $('.section2');
        const $swiper = $('.section2 .swiper-wrapper');
        const max = 10;        // 최대 개수
        
        $section2.show();   // 아니면 section2 보이기

        // HTML에 있는 item 1개 저장
        const $template = $swiper.find('.item').first().clone();

        // items 전부 숨기기
        $swiper.empty();

        // related 개수 만큼 보이기
        for (let i = 0; i < product.related.length && i < max; i++) {
            const rid = product.related[i];
            const rp = products[rid];

            if(!rp) continue;  // 상품 데이터 없으면 건너뜀

            const $item = $template.clone();

            // 이미지
            $item.find('.re_img').attr('src', rp.thumb);

            // 상품명
            $item.find('.re_name').text(rp.name);

            // a태그
            $item.find('a').attr('href', `submenu.html?id=${rid}`);

            // 보여주기
            $swiper.append($item);
        
        }
    } else {
        // related 없으면 section2 숨김
        $('.section2').hide();
    }
});
