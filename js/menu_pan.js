$(document).ready(function(){
    $('.hamberg').on('click',function(){ //햄버거 버튼을 클릭하면
        $('.menu_pan').toggleClass('visible')
        //는, .menu_pan 요소에 클래스가 없으면 추가하고, 있으면 제거합니다. 
    });

    // var element = document.getElementsByClassName('.sub_menu')

    // element.addEvent

    // $('.menu_list_bar').mouseenter(function(){
    $('.menu_list_bar_ul > li').mouseenter(function(){
        // $('.p_3header').toggleClass('h300')
        $('.p_3header').addClass('h300')

    });
    $('.menu_list_bar_ul > li').mouseleave(function(){
        // $('.p_3header').toggleClass('h300')
        $('.p_3header').removeClass('h300')

    });

    $('.menu_list_bar_ul > li').mouseenter(function(){
        // $('.p_3header').toggleClass('h300')
        $('.sub_menu').addClass('h301')
    });
    $('.menu_list_bar_ul > li').mouseleave(function(){
        // $('.p_3header').toggleClass('h300')
        $('.sub_menu').removeClass('h301')
    });
});