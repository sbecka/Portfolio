'use strict';

//Have 4 links that 
//need to change the header and divs in the <main>

function clickingOnNavLinks() {
    //console.log('clickingOnNavLinks ran');
    $(".js-about").hide();
    $(".js-portfolio").hide();
    $(".js-contact").hide();
    $(".js-nav-about").removeClass("selected");
    $(".js-nav-portfolio").removeClass("selected");
    $(".js-nav-contact").removeClass("selected");
    
//when click on a nav link
//it will show the corresponding section
//and hide the other sections
    $(".js-nav-home").click(function() {
        $(this).addClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-home").show();
        $(".js-about").hide();
        $(".js-portfolio").hide();
        $(".js-contact").hide();
    });

    $(".js-nav-about").click(function () {
        //console.log('about ran');
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-about").show();
        $(".js-home").hide();
        $(".js-portfolio").hide();
        $(".js-contact").hide();
    });

    $(".js-nav-portfolio").click(function () {
        //console.log("portfolio ran");
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-portfolio").show();
        $(".js-home").hide();
        $(".js-about").hide();
        $(".js-contact").hide();
    });

    $(".js-nav-contact").click(function () {
        //console.log("contact ran");
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");

        $(".js-contact").show();
        $(".js-home").hide();
        $(".js-about").hide();
        $(".js-portfolio").hide();
    });

};

$(clickingOnNavLinks);