$(function(){
  $('.hamburger').on('click',function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open')
    }else{
      $('header').addClass('open');
    }
  });
  $('.menu').on('click',function(){
    $('header').removeClass('open');
  });
  // inview
  $('.reason1').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
  $('.reason2').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
  $('.student-content1').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
  $('.student-content2').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
  $('.student-content3').on('inview',function(event, isInView, visiblePartX, visiblePartY){
    if (isInView){
      $(this).addClass('is-inview');
    }
  });
});