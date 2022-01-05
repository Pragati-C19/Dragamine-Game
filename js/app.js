
var width = 10;
var bombAmount = 20;
var flags = 0;
var squares = [];
var isGameOver = false;
var grid;
var flagsLeft;
var result;
var interval;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".gri1");
  flagsLeft = document.querySelector("#flags-left");
  result = document.querySelector("#result");

  createBoard();
})
