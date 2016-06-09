/**
 * Created by midnight on 4/5/2016.
 */

var ml = "margin-left";
var mr = "margin-right";
var mb = "margin-bottom";

var hideIcon = 'hideIcon';
var showIcon = 'showIcon';

var iconStart = '#iconStartAnimation';
var endAnimation = '#endAnimationContainer';

var animationScrollTime = 5000;
var contentScrollTime = 500;
var returnTime = 300;

$(document).ready(function () {moveIcons(); pageResize();});

window.onresize = function () {pageResize();};

$(window).scroll(function () {moveIcons();});

function moveIcons() {

    var andAnimationPosition = $(endAnimation).offset().top;

    var scrollTop = $(window).scrollTop();

    var a = andAnimationPosition - scrollTop;
    var b = andAnimationPosition * 2.5;

    var iconPosition2;
    var iconPosition = iconPosition2 = (a / b) * 100;

    console.log(iconPosition, andAnimationPosition);

    if (iconPosition <= 10) {
        iconPosition = 10;
    }

    $('.lt').css(ml, iconPosition * 4.7 + "%");
    $('.lt').css(mb, iconPosition * 2 + "%");

    $('.rt').css(mr, iconPosition * 4.7 + "%");
    $('.rt').css(mb, iconPosition * 2 + "%");

    $('.lb').css(ml, iconPosition * 6 + "%");
    $('.lb').css(mb, iconPosition + "%");

    $('.rb').css(mr, iconPosition * 6 + "%");
    $('.rb').css(mb, iconPosition + "%");

    if(iconPosition2 <= 8){
        iconPosition2 = 8;
    }

    $('.lt-2').css(ml, iconPosition2 * 5.87 + "%");
    $('.lt-2').css(mb, iconPosition2 * 2.5 + "%");
    $('.lt-2').css('transform', 'rotate('+iconPosition2*5+'deg)');

    $('.rt-2').css(mr, iconPosition2 * 5.87 + "%");
    $('.rt-2').css(mb, iconPosition2 * 2.5 + "%");
    $('.rt-2').css('transform', 'rotate(-'+iconPosition2*4.5+'deg)');

    $('.lb-2').css(ml, iconPosition2 * 7.5 + "%");
    $('.lb-2').css(mb, iconPosition2 * 1.25 + "%");
    $('.lb-2').css('transform', 'rotate('+iconPosition2*6+'deg)');

    $('.rb-2').css(mr, iconPosition2 * 7.5 + "%");
    $('.rb-2').css(mb, iconPosition2 * 1.25 + "%");
    $('.rb-2').css('transform', 'rotate(-'+iconPosition2*3+'deg)');

    // if (scrollTop >= 30) {
    //     $('#iconStartFrame').addClass(hideIcon);
    // } else {
    //     $('#iconStartFrame').removeClass(hideIcon);
    // }

    if(iconPosition <= 10){
        $('#iconPhotoFrame').removeClass(hideIcon);
        $('#iconProjectFrame').removeClass(hideIcon);
        $('#iconCatalogFrame').removeClass(hideIcon);
        $('#iconCutFrame').removeClass(hideIcon);

        $('#iconPhotoFrame').addClass(showIcon);
        $('#iconProjectFrame').addClass(showIcon);
        $('#iconCatalogFrame').addClass(showIcon);
        $('#iconCutFrame').addClass(showIcon);
    } if(iconPosition > 10) {
        $('#iconPhotoFrame').addClass(hideIcon);
        $('#iconProjectFrame').addClass(hideIcon);
        $('#iconCatalogFrame').addClass(hideIcon);
        $('#iconCutFrame').addClass(hideIcon);
    }

    if (scrollTop >= andAnimationPosition) {
        $('.icon-bg-container').css('position', 'absolute');
    } if(scrollTop < andAnimationPosition) {
        $('.icon-bg-container').css('position', 'fixed');
    }
}

//Event push icons
$(function () {
    $(iconStart).click(function () {
        $.scrollTo(endAnimation, animationScrollTime);
        // $('#iconStartFrame').addClass(hideIcon);
        // $('#title-start').addClass(hideIcon);
    });

    $('#iconProjectFrame').click(function () {
        $.scrollTo('#projectFrame', contentScrollTime);
    });

    $('#iconCatalogFrame').click(function () {
        $.scrollTo('#catalogFrame', contentScrollTime);
    });

    $('#iconCutFrame').click(function () {
        $.scrollTo('#cutFrame', contentScrollTime);
    });

    $('#iconPhotoFrame').click(function () {
        $.scrollTo('#photoFrame', contentScrollTime);
    });

    $('#go-to-main').click(function () {
        $.scrollTo('#mainFrame', returnTime);
    });
});

function pageResize(){
    var winHeight = $(window).height();
    var winWidth =  $(window).width();

    $(endAnimation).css('height', winHeight + 'px');
    $(endAnimation).css('width', winWidth + 'px');
}

