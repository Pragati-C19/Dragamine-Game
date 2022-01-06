function gameOver(square) {
    result.innerHTML = 'BOOM! Game Over!'
    isGameOver = true

    //show ALL the bombs
    squares.forEach(square => {
      if (square.classList.contains('bomb')) {
        square.innerHTML = '💣'
        square.classList.remove('bomb')
        square.classList.add('checked')
      }
    })

    if(isGameOver==true){
      clearInterval(timerInterval)
      console.log(timerSeconds)
      timerSeconds = 0;
      sec.innerHTML= timerSeconds
      min.innerHTML= timerSeconds
    }
    
}