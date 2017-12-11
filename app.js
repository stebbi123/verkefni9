$(document).ready(function(){

  var questions = ["question 1", "question 2", "question 3"];
  var answers = ["answer 1, answer 2", "answer3, answer4", "answer 5, answer 6"];
  var correctAnswer = [0, 1, 0];
  var counter = 0;
  var checker = 0;


console.log(counter);

function checkAnswer(checker){
  if (correctAnswer[counter] === checker) {
    counter++;
    alert("Correct");
    $(".question").fadeOut("slow", function(){
    });
    $(".choices").fadeOut("slow", function(){
      $(".question").empty().append(questions[counter]);
      $(".choices").empty().append(answers[counter]);
    });
    $(".choices").fadeIn("slow", function(){})
    $(".question").fadeIn("slow", function() {});
    console.log(counter);

  }
  else {
    alert("Incorrect");
  }
  if (counter === 3) {
    $(".message").empty().append("Congratulations you win!");
    $(".btn-answer1").hide();
    $(".btn-answer2").hide();
  }
}


  $(".question").append(questions[counter]);
  $(".choices").append(answers[counter]);

  $(".btn-answer1").on("click", function(){
    checkAnswer(0);

  });
  $(".btn-answer2").on("click", function(){
    checkAnswer(1);
  });




});
