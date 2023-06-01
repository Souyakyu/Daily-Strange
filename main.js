$(document).ready(function(){
//この中にjQueryを書く

$('.back').fadeIn();
$('.back').css('width','100%');

$('#hako').click(function(){
	if($('.open-ac').hasClass('closed')){
		$('.open-ac').removeClass('closed');
		$('.open-ac').slideDown();
	}else{
		$('.open-ac').addClass('closed');
		$('.open-ac').slideUp();
	}
});

$(function() {
	let target = $(".menu-container").offset().top;
	$(window).on("scroll", function() {
	  let currentPos = $(window).scrollTop();
	  if(currentPos > target) {
		$(".menu-container").addClass('sticky');
	  } else{
		$(".menu-container").removeClass('sticky');
	  }
	});
  });
  
 
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	
	slidesPerView: 5,
	spaceBetween: 0,
	centeredSlides: true,
	initialSlide: 0,

	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		reverseDirection: false
	},

	breakpoints: {

		1400: {
			slidesPerView: 4,
			spaceBetween: 0,
			initialSlide: 0,
		},

		1100: {
			slidesPerView: 3,
			spaceBetween: 0,
			initialSlide: 0,
		},

		850: {
			slidesPerView: 2,
			spaceBetween: 0,
			initialSlide: 0,
		},

		670: {
			slidesPerView: 1,
			spaceBetween: 0,
			initialSlide: 0,
		}
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

});