
function createBoard() {
    const board = [];
    const prefillChance = 1;
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            const num = Math.floor(Math.random() * 10)
            const col = board.map(x => x[j])
            if(((Math.round(Math.random(1) * 100) / 100) <= prefillChance) && !row.includes(num) && !col.includes(num)) {
                row.push(num)
            } else {
                row.push(0)
            }
        }
        board.push(row)     
    }
    return board
}

function solveSudoku(board) {
    
    for(let i = 0; i < board.length; i++) {
        const row = board[i];
        for(let j = 0; j < row.length; j++) {
            const col = board.map(x => x[j]);
            for(let k = 0; k<9; k++) {
                if(!row.includes(k) && !col.includes(k)) {

                }
            }
        }
    }
}

function verifyPosition(board, num, pos) {
    let row = board[pos[1]]
    let col = board.map(c => c[pos[0]])
    // let square = ;
    return [col, row]
}

function printBoard(board) {
    for (i in board) {
        board[i].splice(3, 0, "|")
        board[i].splice(7, 0, "|")
        if ((i+1)%3 == 0 & i != 8) {
            console.log(board[i].join(" "))
            console.log('- - - | - - - | - - -')
        } else {
            console.log(board[i].join(" "))
        }
    }
}

function verifySquares(board, num, pos) {
    let x = pos[0];
    let y = pos[1];
    for(let i=0; i<9; ++i) {

    }    

}

function getSquares(board) {
    let squares = []
    for(let i=0; i < 9; i++) {
        let square = []
        for(let j=0; j < 2; j++) {
            square.push(board[i + j].slice(j,j+3))
            console.log(square)
        }
        squares.push(square)
    }
    return squares
}

let board = createBoard()
// console.log(verifyPosition(board, 4, [3,2]))
// console.log(getSquares(board))
printBoard(board)
