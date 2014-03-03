/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
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



    $("#menu").click(function() {
        if ($("#headerContainer").is(":hidden")) {
            $("#headerContainer").slideDown("slow");
        } else {
            $("#headerContainer").slideUp('slow');
        }
    });

});