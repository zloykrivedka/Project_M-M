//Скрипт для эфекта увеличения при скроле
//И эфекта длюра

var lastScrollTop = 0;
var scrolling = true;

$(window).scroll(function(e) {

    console.log($(window).scrollTop(),$('#midPage').offset().top);

    var scrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var pageHeight = $(document).height();


    /*Переделать через анимации в SCCках
    $('.bg-container').css('-webkit-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-moz-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-o-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('-ms-filter', 'blur('+$(window).scrollTop()/500+'px)');
    $('.bg-container').css('filter', 'blur('+$(window).scrollTop()/500+'px)');
    */

    if(scrollTop == 0){
        //lastScrollTop = true;
        scrolling = true;
    }
    if(scrollTop == $('#endPage').offset().top){
        //lastScrollTop = false;
        scrolling = true;
    }
    if(scrollTop == $('#midPage').offset().top){
        //lastScrollTop = true;
        scrolling = true;
    }

    if( scrollTop > 0 &&
        scrollTop != $('#endPage').offset().top&&
        scrollTop != $('#midPage').offset().top &&
        scrolling == true &&
        wayScroll(scrollTop) == true ){
        if(scrollTop > $('#firstPage').offset().top &&
            scrollTop < $('#midPage').offset().top) {
            goMid();
        }
        if(scrollTop > $('#midPage').offset().top &&
            scrollTop < $('#endPage').offset().top &&
            scrolling == true &&
            wayScroll(scrollTop) == true){
            goEnd();
        }
        if(scrollTop < $('#endPage').offset().top &&
            scrollTop > $('#midPage').offset().top &&
            scrolling == true &&
            wayScroll(scrollTop) == false){
            goMid();
        }
        scrolling = false;
    }
    lastScrollTop = scrollTop;
});

$(document).ready(function(e){
    var pageHeight = $(window).height()*2.5;
    //$('.content-container').css('height', pageHeight+'px');
    //$('.icon-container').css('height', $(window).height()+'px');
    //$('.icon-container-end-page').css('height', $(window).height()+'px');
    $('.frame-container').css('height', $(window).height()+'px');
    $('.frame-container').css('width', $(window).width()+'px');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStart').click(function (e) {
        scrolling = false;
       goMid();
    });
});

//А вот и в обратную сторону
$(function() {
    $('#iconEnd').click(function (e) {
        scrolling = false;
        goStart(); });
});

function goStart(){
    /*$('.bg-container').removeClass('animate-start');
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
    $('#iconEnd').addClass('hide-central');*/
    $.scrollTo('#startPage', 500);
}

function goMid(){
    /*$('.bg-container').removeClass('animate-end');
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
    $('#iconEnd').addClass('show-central');*/
    $.scrollTo('#midPage', 500);
}

function goEnd(){
   /*
    $('.bg-container').removeClass('animate-end');
    $('.bg-container').addClass('animate-start');

    $('#iconStart').removeClass('show-central');

    $('#iconPhotoPage').removeClass('hide');
    $('#iconPhotoPage').removeClass('hide-lt');

    $('#iconProjectPage').removeClass('hide');
    $('#iconProjectPage').removeClass('hide-lb');

    $('#iconCatalogPage').removeClass('hide');
    $('#iconCatalogPage').removeClass('hide-rt');

    $('#iconCutPage').removeClass('hide');
    $('#iconCutPage').removeClass('hide-rb');

    $('#iconEnd').removeClass('hide');
    $('#iconEnd').removeClass('hide-central');
*/
    $.scrollTo('#endPage', 500);
}

function wayScroll(scrollTop){
    if(scrollTop > lastScrollTop){
        return true;
    } else{
        return false;
    }
}
