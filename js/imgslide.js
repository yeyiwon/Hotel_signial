$(document).ready(function(){

    let curr_idx = 0;
    let timer = 1000;
    let bn_count = $('.banner').length
    $('.btn_R').click(function () {
        버튼막기();
        slide(curr_idx % bn_count, '-100%', (curr_idx + 1) % bn_count, '100%', timer);
        curr_idx += 1;
    });

    $('.btn_L').click(function () {
        버튼막기();
        slide(curr_idx % bn_count, '100%', (curr_idx - 1 + bn_count) % bn_count, '-100%', timer);
        curr_idx -= 1;
    });

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        $('.banner').eq(o_idx).animate({
            left: o_pos
        }, t);

        $('.banner').eq(c_idx).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t);

        $('.circle').eq(o_idx).removeClass('circle_active');
        $('.circle').eq(c_idx).addClass('circle_active');
    }

    function 버튼막기() {
            // 버튼 막기
            $('.btn_slide').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.btn_slide').css({pointerEvents:'auto'})
            }, timer)
        }

        let interval;
        function auto_slide() {
            interval=setInterval(function(){
                $('.btn_R').trigger('click')
            }, timer+2000)
        }
        // auto_slide()

        $('.main_banner').hover(function(){
            clearInterval(interval)
        }, function(){
            auto_slide()
        });
})