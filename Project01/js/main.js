$(document).ready(function () {
    //caroursel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    // btn-scrollTop
    $('.btn-scrtop').on('click', function () {
        $("html,body").animate({ scrollTop: "0" }, 600);
    });
    //
    var menuFixed = $('.menu').offset().top;
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 600){
            $('.btn-scrtop').addClass('show');
        }
        else{
            $('.btn-scrtop').removeClass('show');
        }
    });
    $(window).on('scroll',function(){
        if($(window).scrollTop()  > menuFixed){
            $('.menu').addClass('is-fixed');
            $('.menu').addClass('animated');
            
        }
        else{
            $('.menu').removeClass('is-fixed');
            $('.menu').removeClass('animated');
        }
    })
})