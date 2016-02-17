//Скрипт для эфекта увеличения при скроле
//И эфекта длюра

var lastScrollTop = 0;
var scrolling = true;

$(window).scroll(function(e) {



    //console.log($(window).scrollTop(),$('#mainFrame').offset().top);

    var scrollTop = $(window).scrollTop();
    var iconLt=((scrollTop-$(window).height())/$(window).height())*100;
    console.log(iconLt);
    if( scrollTop > $('#midFrame').offset().top &&
     scrollTop < $('#mainFrame').offset().top){

        $('.lt').css("margin-left", iconLt/3 + "%");
        $('.lt').css("margin-top", iconLt/7 + "%");

        $('.lb').css("margin-left", iconLt/5 + "%");
        $('.lb').css("margin-bottom", iconLt/7 + "%");

        $('.rt').css("margin-right", iconLt/3 + "%");
        $('.rt').css("margin-top", iconLt/7 + "%");

        $('.rb').css("margin-right", iconLt/5 + "%");
        $('.rb').css("margin-bottom", iconLt/7 + "%");
    }
    if(scrollTop > $('#midFrame').offset().top){
        $('#iconStartFrame').addClass('hide');
        $('#iconPhotoFrame').removeClass('hide');
        $('#iconProjectFrame').removeClass('hide');
        $('#iconCatalogFrame').removeClass('hide');
        $('#iconCutFrame').removeClass('hide');
    } else{
        $('#iconStartFrame').removeClass('hide');
        $('#iconPhotoFrame').addClass('hide');
        $('#iconProjectFrame').addClass('hide');
        $('#iconCatalogFrame').addClass('hide');
        $('#iconCutFrame').addClass('hide');
    }
    if( scrollTop > $('#mainFrame').offset().top){
        $('.icon').css('position', 'absolute');
    }
    if( scrollTop < $('#mainFrame').offset().top){
        $('.icon').css('position', 'fixed');
    }
/*
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
                $('.bg-container').removeClass('animate-zoom-bg-start');
                $('.bg-container').addClass('animate-zoom-bg-end');
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
                $('.bg-container').removeClass('animate-zoom-bg-start');
                $('.bg-container').addClass('animate-zoom-bg-end');
                goStart();
            }
            if( scrollTop > $('#mainFrame').offset().top &&
                scrollTop < $('#photoFrame').offset().top){
                $('.bg-container').removeClass('animate-zoom-bg-end');
                $('.bg-container').addClass('animate-zoom-bg-start');
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
    */
});

$(document).ready(function(e){
    $('.frame-container').css('height', $(window).height()+'px');
    $('.frame-container').css('width', $(window).width()+'px');
    $('.frame-container').css('max-height', $(window).height()+'px');
    $('.frame-container').css('max-width', $(window).width()+'px');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStartFrame').click(function (e) {
        scrolling = false;
        goMain();
    });

    $('#iconProjectFrame').click(function (e) {
        scrolling = false;
        goProject();
    });

    $('#iconCatalogFrame').click(function (e) {
        scrolling = false;
        goCatalog();
    });

    $('#iconCutFrame').click(function (e) {
        scrolling = false;
        goCut();
    });

    $('#iconPhotoFrame').click(function (e) {
        scrolling = false;
        goPhoto();
    });

    $('#iconEndFrame').click(function (e) {
        scrolling = false;
        goMain(); });
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

    $('#iconStart').removeClass('hide');
    $('#iconStart').addClass('show');

    $('#iconPhotoPage').removeClass('show');
    //$('#iconPhotoPage').addClass('hide');

    $('#iconProjectPage').removeClass('show');
    //$('#iconProjectPage').addClass('hide');

    $('#iconCatalogPage').removeClass('show');
    //$('#iconCatalogPage').addClass('hide');

    $('#iconCutPage').removeClass('show');
    //$('#iconCutPage').addClass('hide');

    $('#iconEnd').removeClass('show');
    //$('#iconEnd').addClass('hide');
}

function mainPageAnimationStart(){
    $('.bg-container').removeClass('animate-end');
    $('.bg-container').addClass('animate-start');

    $('#iconStart').removeClass('show');
    $('#iconStart').addClass('hide');

    $('#iconPhotoPage').removeClass('hide');
    $('#iconPhotoPage').removeClass('animation-hide');
    $('#iconPhotoPage').addClass('animation-show');

    $('#iconProjectPage').removeClass('hide');
    $('#iconProjectPage').removeClass('animation-hide');
    $('#iconProjectPage').addClass('animation-show');

    $('#iconCatalogPage').removeClass('hide');
    $('#iconCatalogPage').removeClass('animation-hide');
    $('#iconCatalogPage').addClass('animation-show');

    $('#iconCutPage').removeClass('hide');
    $('#iconCutPage').removeClass('animation-hide');
    $('#iconCutPage').addClass('animation-show');

    $('#iconEnd').removeClass('hide');
    $('#iconEnd').removeClass('animation-hide');
    $('#iconEnd').addClass('animation-show');
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
