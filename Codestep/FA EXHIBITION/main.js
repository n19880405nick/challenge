$(function(){
  // ハンバーガーメニュー
  $('.humberger').on('click', function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open');
    }else{
      $('header').addClass('open');
    }
  });
  // ヘッダの表示
  $(window).on('scroll',function(){
		if($(window).scrollTop() > 520){
			$('header').fadeIn();
		}else{
			$('header').fadeOut();
		}
	});
  // 	メインビジュアルのサイズ変更
  $(window).on('scroll',function(){
		$('#top img').css('width', 100/3 + $(window).scrollTop()/10 + '%');
	});
  // 	フェードイン
  $('.is-inview').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview-fadein');
    }
  });
});