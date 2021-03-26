var isClicked = false;
$(document).ready(function(){

    if ( $('body').scrollTop() > $('.animation-button-2').position.top ) {
        $('.animation-button-2').addClass('selected');
    }

    var nav = $('.menu-primary');

    if ( nav.size() !== 0 ) {
        var offsetTop = $('.menu-primary').offset().top,
            headerHeight = $('.menu-primary').height(),
            injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);
        injectSpace.hide();

        $(window).on('load scroll', function(){
            if ( $(window).scrollTop() > offsetTop ) {
                if ( $('.menu-primary').hasClass('header-classic') ) {
                    injectSpace.show();
                }
                $('.menu-primary').addClass('downscrolled');
            } else {
                $('.menu-primary').removeClass('downscrolled');
                injectSpace.hide();
            }
        })
    }

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
    $('.clinic-slide-page').slick({
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        loop: true,
        asNavFor: '.clinic-slide-page-nav',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.clinic-slide-page-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.clinic-slide-page',
        dots: true,
        arrows: false,
        loop: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

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
