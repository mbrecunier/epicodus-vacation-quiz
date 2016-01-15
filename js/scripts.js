$(document).ready(function() {
  $("form#quiz").submit(function(event) {

//create an array with the values of each question
    var climate = $('input[name=climate]:checked').val();
    var activity = $('input[name=activity]:checked').val();
    var beauty = $('input[name=beauty]:checked').val();
    var price = $('input[name=price]:checked').val();
    var friends = $('input[name=friends]:checked').val();

    var questions = [climate, activity, beauty, price, friends];

//create variables for each outcome that will be evaluated in a number system
    var iceland = 0;
    var thailand = 0;
    var whistler = 0;

    var vacations = [iceland, thailand, whistler];

//create functions to validate quiz, run quiz, and determine/show result
    var radioButtons = $('.form-group');

    var quizValidation = function() {
      if (radioButtons.find('input:radio:checked').length === radioButtons.length) {
        $('.error').remove();
        return true;
      } else {
        return false;
      }
    };

    var runQuiz = function() {
      questions.forEach(function(question) {
        if (question === 'iceland') {
          iceland++;
        } else if (question === 'thailand') {
          thailand++;
        } else {
          whistler++;
        }
      })
      resultReturn();
    };

    var resultReturn = function() {

      $('.destinations').children().hide();

      if ((iceland > thailand) && (iceland > whistler)) {
        $('#iceland').show();
      } else if ((thailand > iceland) && (thailand > whistler)) {
        $('#thailand').show();
      } else if ((whistler > thailand) && (whistler > thailand)) {
        $('#whistler').show();
      } else {
        $('#home').show();
      }
    };


//if all questions have been answer- run quiz, if a question is blank- show error
    quizValidation();

    if (quizValidation()) {
      runQuiz();
    } else {
      $('form#quiz').prepend('<h4 class="error">Oops! Please answer all of the questions</h4>')
      return false;
    };

    event.preventDefault();

  });

});
