function renderSquares () {
    let noOfSquares = 0;
    const chessboard = document.querySelector(".chessboard");
    const chessSquareArray = []
    while (noOfSquares < 64) {
        chessSquare = document.createElement("div");
        chessSquare.classList.add("chessSquare");
        chessSquareArray.push(chessSquare);
        noOfSquares+=1;
    }

    chessSquareArray.forEach((element, i) => {
        determineSquareColor(element, i)
    })

    return chessSquareArray.forEach((element) => {
        return chessboard.append(element);
    })
}

function determineSquareColor(element, i){
  if((i>=0 && i <=7) || (i>=16 && i <=23) || (i>=32 && i<=39) || (i >= 48 && i <=55)) {
    i%2 === 0 ? element.style.backgroundColor = "#000" : element.style.backgroundColor = "#fff"
  }
  if((i >=8 && i <= 15) || (i>=24 && i<= 31) || (i >= 40 && i<= 47) || (i>=56 && i<= 63)){
    i%2 !== 0 ? element.style.backgroundColor = "#000" : element.style.backgroundColor = "#fff"
  }
}

renderSquares();