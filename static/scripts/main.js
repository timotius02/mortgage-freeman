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
  const infoDynamicTitle = document.createElement('h3');

  infoDynamicTitle.innerText = 'How much is your purchase' + '?';
  $('.info__title').hide();
  $('#info').prepend(infoDynamicTitle);

  $('.info-dollar-sign').css('display', 'inline').fadeIn();
  $('.info__input').css('display', 'inline').fadeIn();
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

  $('.info__button--inactive').click(function(e) {
      e.preventDefault();
      var purchaseType = $(this).text()

      $('.info__button-submit').click(function(e) {
        e.preventDefault();
        var amtBorrowed = $('.info__input').val();
        console.log(debitNumber);
        console.log(purchaseType);
        console.log(amtBorrowed);

        var upperLimit = ProcessApiCalls(debitNumber);

        var data = {
          upperLimit: upperLimit,
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
              if (Array.isArray(result))
                console.log(result)
              else
                console.log(result)

              $('#info').hide();
              $('#suggestions').show();
              $('#charts').show();


              var ctx = $("#lineChart");
              var myChart = new Chart(ctx, {
                  type: 'line',
                  data: window.data,
                  options: {

                  }
              });

              var ctx2 = $("#pieChart");
              var myDoughnutChart = new Chart(ctx2, {
                  type: 'doughnut',
                  data: window.data2,
                  options: {

                  }
              });
              console.log('$' + window.final_chart_data)
              $('#income').text('$' +window.final_chart_data.income);
              $('#expenses').text('$' +window.final_chart_data.expenses);
              $('#net-income').text('$' +window.final_chart_data.net_income);
              if (Array.isArray(result)) {
                var suggestionsContent = document.querySelectorAll('.suggestions__list__dynamic-content');
                result.forEach(function(content, i) {
                  console.log(content);
                  suggestionsContent[i].innerText += content;
                });
                console.log(window.name)
                $('.customer-name').text(window.name);
              }
              else {
                $('.suggestions__list').append('<li>'+ result+'</li>')
              }

            },
            error: function(result) {
               console.log(result);
            }
        });
      })
  })
});
