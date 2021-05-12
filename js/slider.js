
$('.slider__wrapp').slick({
    slidesToShow: 3,
    prevArrow: $(".slider__arrow-prev"),
    nextArrow: $(".slider__arrow-next"),
    responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	        slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          initialSlide: 1,

	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            centerMode: false,
            dots: false,
	      }
	    }
    ]
  });

    $(function() {
    
      $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
      })
    
    })