$(window).scroll(function (e) {

    //var bgScale = (($(window).scrollTop()) / $(window).height())+1;
    //bgZoom(bgScale);
    moveIcons();

});

function bgZoom(bgScale){
    if(bgScale >= 2){
        bgScale = 2;
    }
    $(".bg-container").css("transform", "scale(" + bgScale + ")");
}

function moveIcons(){

    var scrollTop = $(window).scrollTop();

    var scrollPosition =  scrollTop /  $('#mainFrame').offset().top;
    scrollPosition = scrollPosition*100;
    console.log(scrollPosition, scrollTop);
    if (scrollPosition >= 100) {
        scrollPosition = 100;
    }

    //$('.lt').css("margin-left", scrollPosition / 3 + "%");
    //$('.lt').css("margin-top", scrollPosition / 7 + "%");

    $('.lt-bg').css("margin-left", scrollPosition / 3 + "%");
    $('.lt-bg').css("margin-top", scrollPosition / 15 + "%");

    $('.lb').css("margin-left", scrollPosition / 5 + "%");
    $('.lb').css("margin-bottom", scrollPosition / 7 + "%");

    $('.rt').css("margin-right", scrollPosition / 3 + "%");
    $('.rt').css("margin-top", scrollPosition / 7 + "%");

    $('.rb').css("margin-right", scrollPosition / 5 + "%");
    $('.rb').css("margin-bottom", scrollPosition / 7 + "%");

    if (scrollTop > $('#midFrame').offset().top) {
        //$('#icon-bg-1').removeClass('hide');

        $('#iconStartFrame').addClass('hide');
    } else {
        //$('#icon-bg-1').addClass('hide');
        $('#iconStartFrame').removeClass('hide');
    }

    if(scrollPosition > 80){
        $('#iconPhotoFrame').removeClass('hide');
        $('#iconProjectFrame').removeClass('hide');
        $('#iconCatalogFrame').removeClass('hide');
        $('#iconCutFrame').removeClass('hide');
    } else {
        $('#iconPhotoFrame').addClass('hide');
        $('#iconProjectFrame').addClass('hide');
        $('#iconCatalogFrame').addClass('hide');
        $('#iconCutFrame').addClass('hide');
    }

    if (scrollTop >= $('#mainFrame').offset().top) {
       // $('.icon').css('position', 'absolute');
        $('.icon-bg-container').css('position', 'absolute');
        $('#iconBackToMain').removeClass('hide');
    }
    if (scrollTop < $('#mainFrame').offset().top) {
        //$('.icon').css('position', 'fixed');
        $('.icon-bg-container').css('position', 'fixed');
        $('#iconBackToMain').addClass('hide');
    }
}

$(document).ready(function () {
    //moveIcons();

    $('.frame-container').css('height', $(window).height() + 'px');
    $('.frame-container').css('width', $(window).width() + 'px');

    $('.frame-content-container').css('height', $(window).height() * 2 + 'px');
    $('.frame-content-container').css('width', $(window).width() * 0.8 + 'px');
});

//Event push icons
$(function () {
    $('#iconStartFrame').click(function (e) {
        $.scrollTo('#mainFrame', 3000);
    });

    $('#iconProjectFrame').click(function (e) {
        $.scrollTo('#projectFrame', 500);
    });

    $('#iconCatalogFrame').click(function (e) {
        $.scrollTo('#catalogFrame', 500);
    });

    $('#iconCutFrame').click(function (e) {
        $.scrollTo('#cutFrame', 500);
    });

    $('#iconPhotoFrame').click(function (e) {
        $.scrollTo('#photoFrame', 500);
    });

    $('#iconBackToMain').click(function (e) {
        $.scrollTo('#mainFrame', 1500);
    });
});
