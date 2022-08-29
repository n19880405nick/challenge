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
});