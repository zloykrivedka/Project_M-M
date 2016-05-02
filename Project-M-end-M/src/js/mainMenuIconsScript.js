/**
 * Created by midnight on 4/5/2016.
 */
const animationDuration = 1000;

$(document).ready(function () {
    controlToUpPanel();
});


$(window).scroll(function () {controlToUpPanel();});

function controlToUpPanel() {
    //noinspection JSValidateTypes
    var scrollTop = $(window).scrollTop();

    if (scrollTop > $('#mainFrame').offset().top + 15) {
        $('.icon-bg-container').css('position', 'absolute');
        $('#iconBackToMain').removeClass('hide');
    }
    if (scrollTop < $('#mainFrame').offset().top + 15) {
        $('.icon-bg-container').css('position', 'fixed');
        $('#iconBackToMain').addClass('hide');
    }
}

//Event push icons
$(function () {
    $('#iconStartFrame').click(function () {
        $('#welcome-block').addClass('fade-out');
        setTimeout(function () {
            $('#welcome-block').addClass('hide');
            $('#content-block').addClass('fade-in');
        }, 1000);
    });

    $('#iconBackToMain').click(function () {
        $.scrollTo('#mainFrame', animationDuration);
    });
});

