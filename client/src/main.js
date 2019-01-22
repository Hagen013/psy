$(document).ready(function () {

    var header = $('header');
    var pageWidth = $(window).width();

    // Add Event Listener to parent Element 
    document.querySelector('.scroller').addEventListener("click", reply_click);
    
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
        'top', (scrolled*0.6)+'px'
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
  
    $(".js-soon").on("click", function (e) {
      e.preventDefault();
      $(this).text("Coming Soon...");
      resetText($(this), "Learn more");
    });
    
    $('#carousel-1').owlCarousel({
      loop: true,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    })

});
