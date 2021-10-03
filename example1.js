
$('body').scrollspy({ target: '.navmenu' });


$("ul.qcontrols li").click(function(){
  if (!$(this).hasClass("active")) {
    $("ul.qcontrols li.active").removeClass("active");
    $(this).addClass("active");
  }
});


var wow = new WOW({
    mobile: false
});
wow.init();

jQuery(document).ready(function( $ ) {
        $('.circle').circleProgress({
        value: 0.70,
        startAngle: 4.75,
        size: 200,
        fill: { gradient: ["#FFFFFF"] }
      });
        $('.two').circleProgress({
          value: 0.75,
        });
        $('.three').circleProgress({
          value: 0.50,
        });
        $('.four').circleProgress({
          value: 0.90,
        });

    $('#clients-carousel').owlCarousel({
        navigation: false,
        slideSpeed: 400,
        paginationSpeed: 800,
        autoPlay: true,
        pagination : false,
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });
       $('#menu').click(function(){
       $('#menu').not(this).removeClass("active");
       $(this).toggleClass("active");
      });

  });


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
