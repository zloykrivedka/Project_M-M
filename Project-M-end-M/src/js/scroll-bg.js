//Скрипт для эфекта увеличения при скроле
//И эфекта длюра

var lastScrollTop = true;
var scrolling = true;

$(window).scroll(function(e) {

    console.log($(window).scrollTop()+$(window).height(), $(document).height());

    //Переделать через анимации в SCCках
    $('.bg-container').css('-webkit-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-moz-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-o-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-ms-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('filter', 'blur('+$(window).scrollTop()/500+'px)');

    if(($(window).scrollTop()+$(window).height()) == $(document).height()){
        lastScrollTop = false;
        scrolling = true;}
    if($(window).scrollTop() == 0){
        lastScrollTop = true;
        scrolling = true;}

    if($(window).scrollTop() > 0 && ($(window).scrollTop()+$(window).height()) < $(document).height() && scrolling == true){
        if(lastScrollTop == true) {
            goEnd();
        } else {
            goStart()
        }
        scrolling = false;
    }
});

$(document).ready(function(e){
    var pageHeight = $(window).height()*2.5;
    //console.log(winCentral);
    $('.content-container').css('height', pageHeight+'px');
    $('.icon-container').css('height', $(window).height()+'px');
    $('.icon-container-end-page').css('height', $(window).height()+'px');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStart').click(function (e) {
        scrolling = false;
       goEnd();
    });
});

//А вот и в обратную сторону
$(function() {
    $('#iconEnd').click(function (e) { scrolling = false; goStart(); });
});

function goEnd(){
    $('.bg-container').removeClass('animate-end');
    $('.bg-container').addClass('animate-start');

    $('#iconStart').removeClass('show-central');
    $('#iconStart').addClass('hide-central');

    $('#iconPhotoPage').removeClass('hide');
    $('#iconPhotoPage').removeClass('hide-lt');
    $('#iconPhotoPage').addClass('show-lt');

    $('#iconProjectPage').removeClass('hide');
    $('#iconProjectPage').removeClass('hide-lb');
    $('#iconProjectPage').addClass('show-lb');

    $('#iconCatalogPage').removeClass('hide');
    $('#iconCatalogPage').removeClass('hide-rt');
    $('#iconCatalogPage').addClass('show-rt');

    $('#iconCutPage').removeClass('hide');
    $('#iconCutPage').removeClass('hide-rb');
    $('#iconCutPage').addClass('show-rb');

    $('#iconEnd').removeClass('hide');
    $('#iconEnd').removeClass('hide-central');
    $('#iconEnd').addClass('show-central');

    $.scrollTo($(document).height()-$(window).height(), 500);
}

function goStart(){
    $('.bg-container').removeClass('animate-start');
    $('.bg-container').addClass('animate-end');

    $('#iconStart').removeClass('hide-central');
    $('#iconStart').addClass('show-central');

    $('#iconPhotoPage').removeClass('show-lt');
    $('#iconPhotoPage').addClass('hide-lt');

    $('#iconProjectPage').removeClass('show-lb');
    $('#iconProjectPage').addClass('hide-lb');

    $('#iconCatalogPage').removeClass('show-rt');
    $('#iconCatalogPage').addClass('hide-rt');

    $('#iconCutPage').removeClass('show-rb');
    $('#iconCutPage').addClass('hide-rb');

    $('#iconEnd').removeClass('show-central');
    $('#iconEnd').addClass('hide-central');
    $.scrollTo('#startPage', 500);
}

