var button = document.getElementById("main-button")
var taButton = document.getElementById("ta-button")
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












// timer function
function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);       
        score();
    } else {
        timeLeftText.textContent = "Time Remaining " + timeLeft;
        timeLeft--;
    }
}



function start() {
    document.getElementById("main-button").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("some_div").style.display = "inline-block";
    timeLeft = 70;
    countdown();    
    timeLeftText.textContent = "Time Remaining " + timeLeft;

}

function score() {
    correct = 0;
    incorrect = 0;
    notAnswered = 0;
    var question1
    var question2 
    var question3 
    var question4 
    var question5 
    var question6 
    var question7 
    var question8 
    var question9
    var question10
// checks if the value of or radio is null.
    if (document.querySelector('input[name="question1"]:checked') === null) { notAnswered++;
    
 }
// if it has a value it logs the value
// then takes the value that was stored to the radio button and clears it; resetting or buttons.
    else { question1 = document.querySelector('input[name="question1"]:checked').value;
    document.querySelector('input[name="question1"]').checked=false;
 
// This checks the value we stored and then determines if it that value is the correct answer.
    if (question1 === "d") {
        correct++;
    }
    else if ((question1 === "a") || (question1 === "b") || (question1 === "c")) {
        incorrect++;
    }}
    // question 2.
    if (document.querySelector('input[name="question2"]:checked') === null) { notAnswered++;
       
     }

    else { question2 = document.querySelector('input[name="question2"]:checked').value;
    document.querySelector('input[name="question2"]').checked=false;
 

    if (question2 === "d") {
        correct++;
    }
    else if (question2 === "a" || "b" || "c") {
        incorrect++;
    }}
//  question 3.
if (document.querySelector('input[name="question3"]:checked') === null) { notAnswered++;
    
 }

else { question3 = document.querySelector('input[name="question3"]:checked').value;
document.querySelector('input[name="question3"]').checked=false;


if (question3 === "a") {
    correct++;
}
else if (question2 === "b" || "c" || "d") {
    incorrect++;
}}
// question 4
if (document.querySelector('input[name="question4"]:checked') === null) { notAnswered++;
    
 }

else { question4 = document.querySelector('input[name="question4"]:checked').value;
document.querySelector('input[name="question4"]').checked=false;


if (question4 === "d") {
    correct++;
}
else if (question4 === "a" || "b" || "c") {
    incorrect++;
}}
// question 5
if (document.querySelector('input[name="question5"]:checked') === null) { notAnswered++;
    
 }

else { question5 = document.querySelector('input[name="question5"]:checked').value;
document.querySelector('input[name="question5"]').checked=false;


if (question5 === "d") {
    correct++;
}
else if (question5 === "a" || "b" || "c") {
    incorrect++;
}}
// question 6
if (document.querySelector('input[name="question6"]:checked') === null) { notAnswered++;
    
 }

else { question6 = document.querySelector('input[name="question6"]:checked').value;
document.querySelector('input[name="question6"]').checked=false;


if (question6 === "c") {
    correct++;
}
else if (question6 === "a" || "b" || "c") {
    incorrect++;
}}
//  question 7
if (document.querySelector('input[name="question7"]:checked') === null) { notAnswered++;
   
 }

else { question7 = document.querySelector('input[name="question7"]:checked').value;
document.querySelector('input[name="question7"]').checked=false;


if (question7 === "a") {
    correct++;
}
else if (question7 === "a" || "b" || "c") {
    incorrect++;
}}
// question 8
if (document.querySelector('input[name="question8"]:checked') === null) { notAnswered++;
    
 }

else { question8 = document.querySelector('input[name="question8"]:checked').value;
document.querySelector('input[name="question8"]').checked=false;


if (question8 === "b") {
    correct++;
}
else if (question8 === "a" || "b" || "c") {
    incorrect++;
}}
// question 9
if (document.querySelector('input[name="question9"]:checked') === null) { notAnswered++;
   
 }

else { question9 = document.querySelector('input[name="question9"]:checked').value;
document.querySelector('input[name="question9"]').checked=false;


if (question9 === "c") {
    correct++;
}
else if (question9 === "a" || "b" || "c") {
    incorrect++;
}}
// question10
if (document.querySelector('input[name="question10"]:checked') === null) { notAnswered++;
    
 }

else { question10 = document.querySelector('input[name="question10"]:checked').value;
document.querySelector('input[name="question10"]').checked=false;


if (question10 === "c") {
    correct++;
}
else if (question10 === "a" || "b" || "c") {
    incorrect++;
}}
    // this toggles what is visible on their screen.
    document.getElementById("quiz").style.display = "none";
    document.getElementById("scoreBox").style.display = "block";
    document.getElementById("some_div").style.display = "none";
    document.getElementById("ta-button").style.display = "inline-block";
    // this is the text for our score box
    correctText.textContent = "Correct " + correct;
    incorrectText.textContent = "Incorrect " + incorrect;
    notAnsweredText.textContent = "Not Answered " + notAnswered;
    

}

// function reset() {
//     // this toggles what is visible on their screen.
//     document.getElementById("quiz").style.display = "none";
//     document.getElementById("some_div").style.display = "none";
//     document.getElementById("ta-button").style.display = "none";
//     document.getElementById("scoreBox").style.display = "none";
//     document.getElementById("main-button").style.display = "block";
//     // this resets the score
//     correct = 0;
//     incorrect = 0;
//     notAnswered = 0;
//     // allows the start button to be clicked up to 20 mins after the ta button, so that the score function does start before the game.
//     timeLeft = 12000;
    

// }