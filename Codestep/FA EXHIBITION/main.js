$(function(){
  $('.humberger').on('click', function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open');
    }else{
      $('header').addClass('open');
    }
  });

});