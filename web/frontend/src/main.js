import subscribeForm from './blocks/subscribeForm'

$(document).ready(function () {

    var header = $('header');
    var pageWidth = $(window).width();

    // Add Event Listener to parent Element 
    
    //functions to run on scroll
    $(window).scroll(function(){
      //only run parallax if on desktop screen
      //(mobile parallax interferes with content consumption)
      if ( pageWidth > 800 ) {
        parallax();
      }
    });
  
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.has-parallax').css(
        'top', (scrolled*0.3)+'px'
      );
    }
  
    function headerAnimate(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop > 20) {
        header.addClass('scrolled');
      } else {
        header.removeClass('scrolled');
      }
    }
      
    $('#carousel-1').owlCarousel({
      loop: true,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    })

    $(".scroller").click(function() {
      var href = $(this).attr('href');
      $([document.documentElement, document.body]).animate({
          scrollTop: $(href).offset().top
      }, 400);
    });

    $(".scroller-mobile").click(function() {
      var href = $(this).attr('href');
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $(href).offset().top
      }, 400);
    });

});


window.onload = function() {
  
  var placeholder = document.querySelector('#hero-image');
  var imgLarge = new Image();

  imgLarge.src = placeholder.dataset.large; 
  imgLarge.onload = function () {
    placeholder.classList.add('hero__image_loaded');
  };
}