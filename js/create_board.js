function createBoard() {
    flagsLeft.innerHTML = bombAmount

    //get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill('bomb')               //  fill some squares with bomb
    const emptyArray = Array(width*width - bombAmount).fill('valid')    // others are with numbers 
    //console.log(bombsArray)
    //console.log(emptyArray)
    const gameArray = emptyArray.concat(bombsArray)               // join to arrays with concat function
    // console.log(gameArray)
    const shuffledArray = gameArray.sort(() => Math.random() -0.5) // use random function for shuffuling numbers and bommbs

    for(let i = 0; i < width*width; i++) {              // by using this we have crated squares in 10 * 10 grid 
      const square = document.createElement('div')
      square.setAttribute('id', i)                      // give each square a unique id
      square.classList.add(shuffledArray[i])            
      grid.appendChild(square)
      squares.push(square)                              // after giving unique id to square push it in array squares[]

      //normal click
      square.addEventListener('click', function(e) {
        click(square)
      })

      //ctrl and right click for flag
      square.oncontextmenu = function(e) {
        e.preventDefault()
        addFlag(square)
      }
    }

    //add numbers
    for (let i = 0; i < squares.length; i++) {
      let total = 0
      const isLeftEdge = (i % width === 0)                // left side numbers id = 10,20,30,40...
      const isRightEdge = (i % width === width -1)        // right side numbers id = 19,29,39,49...

      if (squares[i].classList.contains('valid')) {                 
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
        if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
        if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
        squares[i].setAttribute('data', total)
      }
    }
}
createBoard()     // call function
