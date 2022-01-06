
var width = 10;
var bombAmount = 20;
var flags = 0;
var squares = [];
var isGameOver = false;
var grid;
var flagsLeft;
var result;
var interval;
var timeInterval;
var timeSeconds=0;
var minutes;
var seconds;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".gri1");
  flagsLeft = document.querySelector("#flags-left");
  result = document.querySelector("#result");
  minutes = document.querySelector("#minutes");
  seconds = document.querySelector("#seconds");
  
  createBoard();
})
