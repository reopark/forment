$(function () {
    const $cateitems = $('.section1 .cate .item');
    const $productitems = $('.section1 .container .item');
    const $item_sub = $('.section1 .item_sub');

    function afilter(cate) {
        // 1) cate on
        $cateitems.removeClass('on');
        $cateitems.filter(`[data-cate="${cate}"]`).addClass('on');

        // 2) 배너: all이면 안 보이게, cate면 해당만
        $item_sub.hide();
        if (cate !== 'all') {
        $item_sub.filter(function () {
            const text = $(this).attr('data-cate') || '';
            const tags = text.split(' ').filter(Boolean);
            return tags.includes(cate);
        }).show();
        }

        // 3) 상품: all이면 전부, cate면 해당만
        if (cate === 'all') {
        $productitems.show();
        return;
        }

        $productitems.hide().filter(function () {
        const text = $(this).attr('data-cate') || '';
        const tags = text.split(' ').filter(Boolean);
        return tags.includes(cate);
        }).show();
    }

    // cate 있으면 그걸로, 없으면 all
    const params = new URLSearchParams(location.search);
    const startCate = params.get('cate') || 'all';
    afilter(startCate);

    // cate 클릭시 필터 적용
    $cateitems.on('click', function (e) {
        e.preventDefault();
        const cate = $(this).data('cate');
        afilter(cate);

        // (선택) 새로고침해도 유지되게 주소 변경
        history.replaceState(null, '', `collabo.html?cate=${cate}#cate`);
    });

    // sold out
    $('.item.sold_out').each(function(){
        if (!$(this).find('.sold_badge').length) {
            $(this).find('.img_box').append('<span class="sold_badge">SOLD OUT</span>');
        }
    });
});