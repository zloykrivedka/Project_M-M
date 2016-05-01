
$(document).ready(function () {pageResize();});

window.onresize = function () {pageResize();};

function pageResize(){
    var winHeight = $(window).height();
    var winWidth =  $(window).width();

    if(winHeight <= 800 && winWidth <=600){
        winHeight = 800;
        winWidth = 600;
    }

    //$('.frame-container').css('height', winHeight + 'px');
    //$('.frame-container').css('width', winWidth + 'px');
    //
    //$('.frame-content-container').css('height', winHeight + 'px');
    //$('.frame-content-container').css('width', winWidth*0.9 + 'px');
}


