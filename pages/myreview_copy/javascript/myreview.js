$('#menu').on('click', function (){
  $('nav').animate({width: 'toggle'}, 250);
});
$('nav').on('click', function (){
  $('nav').animate({width: 'toggle'}, 250);
});
$('.reviewTitle').on('click', function () {
  $(this).find('.comment').slideToggle();
  if ($(this).css('opacity') != '1') {
    $(this).css('opacity', '1');
  }
  else {
    $(this).css('opacity', '0.8');
  }
});

$('#pageTitle').on('click', function() {
  $('#profileInfo').slideToggle();
});
