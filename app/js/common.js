$(function() {

    $('.open-popup-link').magnificPopup({
  type:'inline',
  closeOnContentClick:'true',

  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $(".sect-2__wrap .popup-with-zoom-anim").click(function(){
        $('.popup-form h3').html('Получить анкету на почту');
        $('.popup-form label:eq(1) span').html('Ваша почта:');
        $('.popup-form label:eq(1) input').attr('placeholder', 'Введите вашу почту...');
        $('#callback .formname').val($(this).data("form"));
    });

    $(".sect-3 .popup-with-zoom-anim").click(function(){
          $('.popup-form h3').html('Заказать звонок');
          $('.popup-form label:eq(1) span').html('Ваш телефон:');
           $('.popup-form label:eq(1) input').attr('placeholder', 'Введите ваш телефон...');
        $('#callback .formname').val($(this).data("form"));
    });

    $(".sect-7 .popup-with-zoom-anim").click(function(){
          $('.popup-form h3').html('Получить скидку');
          $('.popup-form label:eq(1) span').html('Ваш телефон:');
           $('.popup-form label:eq(1) input').attr('placeholder', 'Введите ваш телефон...');
        $('#callback .formname').val($(this).data("form"));
    });

    $(".sect-9 .popup-with-zoom-anim").click(function(){
          $('.popup-form h3').html('Узнать подробнее');
          $('.popup-form label:eq(1) span').html('Ваш телефон:');
           $('.popup-form label:eq(1) input').attr('placeholder', 'Введите ваш телефон...');
        $('#callback .formname').val($(this).data("form"));
    });
     $(".foot .popup-with-zoom-anim").click(function(){
          $('.popup-form h3').html('Оставить заявку');
          $('.popup-form label:eq(1) span').html('Ваш телефон:');
           $('.popup-form label:eq(1) input').attr('placeholder', 'Введите ваш телефон...');
        $('#callback .formname').val($(this).data("form"));
    });

     $(".sect-2__content").click(function(){
          $('.popup-form h3').html('Получить все предложения');
          $('.popup-form label:eq(1) span').html('Ваша почта:');
           $('.popup-form label:eq(1) input').attr('placeholder', 'Введите вашу почту...');
        $('#callback .formname').val($(this).data("form"));
    });

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



//E-mail Ajax Send
     $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(th).find('.success2').addClass('active').css('display', 'flex').hide().fadeIn();
                $(".success").addClass("visible");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                $(th).find('.success2').removeClass('active').fadeOut();    
                $(".success").removeClass("visible");
                $.magnificPopup.close();
                }, 3000);
            });
            return false;
        });



});
$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
})