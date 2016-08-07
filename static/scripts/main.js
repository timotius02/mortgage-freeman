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
  $("html, body").animate(
    { scrollTop: "800px" },
    800
  );
});

// capital one login
$('.landing-page__submit-button').click(function() {
  event.preventDefault();
  const debitNumber = $('#landing-page__input').val()
  $('#landing-page').hide();
  $('#info').show();
  //data(debitNumber);
  $('.info__button--inactive').click(function(e) {
      e.preventDefault();
      var purchaseType = $(this).text()

      $('.info__button-submit').click(function(e) {
        e.preventDefault();
        var amtBorrowed = $('.info__input').val();
        console.log(debitNumber);
        console.log(purchaseType);
        console.log(amtBorrowed);
        
        var data = { 
          debitNumber: debitNumber,
          purchaseType: purchaseType,
          amtBorrowed: amtBorrowed
        };

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/suggestions',
            dataType : 'json',
            data: JSON.stringify(data),
            success : function(result) {
              console.log('success') 
            },
            error: function(result) {
               console.log(result);
            }
        });
      })
  })
});
