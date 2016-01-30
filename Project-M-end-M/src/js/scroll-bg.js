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
    $.scrollTo($(document).height()-$(window).height(), 2000);
}

function goStart(){
    $('.bg-container').removeClass('animate-start');
    $('.bg-container').addClass('animate-end');
    $.scrollTo('#startPage', 700);
}
