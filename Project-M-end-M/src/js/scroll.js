//Скрипт для эфекта увеличения при скроле
//И эфекта длюра

var lastScrollTop = 0;
var scrolling = true;

$(window).scroll(function(e) {

    console.log($(window).scrollTop(),$('#mainFrame').offset().top);

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
        mainPageAnimationEnd();
        scrolling = true;
    }
    if( scrollTop == $('#mainFrame').offset().top){
        mainPageAnimationStart();
        scrolling = true;
    }
    if( scrollTop == $('#photoFrame').offset().top){
        mainPageAnimationEnd();
        scrolling = true;
    }
    if( scrollTop == $('#projectFrame').offset().top){
        mainPageAnimationEnd();
        scrolling = true;
    }
    if( scrollTop == $('#cutFrame').offset().top){
        mainPageAnimationEnd();
        scrolling = true;
    }
    if( scrollTop == $('#catalogFrame').offset().top){
        mainPageAnimationEnd();
        scrolling = true;
    }
    if( scrollTop == $('#endFrame').offset().top){
        mainPageAnimationEnd();
        scrolling = true;
    }

    if( scrollTop > 0 &&
        scrollTop != $('#startFrame').offset().top &&
        scrollTop != $('#mainFrame').offset().top &&
        scrollTop != $('#photoFrame').offset().top &&
        scrollTop != $('#projectFrame').offset().top &&
        scrollTop != $('#cutFrame').offset().top &&
        scrollTop != $('#catalogFrame').offset().top &&
        scrollTop != $('#endFrame').offset().top &&
        scrolling == true){

        if(wayScroll(scrollTop) == true){
            if( scrollTop > $('#startFrame').offset().top &&
                scrollTop < $('#mainFrame').offset().top){
                $('.bg-container').removeClass('animate-zoom-bg-end');
                $('.bg-container').addClass('animate-zoom-bg-start');
                goMain();
            }
            if( scrollTop > $('#mainFrame').offset().top &&
                scrollTop < $('#photoFrame').offset().top){
                goPhoto();
            }
            if( scrollTop > $('#photoFrame').offset().top &&
                scrollTop < $('#projectFrame').offset().top){
                goProject();
            }
            if( scrollTop > $('#projectFrame').offset().top &&
                scrollTop < $('#cutFrame').offset().top){
                goCut();
            }
            if( scrollTop > $('#cutFrame').offset().top &&
                scrollTop < $('#catalogFrame').offset().top){
                goCatalog();
            }
            if( scrollTop > $('#catalogFrame').offset().top &&
                scrollTop < $('#endFrame').offset().top){
                goEnd();
            }
        }

        if(wayScroll(scrollTop) == false){
            if( scrollTop > $('#startFrame').offset().top &&
                scrollTop < $('#mainFrame').offset().top){
                goStart();
            }
            if( scrollTop > $('#mainFrame').offset().top &&
                scrollTop < $('#photoFrame').offset().top){
                goMain();
            }
            if( scrollTop > $('#photoFrame').offset().top &&
                scrollTop < $('#projectFrame').offset().top){
                goPhoto();
            }
            if( scrollTop > $('#projectFrame').offset().top &&
                scrollTop < $('#cutFrame').offset().top){
                goProject();
            }
            if( scrollTop > $('#cutFrame').offset().top &&
                scrollTop < $('#catalogFrame').offset().top){
                goCut();
            }
            if( scrollTop > $('#catalogFrame').offset().top &&
                scrollTop < $('#endFrame').offset().top){
                goCatalog();
            }
        }

        scrolling = false;
    }
    lastScrollTop = scrollTop;
});

$(document).ready(function(e){
    $('.frame-container').css('height', $(window).height()+'px');
    $('.frame-container').css('width', $(window).width()+'px');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStart').click(function (e) {
        scrolling = false;
       goMain();
    });
});

//А вот и в обратную сторону
$(function() {
    $('#iconEnd').click(function (e) {
        scrolling = false;
        goStart(); });
});

function goStart(){
    $.scrollTo('#startFrame', 500);
}
function goMain(){
    $.scrollTo('#mainFrame', 2000);
}
function goPhoto(){
    $.scrollTo('#photoFrame', 500);
}
function goProject(){
    $.scrollTo('#projectFrame', 500);
}
function goCut(){
    $.scrollTo('#cutFrame', 500);
}
function goCatalog(){
    $.scrollTo('#catalogFrame', 500);
}
function goEnd(){
    $.scrollTo('#endFrame', 500);
}

function mainPageAnimationEnd(){
    //$('.bg-container').removeClass('animate-start');
    //$('.bg-container').addClass('animate-end');

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
}

function mainPageAnimationStart(){
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
}

function wayScroll(scrollTop){
    if(scrollTop > lastScrollTop){
        //alert("true");
        return true;
    } else{
        //alert("false");
        return false;
    }
}
