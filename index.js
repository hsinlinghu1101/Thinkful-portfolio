
$('.startButton').on('click', function(event){
  event.preventDefault();
  $('.main').removeAttr('hidden');
  $('main')[0].scrollIntoView();
});

$('.icon').click(function(event){
  event.preventDefault();
  $('.spr').toggle();
    
});

