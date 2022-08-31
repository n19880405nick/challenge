$(function(){
	$('a[href^="#').click(function(){
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top - 100;
		$("html, body").animate({scrollTop:position}, 600, "swing");
	});
	$('.hamburger').on('click',function(){
		if($('header').hasClass('open')){
			$('header').removeClass('open');
		}else{
			$('header').addClass('open');
		}
	});
	$('nav').on('click',function(){
		$('header').removeClass('open');
	});
	$('.mask').on('click',function(){
		$('header').removeClass('open');
	});
	// slider
	$('.slider').slick({
		infinite: true,
  	slidesToScroll: 1,
  	slidesToShow: 1,
		centerMode: true,
  	variableWidth: true
	});
	// inview
	$('.feature-image').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
});