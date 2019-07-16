$(document).ready(function(){
    $('.navbar a').click(function(){
        $('body,html').animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    });
    $("#debug-page-size").text("Window:  " + $(window).height() + "  Document (inner):  " + $(document).height());
    $(window).on("resize", function(){
        $(".page").height($(document).innerHeight());
    }).resize();
})