var width = 10;
var bombAmount = 20;
var flags = 0;
var squares = [];
var isGameOver = false;
var grid;
var flagsLeft;
var result;
var interval;
var timerInterval;
var timerSeconds = 0;
var minutes;
var seconds;
var start;
var resumeButton;
var stopButton;
var timeStop = true;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".gri1");
  flagsLeft = document.querySelector("#flags-left");
  result = document.querySelector("#result");
  minutes = document.querySelector("#min");
  seconds = document.querySelector("#sec");
  resumeButton = document.querySelector("#resumebutton");
  stopButton = document.querySelector("#stopbutton");

  resumeButton.addEventListener("click", resumeTimer);
  stopButton.addEventListener("click", stopTimer);

  //start = document.querySelector("#Start");
  //start.addEventListener("onclick", createBoard());
  createBoard();
});
