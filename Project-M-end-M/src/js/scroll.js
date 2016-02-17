$(window).scroll(function(e) {

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
        $('#iconBackToMain').removeClass('hide');
    }
    if( scrollTop < $('#mainFrame').offset().top){
        $('.icon').css('position', 'fixed');
        $('#iconBackToMain').addClass('hide');
    }
});

$(document).ready(function(){
    $('.frame-container').css('height', $(window).height() + 'px');
    $('.frame-container').css('width', $(window).width() + 'px');

    $('.frame-content-container').css('height', $(window).height()*2 + 'px');
    $('.frame-content-container').css('width', $(window).width()*0.8 + 'px');
});

//Event push icons
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

    $('#iconBackToMain').click(function (e) {
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
