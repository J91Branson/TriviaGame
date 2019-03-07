var button = document.getElementById("main-button")
var quizText = document.getElementById("quiz")
var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var correctText = document.getElementById("correct-text")
var incorrectText = document.getElementById("incorrect-text")
var notAnsweredText = document.getElementById("notAnswered-text")
var timeLeft = 70;
var timeLeftText = document.getElementById("timeLeft-text")
var elem = document.getElementById('some_div');  
var timerId = setInterval(countdown, 1000);



function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      alert = "Time";
      score();
    } else {
      timeLeftText.textContent = "Time Remaining " + timeLeft;
      timeLeft--;
    }
  }



function start() {
    button.textContent = "";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("some_div").style.display = "inline-block";
    timeLeft = 70;
    countdown();
    timeLeftText.textContent = "Time Remaining " + timeLeft;   
   
}    

function score() {
    var question1 = document.querySelector('input[name="question1"]:checked').value;
    
    var question2 = document.querySelector('input[name="question2"]:checked').value;
    var question3 = document.querySelector('input[name="question3"]:checked').value;

    var question4 = document.querySelector('input[name="question4"]:checked').value;
    var question5 = document.querySelector('input[name="question5"]:checked').value;
    var question6 = document.querySelector('input[name="question6"]:checked').value;
    var question7 = document.querySelector('input[name="question7"]:checked').value;
    var question8 = document.querySelector('input[name="question8"]:checked').value;
    var question9 = document.querySelector('input[name="question9"]:checked').value;
    var question10 = document.querySelector('input[name="question10"]:checked').value;

    console.log(question1)
    if (question1 === "d") {
        correct++;
    }
    else if((question1 === "a") ||(question1 === "b") ||(question1 === "c")) {
        incorrect++;        
    }
    else { notAnswered++;}
    if (question2 === "d") {
        correct++;
    }
    else if(question2 === "a"||"b"||"c") {
        incorrect++;        
    }
    else{ notAnswered++;}
    
    if (question3 === "a") {
        correct++;
    }
    else if(question3 === "b"||"c"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question4 === "d") {
        correct++;
    }
    else if(question4 === "a"||"b"||"c") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question5 === "d") {
        correct++;
    }
    else if(question5 === "a"||"b"||"c") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question6 === "c") {
        correct++;
    }
    else if(question6 === "a"||"b"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question7 === "a") {
        correct++;
    }
    else if(question7 === "b"||"c"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question8 === "b") {
        correct++;
    }
    else if(question8 === "a"||"c"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question9 === "c") {
        correct++;
    }
    else if(question9 === "a"||"b"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}

    if (question10 === "c") {
        correct++;
    }
    else if(question10 === "a"||"b"||"d") {
        incorrect++;        
    }
    else{ notAnswered++;}
    button.textContent = "";
    quizText.textContent = "";
    // checkScore();
    document.getElementById("scoreBox").style.display = "block";    
    correctText.textContent = "Correct "+ correct;
    incorrectText.textContent = "Incorrect " + incorrect;
    notAnsweredText.textContent ="Not Answered " + notAnswered;
    
}