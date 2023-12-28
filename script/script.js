$(function () {
    // 풀메뉴
    $('ul.gnb>li, .gnb_layer').mouseenter(function () {
        $('.gnb_layer').stop().slideDown(100); // 부드럽게펼쳐줌
    });
    $('ul.gnb>li,.gnb_layer').mouseleave(function () {
        $('.gnb_layer').stop().slideUp(100); // 슬라이드되며숨겨짐
    });
    // $('nav>ul>li').mouseenter(function(){
    //     $('.submenu, .bg').stop().show(); // 보기
    // });
    // $('nav>ul>li').mouseleave(function(){
    //     $('.submenu, .bg').stop().hide(); // 가리기
    // });
    
    // 로고와 하단화살표 클릭시 최상단으로 이동
    $(".logo,.btn_top").on("click",function(){
        $("html, body").stop().animate({
            scrollTop:0
        },400);
    });
// 하단 버튼이 스크롤 500픽셀 도달시 나타남
// .scrollTop() - 현재 스크롤의 위치를 가져오는 메서드
$(window).scroll(function(){
    if($(this).scrollTop()>500){
        $(".btn_top").fadeIn();
    }else {
        $(".btn_top").fadeOut();
    }
});
});
