
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
    let quad = col
        .splice(Math.floor(pos[1]/3), Math.floor(pos[1]/3) + 3)
        .concat(row.splice(Math.floor(pos[0]/3), Math.floor(pos[0]/3) + 3));

    console.log(quad)
    
    return (row.includes(num) || col.includes(num) || quad.includes(num))
}

verifyPosition(board, 4, [3,2])

function verifyQuads(board, num, pos) {
    let x = pos[0];
    let y = pos[1];
    for(let i=0; i<9; ++i) {

    }    

}