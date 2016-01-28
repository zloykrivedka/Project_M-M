

//Скрипт для эфекта увеличения при скроле
//И эфекта длюра
//$('.arkaplan').css('-webkit-filter', 'blur(5px)');
$(window).scroll(function(e) {
    var scrollSeviye = $(this).scrollTop();

    if(scrollSeviye>3600){
        scrollSeviye=3600;
    }

    var buyutme = (scrollSeviye/10000)+1;

    $('.bg-container').css('-webkit-filter', 'blur('+scrollSeviye/1200+'px)');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStart').click(function (e) {
        $.scrollTo('#endPage', 4000);
        $('.bg-container').removeClass('animate-end');
        $('.bg-container').addClass('animate-start');
    });
});

//А вот и в обратную сторону
$(function() {
    $('#iconEnd').click(function (e) {
        $.scrollTo('#startPage', 4000);
        $('.bg-container').removeClass('animate-start');
        $('.bg-container').addClass('animate-end');
    });
});
