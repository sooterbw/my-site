
// function createBoard() {
//     const board = [];
//     const prefillChance = 1;
//     for (let i = 0; i < 9; i++) {
//         const row = [];
//         for (let j = 0; j < 9; j++) {
//             const num = Math.floor(Math.random() * 10)
//             const col = board.map(x => x[j])
//             if(((Math.round(Math.random(1) * 100) / 100) <= prefillChance) && !row.includes(num) && !col.includes(num)) {
//                 row.push(num)
//             } else {
//                 row.push(0)
//             }
//         }
//         board.push(row)     
//     }
//     return board
// }

function createBoard() {
    const board = Array(81).fill(0)
    const prefillNum = 32;
    let prefill = [];
    let randomPos, randomNum = 0;
    while(prefill.length < prefillNum) {
        randomPos = Math.floor(Math.random() * 82)
        randomNum = Math.floor(Math.random() * 9) + 1
        if(verifyRow(board, randomPos, randomNum) & verifyCol(board, randomPos, randomNum)) {
            board[randomPos] = randomNum
        }
        prefill = board.filter((i) => i>0)
    }
    printBoard(board)
}

function verifyRow(board, pos, num) {
    let row = board.slice(pos - pos%9, ((pos - pos%9) + 9))
    return !row.includes(num)
}

function verifyCol(board, pos, num) {
    let col = []
    for(i in board) {
        if(i%9 == pos%9) {
            col.push(board[i])
        }
    }
    return !col.includes(num)
}

function verifySquare(board, pos, num) {
    let square = []
    let testPos = pos%3
    let rowPos = board.slice(pos - pos%3, ((pos - pos%3) + 3))
    let colPos;
    let col = []
    for(i in board) {
        if(i%9 == pos%9) {
            col.push(board[i - pos%3])
        }
    }
    colPos = col.slice(pos%3, ((pos%3) + 3))
    console.log(rowPos)
    console.log(colPos)
    console.log(testPos)
}

let sampleBoard = Array(81).fill(1).map(x=>x*Math.floor(Math.random()*9)+1)
verifySquare(sampleBoard, 9, 0)
printBoard(sampleBoard)

function printBoard(board) {
    let printBoard = []
    for(i in [...Array(9).keys()]) {
        printBoard.push(board.slice(i*9, i*9+9))
    }
    for (i in printBoard) {
        printBoard[i].splice(3, 0, "|")
        printBoard[i].splice(7, 0, "|")
        if ((i+1)%3 == 0 & i != 8) {
            console.log(printBoard[i].join(" "))
            console.log('- - - | - - - | - - -')
        } else {
            console.log(printBoard[i].join(" "))
        }
    }
}

function getSquares(board) {
    let squares = []
    for(let i=0; i < 9; i++) {
        let square = []
        for(let j=0; j < 3; j++) {
            if(i == 0) {
                square = square.concat(board[j].slice(0,3))
            } else if(i == 1) {
                square = square.concat(board[j].slice(3,6))
            } else if(i == 2) {
                square = square.concat(board[j].slice(6,9))
            } else if(i == 3) {
                square = square.concat(board[j+3].slice(0,3))
            } else if(i == 4) {
                square = square.concat(board[j+3].slice(3,6))
            } else if(i == 5) {
                square = square.concat(board[j+3].slice(6,9))
            } else if(i == 6) {
                square = square.concat(board[j+6].slice(0,3))
            } else if(i == 7) {
                square = square.concat(board[j+6].slice(3,6))
            } else if(i == 8) {
                square = square.concat(board[j+6].slice(6,9))
            }
        }
        squares.push(square)
    }
    return squares
}

