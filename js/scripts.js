$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var climate = $('input[name=climate]:checked').val();
    var activity = $('input[name=activity]:checked').val();
    var beauty = $('input[name=beauty]:checked').val();
    var price = $('input[name=price]:checked').val();
    var friends = $('input[name=friends]:checked').val();

    var questions = [climate, activity, beauty, price, friends];

    var iceland = 0;
    var thailand = 0;
    var whistler = 0;

    questions.forEach(function(question) {
      if (question === 'iceland') {
        iceland++;
      } else if (question === 'thailand') {
        thailand++;
      } else if (question === 'whistler') {
        thailand++;
      }
    });

    $('.destinations').children().hide();

    if ((iceland > thailand) && (iceland > whistler)) {
      $('#iceland').show();
    } else if ((thailand > iceland) && (thailand > whistler)) {
      $('#thailand').show();
    } else {
      $('#whistler').show();
    }

    event.preventDefault();
  });

});
