$(document).ready(function(){
	$(".header-contacts__action").on("click", function(){
		$('.overlay-contact').css('display', 'flex')
	});
	$(".questions-order").on("click", function(){
		$('.overlay-contact').css('display', 'flex')
	});
	$(".main-button").on("click", function(){
		$('.overlay-contact').css('display', 'flex')
	});
	$(".flower-1").on("click", function(){
		$('.flower_1').css('display', 'flex')
	});
	$(".flower-2").on("click", function(){
		$('.flower_2').css('display', 'flex')
	});
	$(".flower-3").on("click", function(){
		$('.flower_3').css('display', 'flex')
	});
	$(".flower-4").on("click", function(){
		$('.flower_4').css('display', 'flex')
	});
	$(".flower-5").on("click", function(){
		$('.flower_5').css('display', 'flex')
	});
	$(".flower-6").on("click", function(){
		$('.flower_6').css('display', 'flex')
	});
	$(".features-photo_1").on("click", function(){
		$('.overlay-photo').css('display', 'flex');
		$(".popup-photo_1").show();
		$(".popup-photo_2").hide()
	});
	$(".features-photo_2").on("click", function(){
		$('.overlay-photo').css('display', 'flex');
		$(".popup-photo_2").show();
		$(".popup-photo_1").hide()
	});
	$(".popup-close").on("click", function(){
		$(".overlay").hide()
	});
});