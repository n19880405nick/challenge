$(function(){
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 700){
			$('.totop').fadeIn();
		}else{
			$('.totop').fadeOut();
		}
	});
	$('a[href^="#').click(function(){
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top;
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
});