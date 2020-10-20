export function createBoard() {
    const board = Array(81).fill(0)
    const prefillNum = 32;
    let prefill = [];
    let randomPos, randomNum = 0;
    while(prefill.length < prefillNum) {
        randomPos = Math.floor(Math.random() * 81)
        randomNum = Math.floor(Math.random() * 9) + 1
        if(verify(board, randomPos, randomNum)) {
            board[randomPos] = randomNum
        }
        prefill = board.filter((x) => x>0)
    }
    return board
}

function verifyRow(board, pos, num) {
    let row = board.slice(pos - pos%9, ((pos - pos%9) + 9))
    return !row.includes(num)
}

function verifyCol(board, pos, num) {
    let col = []
    for(let i in board) {
        if(i%9 == pos%9) {
            col.push(board[i])
        }
    }
    return !col.includes(num)
}

function verifySquare(board, pos, num) {
    let square = []
    let col = []
    let col1 = []
    let col2 = []
    for(let i in board) {
        if(i%9 == pos%9) {
            col.push(board[i - pos%3])
            col1.push(board[(i - pos%3)+1])
            col2.push(board[(i - pos%3)+2])
        }
    }
    square = col.slice(Math.floor(pos/27) * 3, ((Math.floor(pos/27) * 3) + 3))
    square = square.concat(col1.slice(Math.floor(pos/27) * 3, ((Math.floor(pos/27) * 3) + 3)))
    square = square.concat(col2.slice(Math.floor(pos/27) * 3, ((Math.floor(pos/27) * 3) + 3)))
    return !square.includes(num)
}

function verify(board, pos, num) {
    return (verifyCol(board, pos, num) & verifyRow(board, pos, num) & verifySquare(board, pos, num))
}

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
