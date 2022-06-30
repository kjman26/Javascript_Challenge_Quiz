




//timer//
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");
var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time left:" + secondsLeft
    if(secondsLeft === 0) {clearInterval(timerInterval);
    }
    }, 1000);
}
setTime();
