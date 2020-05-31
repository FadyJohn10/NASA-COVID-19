/* global $, window */

$(function () {
    
    "use strict";
    
    //adjust slider height

    var winH = $(window).height(),
        navH = $('.navbar').innerHeight();

    $('.page-header').height(winH - navH - 60);

    //adjust video height

    $("video").height(winH - navH);
                                      
});