var THEMEMASCOT = {};
(function($) {

	"use strict";


  /* ---------------------------------------------------------------------- */
  /* --------------------------- Start Demo Switcher  --------------------- */
  /* ---------------------------------------------------------------------- */
  var showSwitcher = true;
  var $body = $('body');
  var $style_switcher = $('#style-switcher');
  if( !$style_switcher.length && showSwitcher ) {
      $.ajax({
          url: "color-switcher/style-switcher.html",
          success: function (data) { $body.append(data); },
          dataType: 'html'
      });
  }
  /* ---------------------------------------------------------------------- */
  /* ----------------------------- En Demo Switcher  ---------------------- */
  /* ---------------------------------------------------------------------- */


  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") === "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.isLTR = {
    check: function() {
      if( $( "html" ).attr("dir") !== "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}



	// Call headerStyle on scroll
	$(window).on('scroll', function() {
		headerStyle();
	});

	// Also call on page load to handle reload
	$(document).ready(function() {
		headerStyle();
	});


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();
	
	// Header hide on scroll down, show on scroll up (optional)

	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//>> Scrolldown Start <<//
	if ($('.single-select').length) {
    $('.single-select').niceSelect();
  }
	
	if ($(window).width() > 991) {
		if ($(window).width() > 768) {
			$('.parallaxie').parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	// Elements Animation
	new WOW().init();


	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}

	//Home 03 Slider
	if (document.querySelector(".banner-active")) {
		var swiper = new Swiper(".banner-active", {
			speed: 1500,
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	if (document.querySelector(".banner-active2")) {
		var swiper2 = new Swiper(".banner-active2", {
			speed: 1500,
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			on: {
				init: function () {
					let total = this.slides.length - this.loopedSlides * 2;
					document.querySelector(".banner-pagination .total").textContent =
						String(total).padStart(2, "0");
					document.querySelector(".banner-pagination .current").textContent =
						String(this.realIndex + 1).padStart(2, "0");

					document.querySelector(".banner-pagination .current").classList.add("active");
				},
				slideChange: function () {
					let currentEl = document.querySelector(".banner-pagination .current");
					currentEl.textContent = String(this.realIndex + 1).padStart(2, "0");

					currentEl.classList.add("active");
				}
			}
		});
	}
	
	//Service Slider
	if($('.service-slider').length > 0) {
		const serviceSlider = new Swiper(".service-slider", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1399: {
					slidesPerView: 1.4,
				},
				1199: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.5,
				},
				575: {
					slidesPerView: 1.3,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	if($('.room-service-slider').length > 0) {
		const roomServiceSlider = new Swiper(".room-service-slider", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1399: {
					slidesPerView: 1.5,
				},
				1199: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.2,
				},
				575: {
					slidesPerView: 1.1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//Room Slider
	if($('.room-slider-1').length > 0) {
		const roomSlider1 = new Swiper(".room-slider-1", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot1",
				clickable: true,
			},

			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	if($('.room-section-3-slider').length > 0) {
		const roomSection3Slider = new Swiper(".room-section-3-slider", {
			spaceBetween: 0,
			speed: 1000,
			pagination: false,
			navigation: {
				nextEl: ".project__arry-next",
				prevEl: ".project__arry-prev",
			},
			mousewheel: false,
			keyboard: true,
			autoplay: false,
			loop: false,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 2,
				},
				787: {
					slidesPerView: 2.6,
				},
				991: {
					slidesPerView: 3,
				},
				1399: {
					slidesPerView: 4,
				},
			},
		});
	}

	if($('.executive-room-slider').length > 0) {
		const executiveRoomSlider = new Swiper(".executive-room-slider", {
			speed: 1300,
      loop: true,
			spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
			pagination: {
				el: ".dot1",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});
	}

	// Project change background image area end here ***
	$(".room-section-3-slider .swiper-slide").on("mouseenter click", function () {
		var tab_id = $(this).attr("data-tab");
		$(".room-section-3-slider .swiper-slide").removeClass("active");
		$(this).addClass("active");

		$(".room-section-3-image .tab-img ").removeClass("active");
		$("#" + tab_id).addClass("active");

		if ($(this).hasClass("active")) {
			return false;
		}
	});

	if($('.room-offer-slider').length > 0) {
		const roomOfferSlider = new Swiper(".room-offer-slider", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},

			breakpoints: {
				1599: {
					slidesPerView: 4,
				},
					1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//Team Slider
	if($('.team-slider').length > 0) {
		const teamSlider = new Swiper(".team-slider", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}
	
	//Testimonial Slider
	if($('.testimonial-slider').length > 0) {
		const testimonialSlider = new Swiper(".testimonial-slider", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	if($('.testimonial-slider-2').length > 0) {
		const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.5,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	if($('.testimonial-slider-3').length > 0) {
		const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2.5,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1.2,
				},
				400: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	if($('.testimonial-slider-4').length > 0) {
		const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
			spaceBetween: 30,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.6,
				},
				575: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	if($('.testimonial-slider-5').length > 0) {
		const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
			spaceBetween: 30,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot5",
				clickable: true,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.6,
				},
				575: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//Testimonial Slider
	if($('.instagram-slider-5').length > 0) {
		const instagramSlider5 = new Swiper(".instagram-slider-5", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1399: {
					slidesPerView: 6,
				},
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				400: {
					slidesPerView: 1.3,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//Quantity box
  $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });

  $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
      nextSelector: '.product-details #slider-next',
      prevSelector: '.product-details #slider-prev',
      nextText: '<i class="fa fa-angle-right"></i>',
      prevText: '<i class="fa fa-angle-left"></i>',
      mode: 'fade',
      auto: 'true',
      speed: '700',
      pagerCustom: '.product-details .slider-pager .thumb-box'
    });
	};

	//MixItup Gallery
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

  // count Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
        }, {
        accY: -50
      }
    );
  }

	
	//>> Destination Hover Js Start <<//
  const getSlide = $('service-wrapper-2, .service-box-items-2').length - 1;
  const slideCal = 100 / getSlide + '%';
  
  $('.service-wrapper-2').css({
    "width": slideCal
  });
  
  $(document).on('mouseenter', '.service-box-items-2', function() {
    $('.service-box-items-2').removeClass('active');
    $(this).addClass('active');
  });		
	
	
	// Section Title Animation
  if ($('.char-animation').length > 0) {
    let char_come = gsap.utils.toArray(".char-animation");
    char_come.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'

        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" })
      tl.from(itemSplitted.chars,
        {
          duration: 1,
          delay: 0.5,
          x: 100,
          autoAlpha: 0,
          stagger: 0.05
        });
    });
  }

	document.addEventListener("DOMContentLoaded", function () {
		if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
			ScrollTrigger.matchMedia({
				"(min-width: 1200px)": function () {
					const animations = [
						{ selector: ".get-in-text", x: 100 },
						{ selector: ".get-in-text2", x: 100 },
						{ selector: ".royalrix-text-2", x: 100 },
					];

					animations.forEach(anim => {
						const el = document.querySelector(anim.selector);
						if (el) {
							gsap.to(anim.selector, {
								x: anim.x,
								ease: "none",
								scrollTrigger: {
									trigger: anim.selector,
									start: "top bottom",
									end: "top top",
									scrub: true,
								},
							});
						}
					});
				}
			});
		}
	});


	// About shape
	document.addEventListener("DOMContentLoaded", function () {
	const shapes = document.querySelectorAll(".suite-bg-shape");
		if (shapes.length > 0) {
			gsap.registerPlugin(ScrollTrigger);
			shapes.forEach((shape) => {
			let counterImgTL = gsap.timeline({
				scrollTrigger: {
				trigger: shape,
				start: "top 80%",
				end: "bottom 10%",
				scrub: 2,
				markers: false,
				}
			});
			counterImgTL.fromTo(
				shape,
				{ x: 300 },
				{ x: 0, duration: 1.6 }
			);
			});
		}
	});


	gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function(container) {
		let image = container.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: .5,
			},
		});
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		});
	});

	if ($('.instagram-area').length > 0) {
		let ins = gsap.matchMedia();
		ins.add("(min-width: 1200px)", () => {
			let instagramTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: ".instagram-area",
					start: "top 30%",
					end: "bottom 100%",
					scrub: 1,
					pin: true,
					pinSpacing: false,
					markers: false
				}
			});

			instagramTimeline.to(".instagram-thumb > img", {
				width: "527px",
				height: "527px",
				duration: 3,
				ease: "none"
			});
		});
	}

	//Header Search
	if ($(".search-toggler").length) {
		$(".search-toggler").on("click", function(e) {
			e.preventDefault();
			$(".search-popup").toggleClass("active");
			$("body").toggleClass("locked");
		});
	}

	//>> Back Too Top Start <<//
	function back_to_top() {
	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');
	var windowOn = $(window); // Define windowOn properly

	windowOn.on('scroll', function () {
		if (windowOn.scrollTop() > 300) {
			btn_wrapper.addClass('back-to-top-btn-show');
		} else {
			btn_wrapper.removeClass('back-to-top-btn-show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 300); 
	});
	}

	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});

	back_to_top();


})(window.jQuery);
