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
var windowWidth;
var windowWidthError;
var closeButton;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".gri1");
  flagsLeft = document.querySelector("#flagsleft");
  result = document.querySelector("#result");
  minutes = document.querySelector("#min");
  seconds = document.querySelector("#sec");
  resumeButton = document.querySelector("#resumebutton");
  stopButton = document.querySelector("#stopbutton");
  closeButton = document.querySelector("#closebutton");
  //windowWidthError = document.querySelector("#windowWidthError");

  $("#resumebutton").hide();
  resumeButton.addEventListener("click", resumeTimer);
  stopButton.addEventListener("click", stopTimer);
  //start = document.querySelector("#Start");
  //start.addEventListener("click", createBoard);
  createBoard();

  //if window width is less then it shows model and page refresh after click on close
  windowWidth = window.innerWidth;
  //console.log(windowWidth);
  if (windowWidth <= 720) {
    $("#windowWidthError").modal("show");
    closeButton.addEventListener("click", () => {
      window.location = "#";
      window.location.reload();
    });
  }

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
