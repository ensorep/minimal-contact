var main = function(){
//make navbar disappear
$('.navlink').removeClass('active');
$('.info').removeClass('active');
$('.bord').removeClass('active');
$('#top').removeClass('active');


//fade in navbar when logo is hovered over
$('.logo').hover(function(){
  $('.navlink').addClass('active');
  $('.bord').addClass('active');
  $('.active').fadeIn(600);
});



// fade in info when respective navbar link is hovered
$('.about').hover(function(){
  $('.inabout').addClass('active');
  $('.active').fadeIn(600);
});

$('.approach').hover(function(){
  $('.inapproach').addClass('active');
  $('.active').fadeIn(600);
});

$('.contact').hover(function(){
  $('.incontact').addClass('active');
  $('.active').fadeIn(600);
});

$('.why').hover(function(){
  $('.inwhy').addClass('active');
  $('.active').fadeIn(600);
});


// border effect

$('#top').hover(function() {
  $('#bottom').fadeIn(600);

});

$('#left').hover(function() {
  $('#left').fadeOut(400);
  $('#right').fadeIn(600);

});

$('#right').hover(function() {
  $('#right').fadeOut(400);
  $('#left').fadeIn(600);

$('#bottom').hover(function() {
  $('#bottom').fadeOut(600);
})



});


};

$(document).ready(main);
