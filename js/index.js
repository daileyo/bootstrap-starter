$(document).ready(function(){
    $('.navbar a').click(function(){
        $('body,html').animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    });
    $(window).on("resize", function(){
        $('.page').height($(document).innerHeight());
    }).resize();
})