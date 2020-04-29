'use strict';

//Have 4 links need to change the header and divs in the <main>

function clickHome() {
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

    $(".js-nav-home").keypress(function() {
        $(this).addClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-home").show();
        $(".js-about").hide();
        $(".js-portfolio").hide();
        $(".js-contact").hide();
    });
};

function clickAbout() {
    $(".js-nav-about").click(function () {
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-about").show();
        $(".js-home").hide();
        $(".js-portfolio").hide();
        $(".js-contact").hide();
    });

    $(".js-nav-about").keypress(function() {
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-about").show();
        $(".js-home").hide();
        $(".js-portfolio").hide();
        $(".js-contact").hide();
    });
};

function clickPorfolio() {
    $(".js-nav-portfolio").click(function () {
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-portfolio").show();
        $(".js-home").hide();
        $(".js-about").hide();
        $(".js-contact").hide();
    });

    $(".js-nav-portfolio").keypress(function () {
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-contact").removeClass("selected");

        $(".js-portfolio").show();
        $(".js-home").hide();
        $(".js-about").hide();
        $(".js-contact").hide();
    });
};

function clickContact() {
    $(".js-nav-contact").click(function () {
        $(this).addClass("selected");
        $(".js-nav-home").removeClass("selected");
        $(".js-nav-about").removeClass("selected");
        $(".js-nav-portfolio").removeClass("selected");

        $(".js-contact").show();
        $(".js-home").hide();
        $(".js-about").hide();
        $(".js-portfolio").hide();
    });

    $(".js-nav-contact").keypress(function () {
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


function clickingOnNavLinks() {
    $(".js-about").hide();
    $(".js-portfolio").hide();
    $(".js-contact").hide();
    $(".js-nav-about").removeClass("selected");
    $(".js-nav-portfolio").removeClass("selected");
    $(".js-nav-contact").removeClass("selected");
    
//when click on a nav link
//it will show the corresponding section
//and hide the other sections
    clickHome();
    clickAbout();
    clickPorfolio();
    clickContact();

    let currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = `©${currentYear} Sabrina Becker`; 
};

$(clickingOnNavLinks);