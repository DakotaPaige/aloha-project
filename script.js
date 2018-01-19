$(function() {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    resize: true
  })
});

$('#subscribe').on('submit', function(event) {
  event.preventDefault();
  if ( $('.input').val() == '') {
    alert('Please submit a valid email address.');
  } else {
    alert('Thanks for subscribing!');
  }
});