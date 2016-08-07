// disabling button transition style on click
$('button').click(function() {
  this.style.transition = 'none'
});

// landing page button animate
$('.landing-page__button').click(function() {
  $(this).hide('easeInOutCubic');
  $('.landing-page__form').fadeIn();
});

// user info flow
$('.info__button--inactive').click(function(event) {
  $('.info__button--inactive').hide();
  const infoChoice = this.innerText;
  const infoDynamicTitle = document.createElement('h3');
  infoDynamicTitle.innerText = 'How much is your ' + this.innerText + '?';
  $('.info-dynamic-title').hide();
  $('#info').prepend(infoDynamicTitle);
  $('.info__input').fadeIn();
  $('.info__button-submit').fadeIn();
});

$('.suggestions__footer-link').click(function() {
  $("html, body").animate({ scrollTop: "800px" });
});
