var isClicked = false;
$(document).ready(function(){

  /*----header----*/
    $('.btn-menu').click(function() {
        $(this).toggleClass('active');
    });
    $('.btn-menu').click(function() {
        $('body').toggleClass('show-menu');
    });
    $('.nav-mobile__list li .link').click(function() {
        $('.btn-menu').removeClass('active');
    });
    $('.nav-mobile__list li .link').click(function() {
        $('body').removeClass('show-menu');
    });
    $('.show-sub').click(function() {
        $(this).toggleClass('active');
        $('.menu-sub').toggleClass('show');
    });
	// lastScroll = 0;
	// $(window).on('scroll',function() {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll > 0) {
	// 		$("header").addClass("sticky-header");
	// 		if (lastScroll - scroll > 0) {
	// 			$("header").removeClass("sticky-header");
	// 		} else {
	// 			$("header").addClass("full-header");
	// 		}
	// 	} else {
	// 		$("header").removeClass("full-header");
	// 	}
	// 	lastScroll = scroll;
	// });

  /*----button scroll----*/
  $('.banner-scroll span').click(function() {
    var $heightHeader = $('header').height();
    $('html, body').animate({ scrollTop: $('.top-maps').offset().top - $heightHeader }, 1000);
  });

  /*----Slick slider----*/
//   $('.our-products-item').slick({
// 		centerMode: false,
// 		slidesToShow: 9,
// 		arrows: false,
// 		autoplay: true,
// 		responsive: [
// 			{
// 			  breakpoint: 768,
// 			  settings: {
//           dots: true,
//   				centerMode: true,
//   				slidesToShow: 2
// 			  }
// 			},
// 			{
// 			  breakpoint: 600,
// 			  settings: {
//           dots: true,
// 				  slidesToShow: 2
// 			  }
// 			},
//       {
// 			  breakpoint: 420,
// 			  settings: {
//           dots: true,
// 				  slidesToShow: 1,
//           centerMode: true
// 			  }
// 			}
// 		]
// 	});


  /*----Back to Top----*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.pagetop').addClass('active');
		} else {
			$('.pagetop').removeClass('active');
		}
	});

	$(".pagetop a").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

});

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
  }
);
wow.init();
