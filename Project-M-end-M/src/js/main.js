

$(window).scroll(function () {
    moveIcons();
});

$(document).ready(function () {
    moveIcons();
    pageResize();
});

window.onresize = function () {
    pageResize();
};

function moveIcons(){
    var scrollTop = $(window).scrollTop();
    var positionMainFrame = $('#mainFrame').offset().top;

    var a = positionMainFrame - scrollTop;
    var b = positionMainFrame*2.5;
    var iconPosition = (a / b) * 100;
    console.log(iconPosition);

    if (iconPosition < 10) {
        iconPosition = 10;
    }

    $('.lt').css("margin-left", iconPosition * 4.7 + "%");
    $('.lt').css("margin-bottom", iconPosition * 2 + "%");

    $('.rt').css("margin-right", iconPosition * 4.7 + "%");
    $('.rt').css("margin-bottom", iconPosition * 2 + "%");

    $('.lb').css("margin-left", iconPosition * 6 + "%");
    $('.lb').css("margin-bottom", iconPosition  + "%");

    $('.rb').css("margin-right", iconPosition * 6 + "%");
    $('.rb').css("margin-bottom", iconPosition  + "%");


    if (scrollTop > $('#midFrame').offset().top) {
        $('#iconStartFrame').addClass('hide');
    } else {
        $('#iconStartFrame').removeClass('hide');
    }

    if (iconPosition >= 30) {
        $('.icon-bg-container').addClass('hide');
    }
    if (iconPosition < 30) {
        $('.icon-bg-container').removeClass('hide');
    }

    if(iconPosition == 40){
        $('#iconStartFrame').removeClass('hide-icon');
        $('#title-start').removeClass('hide-icon');
        $('#iconStartFrame').addClass('show-icon');
        $('#title-start').addClass('show-icon');
    } if (iconPosition < 40) {
        $('#iconStartFrame').removeClass('show-icon');
        $('#title-start').removeClass('show-icon');
        $('#iconStartFrame').addClass('hide-icon');
        $('#title-start').addClass('hide-icon');
    }

    if(iconPosition <= 10){
        $('#iconPhotoFrame').removeClass('hide');
        $('#iconProjectFrame').removeClass('hide');
        $('#iconCatalogFrame').removeClass('hide');
        $('#iconCutFrame').removeClass('hide');
    } if(iconPosition > 10) {
        $('#iconPhotoFrame').addClass('hide');
        $('#iconProjectFrame').addClass('hide');
        $('#iconCatalogFrame').addClass('hide');
        $('#iconCutFrame').addClass('hide');
    }

    if (scrollTop >= $('#mainFrame').offset().top) {
        $('.icon-bg-container').css('position', 'absolute');
        $('#iconBackToMain').removeClass('hide');
    } if (scrollTop < $('#mainFrame').offset().top) {
        $('.icon-bg-container').css('position', 'fixed');
        $('#iconBackToMain').addClass('hide');
    }
}

function pageResize(){

    var winHeight = $(window).height();
    var winWidth =  $(window).width();

    if(winHeight <= 800 && winWidth <=600){
        winHeight = 800;
        winWidth = 600;
    }

    $('.frame-container').css('height', winHeight + 'px');
    $('.frame-container').css('width', winWidth + 'px');

    $('.frame-content-container').css('height', winHeight + 'px');
    $('.frame-content-container').css('width', winWidth*0.9 + 'px');
}


//Event push icons
$(function () {
    $('#iconStartFrame').click(function () {
        $.scrollTo('#mainFrame', 5000);
        $('#iconStartFrame').removeClass('show-icon');
        $('#title-start').removeClass('show-icon');
        $('#iconStartFrame').addClass('hide-icon');
        $('#title-start').addClass('hide-icon');
    });

    $('#iconProjectFrame').click(function () {
        $.scrollTo('#projectFrame', 500);
    });

    $('#iconCatalogFrame').click(function () {
        $.scrollTo('#catalogFrame', 500);
    });

    $('#iconCutFrame').click(function () {
        $.scrollTo('#cutFrame', 500);
    });

    $('#iconPhotoFrame').click(function () {
        $.scrollTo('#photoFrame', 500);
    });

    $('#iconBackToMain').click(function () {
        $.scrollTo('#mainFrame', 300);
    });
});
