<script>
    import { onMount } from 'svelte';
    import { createBoard } from './sudoku.js';

    const newBoard = createBoard();
    let editBoard = newBoard.map((x, i) => {
        return {
            'value': newBoard[i]===0 ? '' : x,
            'verified': true,
            'editable': x===0,
            'selected': false
        }
    });

    function verifyRow(board, pos, num) {
        let row = board.slice(pos - pos%9, ((pos - pos%9) + 9))
        return row
    }

    function verifyCol(board, pos, num) {
        let col = []
        for(let i in board) {
            if(i%9 == pos%9) {
                col.push(board[i])
            }
        }
        return col
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
        return square
    }

    function verify(pos, num) {
        let boardArr = editBoard.map(x => x.value)
        boardArr[pos]=0
        let col = verifyCol(boardArr, pos, num)
        let row = verifyRow(boardArr, pos, num)
        let square = verifySquare(boardArr, pos, num)
        editBoard[pos].verified = [...col, ...row, ...square].includes(num)
        return [...col, ...row, ...square].includes(num)
    }
</script>

<div class="flex h-screen w-screen justify-center items-center">
    <div class="sudoku border-4 rounded-md">
        {#each editBoard as cell, i}
            <div class="
                border border-1 border-gray-600
                {(((i+9) - i%9)%27 == 0) && (((i+9) - i%9)%81 != 0)  ? 'border-b-2 bottom-border': ''} 
                {((i+1)%3==0) && ((i+1)%9!=0) ? 'border-r-2 right-border' : ''}
                {cell.editable ? 'hover:bg-gray-800' : ''}
                {cell.selected ? 'bg-gray-800' : ''}">
                <input type="number" 
                    class="bg-transparent w-full border-none 
                    text-2xl text-center py-2 cursor-default
                    {(cell.value === newBoard[i]) ? 'font-bold' : ''}
                    {(!cell.verified || cell.value==='') ? '' : 'text-red-500'}"
                    on:keyup="{(() => verify(i, cell.value))}"
                    on:focus="{() => cell.selected = !cell.selected}"
                    on:blur="{() => cell.selected = !cell.selected}"
                    disabled={!cell.editable} max=9 bind:value={cell.value}>
            </div>
        {/each}
    </div>
</div>

<style>
    .sudoku {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        width: 500px;
        height: 500px;
    }

    .incorrect {
        color: red;
    }

    .bottom-border {
        border-bottom-color: white;
    }

    .right-border {
        border-right-color: white;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
        caret-color: transparent;
    }

    input:focus {
        outline: none;
    }
</style>