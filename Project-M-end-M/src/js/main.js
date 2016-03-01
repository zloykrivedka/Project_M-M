

$(window).scroll(function (e) {
    moveIcons();
});

var lastScrollPosition = 0;

function moveIcons(){
    var scrollTop = $(window).scrollTop();
    var scrollPositionMainFrame = $('#mainFrame').offset().top;

    var a = scrollPositionMainFrame - scrollTop;
    var b = scrollPositionMainFrame;
    var iconPosition = a / b;
    iconPosition = iconPosition * 100;
	if(iconPosition > 5){
	var ic = lastScrollPosition - iconPosition;
	}

    console.log(iconPosition, lastScrollPosition, ic);

   if (iconPosition < 5) {
        iconPosition = 5;
    }

    $('.lt').css("margin-right", "+="+ ic + "%");
    $('.lt').css("margin-bottom", "-="+ ic + "%");

    /*
    $('.rt').css("margin-left", iconPosition*10 + "%");
    $('.rt').css("margin-bottom", iconPosition*3 + "%");

    $('.lb').css("margin-left", iconPosition*12 + "%");
    $('.lb').css("margin-bottom", iconPosition  + "%");

    $('.rb').css("margin-right", iconPosition*12 + "%");
    $('.rb').css("margin-bottom", iconPosition  + "%");
    */

    if (scrollTop > $('#midFrame').offset().top) {
        $('#iconStartFrame').addClass('hide');
    } else {
        $('#iconStartFrame').removeClass('hide');
    }

    if(iconPosition < 15){
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

    if(iconPosition < -100){
        $('.icon-bg-container').addClass('hide');
    } if(iconPosition > -100){
        $('.icon-bg-container').removeClass('hide');
    }

    if (scrollTop >= $('#mainFrame').offset().top) {
        $('.icon-bg-container').css('position', 'absolute');
        $('#iconBackToMain').removeClass('hide');
    } if (scrollTop < $('#mainFrame').offset().top) {
        $('.icon-bg-container').css('position', 'fixed');
        $('#iconBackToMain').addClass('hide');
    }
	lastScrollPosition = iconPosition;
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

    $('.frame-content-container').css('height', winHeight * 4 + 'px');
    $('.frame-content-container').css('width', winWidth * 0.8 + 'px');
}

$(document).ready(function () {
    moveIcons();
    pageResize();
});

window.onresize = function(){
    pageResize();
};

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
