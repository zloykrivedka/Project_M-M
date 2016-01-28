

//Скрипт для эфекта увеличения при скроле
//И эфекта длюра
//$('.arkaplan').css('-webkit-filter', 'blur(5px)');
$(window).scroll(function(e) {
    var scrollSeviye = $(this).scrollTop();

    if(scrollSeviye>3600){
        scrollSeviye=3600;
    }

    var buyutme = (scrollSeviye/10000)+1;
    //var bayutme2 = $(this).scrollTop / ($(window).height - $(document).height);

    //$('.arkaplan').css('-webkit-filter', 'blur('+500/scrollSeviye+'px)');
    $('.bg-container').css('-webkit-filter', 'blur('+scrollSeviye/1200+'px)');

    $('.bg-container').css('-ms-filter', 'blur('+scrollSeviye/1200+'px)');
    $('.bg-container').css('transform', 'scale('+buyutme+')');
});

//Эфент нажатия на иконку (первую)
$(function() {
    $('#iconStart').click(function (e) {
        $.scrollTo('#endPage', 4000);
    });
});

//А вот и в обратную сторону
$(function() {
    $('#iconEnd').click(function (e) {
        $.scrollTo('#startPage', 4000);
    });
});
