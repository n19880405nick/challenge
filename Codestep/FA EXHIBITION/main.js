$(function(){
  // ハンバーガーメニュー
  $('.humberger').on('click', function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open');
    }else{
      $('header').addClass('open');
    }
  });
  $('nav').on('click', function(){
	   $('header').removeClass('open');
	});
  // ヘッダの表示
  $(window).on('scroll',function(){
		if($(window).scrollTop() > 520){
			$('header').fadeIn();
		}else{
			$('header').fadeOut();
		}
	});
  // 	スムーズスクロール
  $('a[href^="#').click(function(){
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top;
		$("html, body").animate({scrollTop:position}, 600, "swing");
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
  // アクセスの表示と非表示
  $('#access .title').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $('.bg').fadeIn();
    }else{
      $('.bg').fadeOut();
    }
  });
  $('#contact .title').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $('.bg').fadeOut();
    }
  });
  // サイドバーの表示と非表示
  $('#gallery').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $('#sidebar').addClass('is-inview-side');
    }else{
      $('#sidebar').removeClass('is-inview-side');
    }
  });
});