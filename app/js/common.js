$(function() {

    $(".fancybox").fancybox();

    jQuery:
    $(".tab_item").not(":first").hide();
    $(".tabs-wrap .tab").click(function() {
        $(".tabs-wrap .tab").removeClass("active").eq($(this).index()).addClass

        ("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    var clock;
    clock = $(".clock").FlipClock({
        clockFace : "DailyCounter",
        autoStart : false,
        language: 'ru-ru'﻿,
        callbacks : {
            stop : function(){
                $('.message').html("Время прошло");
            }
        }
    });

    clock.setTime(5000);
    //clock.setCountdown(true);
    clock.start();



    $(".six-item p").equalHeights(); 

    var owl = $(".slider");
    owl.owlCarousel({
        loop : true,
        smartSpeed: 700,
        items: 4,
        itemClass: "slide-wrap",
        nav: false,
        dots: true,
        dotsEach: 2,
        responsive:{
            0:{
                items:1,
                dotsEach: 1    
            },

            600:{
                items:2,
                dotsEach: 1
            },
            1000:{
                items:3,
                dotsEach: 1
            },
            1200:{
                items:4,    

            },
        }
    });


    var owl2 = $(".slider2");
    owl2.owlCarousel({
        loop : true,
        smartSpeed: 700,
        items: 1,
        itemClass: "slide-wrap",
        nav: false,
        dots: true,
        dotsEach: 1,

    });


    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

    });

});


$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
})