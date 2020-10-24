<script>
    import { onMount } from 'svelte';
    import { createBoard, verify } from './sudoku.js';

    const board = createBoard();
    let editBoard = board.map(x => {
        if(x===0) {
            return {
                'value': '',
                'verified': false,
            }
        } else {
            return {
                'value': x,
                'verified': true
            }
        }
    });

    function verifyCell(puzzle, pos, num) {
        let bd = puzzle.map(x => (x==='') ? 0 : x)
        editBoard[pos].verified = verify(bd, pos, num)
        console.log(editBoard[pos])
    }
</script>

<div class="flex h-screen w-screen justify-center items-center">
    <div class="sudoku border-2 rounded-md">
        {#each editBoard as square, i}
            <div class="
                border border-1 border-gray-600
                {((i+9) - i%9)%27 == 0 ? 'border-b-2 bottom-border': ''} 
                {((i+1)%3==0) ? 'border-r-2 right-border' : ''}
                {editBoard[i].value !== board[i] ? 'hover:bg-gray-800' : ''}">
            <input type="number" class="bg-transparent w-full border-none 
                text-2xl text-center py-2 
                {square.verified ? '' : 'text-red-500'}
                {(editBoard[i].value === board[i]) ? 'font-bold' : ''}" 
                on:keypress="{() => verifyCell(editBoard, i, editBoard[i].value)}"
                disabled={editBoard[i].value === board[i]} max="9" bind:value={editBoard[i].value}>
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
    }
</style>