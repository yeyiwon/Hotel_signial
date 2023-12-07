$(document).ready(function() {
    
    let timer = 500;
    let idx = 0; // 현재 보고있는 방번호
    let r_length=$('.room').length;
        $('.room').on('mousewheel DOMMouseScroll', function() {
        event.preventDefault();
        
        if (event.wheelDelta < 0 && $(this).next().length > 0) { // 내렸다

        console.log($(this).next().offset().left)
            // 나갈판
            $('.room').eq(idx % r_length).animate({
                left: '-100%'
            }, 1000)

            // 들어올판
            $('.room').eq((idx+1) % r_length).css({
                left: '100%'
            }).animate({
                left: 0
            }, 1000)


            idx+=1;
            
            setTimeout(function(){
                $('.room').eq(idx).find('.bg_txt').addClass('active')
            }, 1000)

            // s_move($(this).next().offset().left);
        } else if (event.wheelDelta > 0 && $(this).prev().length > 0) { // 올렸다
            
        console.log($(this).next().offset().left)
            $('.room').eq(idx % r_length).animate({
                left: '100%'
            }, 1000)
            $('.room').eq((idx-1) % r_length).css({
                left: '-100%'
            }).animate({
                left: 0
            }, 1000)

            idx-=1;
            
            setTimeout(function(){
                $('.room').eq(idx).find('.bg_txt').addClass('active')
            }, 1000)

            // s_move($(this).prev().offset().left);
        }
    });

    $('.nav_ul a').click(function(event) {
        event.preventDefault();
        let href = $(this).attr('href');
        s_move($(href).offset().left);
    });

    function s_move(tmp_pos) {
        // $('html, body').stop().animate({
        //     scrollLeft: tmp_pos + "px"
        // }, timer, 'linear');
    }
});