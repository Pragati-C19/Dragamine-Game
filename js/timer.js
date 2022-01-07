const getTwoDigitStr = (num) => {
  //For adding 0 befor one digit number
  if (num <= 9) return `0${num}`;
  return num;
};

function timerCycle() {
  timeInterval = setInterval(() => {
    timerSeconds++;
    seconds = timerSeconds % 60;
    minutes = Math.floor(timerSeconds / 60);
    //console.log(seconds)
    sec.innerHTML = getTwoDigitStr(seconds);
    min.innerHTML = getTwoDigitStr(minutes);

    // you have to add clearInterval here not in game_over.js if we use clearInterval in game_over.js or in check_if_won.js it gives infinite timercount
    if (isGameOver == true) {
      clearInterval(timerInterval);
      //console.log(timerSeconds);
      timerSeconds = 0;
      sec.innerHTML = getTwoDigitStr(timerSeconds);
      min.innerHTML = getTwoDigitStr(timerSeconds);
    }
  }, 1000);
}

// resumeTimer and stopTimer function i used for testing
function resumeTimer() {
  if (timeStop == true) {
    timeStop = false;
    timerCycle();
  }
}

function stopTimer() {
  clearInterval(timeInterval);
}
