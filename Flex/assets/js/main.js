$(document).ready(function() {


// Add jQuery here

$('.nav_featured').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.featured').removeClass('hide');
  $('.item.featured').addClass('show');
});
    
    
$('.nav_vintage').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.vintage').removeClass('hide');
  $('.item.vintage').addClass('show');
});
    
    
$('.nav_modern').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.modern').removeClass('hide');
  $('.item.modern').addClass('show');
});

    
$('.nav2_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');
});


$('.nav2_full').click(function(event){
  $('.item').addClass('full');
  $('.item').removeClass('thumbnail');
});

















  });
