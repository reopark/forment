$(function() {
    const $cateitems = $('.section1 .cate .item');
    const $productitems = $('.section1 .container .item');
    const $item_sub = $('.section1 .container .item_sub');
    
    function afilter(cate) {
        // cate on
        $cateitems.removeClass('on');
        $cateitems.filter(`[data-cate="${cate}"]`).addClass("on");

        // item_sub 자동필터
        $item_sub.hide().filter(function() {
            const catetext = $(this).attr("data-cate") || "";
            const tags = catetext.split(" ").filter(Boolean);
            return tags.includes(cate);
        }).show();

        // 전체면 보이게
        if (cate === 'all') {
            $productitems.hide();
            $productitems.not('.per_only').show();
            return;
        }

        // data-cate에 해당 cate가 포함된것만 보이게
        $productitems.hide().filter(function() {
            const catetext = $(this).attr("data-cate") || "";
            const tags = catetext.split(" ").filter(Boolean);
            return tags.includes(cate);
        }).show();
    }

    // 처음 들어왔을때 기본값
    const params = new URLSearchParams(location.search);
    const startCate = params.get('cate') || 'all';
    afilter(startCate);

    // cate 클릭시 필터 적용
    $cateitems.on('click', function(e) {
        e.preventDefault();

        const cate = $(this).data('cate');
        afilter(cate);
    })


    // sold out
    $('.item.sold_out').each(function(){
        if (!$(this).find('.sold_badge').length) {
            $(this).find('.img_box').append('<span class="sold_badge">SOLD OUT</span>');
        }
    });
})