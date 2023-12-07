$(document).ready(function(){
    $('.sec1').on('mousewheel DOMMouseScroll', function () {
        event.preventDefault();
        if (event.wheelDelta < 0 && $(this).next().length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(this).next().offset().top
            }, 1000);
        } else if (event.wheelDelta > 0 && $(this).prev().length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(this).prev().offset().top
            }, 1000);
        }
    });
})