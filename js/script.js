$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle(1000);
    event.preventDefault();
  });
});