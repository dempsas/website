/*
 * Some jQuery for website niceness
 * Parallax header, Mobile nav and one page scroll navigation. 
 */
$(document).ready(function() {
    if ($(window).width() > 768) {
        $('div[data-type="background"]').each(function() {
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {
                var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                $bgobj.css({backgroundPosition: coords});
            });
        });
    }

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
                $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    if ($(window).width() < 768) {
        $('.nav').click(function() {
            $("#headerContainer").slideUp('slow');
        });
    }
    else {
    }
    $('#welcome').delay('500').fadeIn('3000');
    $("#L").click(function() {
        if ($("#headerContainer").is(":hidden")) {
            $("#headerContainer").slideDown("slow");
        } else {
            $("#headerContainer").slideUp('slow');
        }
    });
    
    $(window).load(function() {
    $('.flexslider').flexslider();
  });
});