(function ($) {
    "use strict";

    /*----------------------------
     templateColor
    ------------------------------ */

    $('.palette i').on('click', function () {
        $(".palette").toggleClass("show-palette");
        $(".palette i").toggleClass("fa-send").toggleClass("fa-send-o");
    });

    $('li.color1').on('click', function () {
        $("body").addClass("sw-color1").removeClass("sw-color2 sw-color3 sw-color4 sw-color5");
    });

    $('li.color2').on('click', function () {
        $("body").addClass("sw-color2").removeClass("sw-color1 sw-color3 sw-color4 sw-color5");
    });

    $('li.color3').on('click', function () {
        $("body").addClass("sw-color3").removeClass("sw-color1 sw-color2 sw-color4 sw-color5");
    });

    $('li.color4').on('click', function () {
        $("body").addClass("sw-color4").removeClass("sw-color1 sw-color2 sw-color3 sw-color5");
    });

    $('li.color5').on('click', function () {
        $("body").addClass("sw-color5").removeClass("sw-color1 sw-color2 sw-color3 sw-color4");
    });


})(jQuery);
