
var width = 10;
var bombAmount = 20;
var flags = 0;
var squares = [];
var isGameOver = false;
var grid;
var flagsLeft;
var result;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".grid");
  flagsLeft = document.querySelector("#flags-left");
  result = document.querySelector("#result");

  createBoard();
})
