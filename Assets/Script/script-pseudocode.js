var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");//list global variables: 
var btn1 = document.querySelector("#btn1") 
var btn2 = document.querySelector("#btn2") 
var btn3 = document.querySelector("#btn3") 
var btn4 = document.querySelector("#btn4") 
var questions = []    
var question1 =
var question2 =
var question3 =
var question4 =
//questions array
    var question1 = [
        {
            question: "What is Sasuke's clan?",
            answers: [Uchicha,Uzumaki,Hyuga, Haruno],
            correctAnswer:"Uchiha"
        }
    ]
    var question2 = [
        {
            question: "How many tails does Naruto's tailed beast have?",
            answers: [9,8,5,1],
            correctAnswer:"9"
        }
    ]
    var question3 = [
        {
            question:"What is Naruto's dad's name?",
            answers: [Eleven,So-Joon,Minato, Hiruzen],
            correctAnswer:"Minato"
        }
    ]
    var question4 = [
        {
            question: "What is the name of the 9-tailed beast?"
            answers: [Shukaku, Saiken, Isobu, Kurama],
            correctAnswer:"Kuruma"
        }
    ]
    console.log(questions[2].answers[2])

  
getElementById(#qbox).textContent("question")

    //currentQuestion array = 0 (increment)
    //score
    //var btn1 = querySelector("btn-1")
//timeLeft

//startGame() - function
function startGame() {
    getElementById(.starbtnbox).addEventListener("click", setTime);

    setTime();
}
    //setup first questions
    //loadQuestion()
getElementById(#qbox).textContent(questions.random)

function questionSet(){
    getElementById(h1).textContent(questions)
    .addEventListener("click",  )
    console.log(questions)
}
//next question on click
function displayQuestion()
{


}
   //timer
var secondsLeft = 60;
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Time left:" + secondsLeft
        if(secondsLeft === 0) {alert('Time's up!);
        }
        }, 1000);
    if seconds
    }
    setTime();


//loadQuestion()
    //currentQuestion++
    //render question and multiple choices to the page
    //btn1.textContent =
//checkAnswer
    //check which button user clicked
    //compare the choice with correct answer
    // act on right/wrong answer
    //call loadQuestion()

//endGame
    //called at end of timer or when current question > # of questions
    // cancel timer
    //prompt for intials - text box
    // local storage
        //1. read LS and store in js variable
        //2. check if null
        //3. update js variable with our new score
        //4. render to page
        //5. save updated js variable to ls
    // make highscores visible
    //prompt("play again?")
    
    file 26?