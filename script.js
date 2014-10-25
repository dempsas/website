/*
 * Some jQuery for website niceness
 * Mobile nav and one page scroll navigation.
 */
$(document).ready(function () {
    $("#logo").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    if ($(window).width() < 768) {
        $('.nav').click(function () {
            $("#headerContainer").slideUp('slow');
        });
    } else {}
    $('#welcome').delay('500').fadeIn('3000');
    $("#L").click(function () {
        if ($("#headerContainer").is(":hidden")) {
            $("#headerContainer").slideDown("slow");
        } else {
            $("#headerContainer").slideUp('slow');
        }
    });
    $(window).load(function () {
        $('.flexslider').flexslider();
    });
});