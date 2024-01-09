$(document).ready(function(){
    $(".menu > ul > li").mouseover(function(){
        $(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
    });

    $(".notice > ul > li:first-child").click(function(){
        $(".modal").show();
    });

    $(".popup_btn").click(function(){
        $(".modal").hide();
    });

    let index = 0, prev, $imgList = $(".slide_list > li"),totalNum = $imgList.length;

    setInterval(function(){
        prev = index;
        index = index + 1;
        if(index >= totalNum) index = 0;
        $imgList.eq(index).css({left: 1200 + 'px' , display: 'block'});
        $imgList.eq(index).stop().animate({left: 0}, 1500);
        $imgList.eq(prev).stop().animate({left: -1200 + 'px'}, 1500);
    }, 3000);

})