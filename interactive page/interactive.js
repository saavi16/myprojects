
$('.icon-menu').click(function(event) {
  /* Act on the event */ 
  $('.menu').animate({left: '0px'}, 200);
  $('body').animate({left: '285px'}, 200);
});
$('.icon-close').click(function(event) {
  /* Act on the event */
  $('.menu').animate({left: '-285px'}, 200);
  $('body').animate({left: '0px'}, 200);


});
$(document).ready(main); 

  
  /* Act on the event */
});