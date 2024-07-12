$(document).ready(function() {
    $(".window-header").on("mousedown", function(e) {
        var $window = $(this).closest(".window");
        var offsetX = e.clientX - $window.offset().left;
        var offsetY = e.clientY - $window.offset().top;

        $(document).on("mousemove", function(e) {
            $window.css({
                top: e.clientY - offsetY,
                left: e.clientX - offsetX
            });
        }).on("mouseup", function() {
            $(document).off("mousemove mouseup");
        });
    });

    $(".minimize").click(function() {
        $(this).closest(".window").toggleClass("minimized");
    });

    $(".maximize").click(function() {
        $(this).closest(".window").toggleClass("maximized");
    });

    $(".close").click(function() {
        $(this).closest(".window").remove();
    });
});
