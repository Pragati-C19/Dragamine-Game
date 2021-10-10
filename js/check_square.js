function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width -1)

    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1].id              // parseInt is use for string to int conversion
        //const newId = parseInt(currentId) - 1   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 -width].id
        //const newId = parseInt(currentId) +1 -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId -width)].id
        //const newId = parseInt(currentId) -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 -width].id
        //const newId = parseInt(currentId) -1 -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1].id
        //const newId = parseInt(currentId) +1   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 +width].id
        //const newId = parseInt(currentId) -1 +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 +width].id
        //const newId = parseInt(currentId) +1 +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) +width].id
        //const newId = parseInt(currentId) +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
    }, 10)
}