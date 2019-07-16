$(document).ready(function(){
    $('.navbar a').click(function(){
        $('body,html').animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    });
    $(window).on("resize", function(){
        $(".page").css("min-height", $(window).innerHeight());
    }).resize();
    /*debug*/
    $("#debug-page-size").text("Window:  " + $(window).height() + "  Document (inner):  " + $(document).height());
})