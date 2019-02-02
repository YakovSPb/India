$(function() {

    var owl = $(".slider");
    owl.owlCarousel({
        loop : true,
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