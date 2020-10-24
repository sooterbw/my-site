<script>
    import { onMount } from 'svelte';
    import { createBoard } from './sudoku.js';

    const board = createBoard();
    let editBoard = board.map(x => {
        if(x===0) {
            return ''
        } else {
            return x
        }
    });
</script>

<div class="flex h-screen w-screen justify-center items-center">
    <div class="sudoku border rounded-md">
        {#each editBoard as square, i}
            <div class=" 
            {((i+9) - i%9)%27 == 0 ? 'border-b': ''} 
            {((i+1)%3==0) ? 'border-r' : ''}
            hover:bg-gray-800">
            <input type="text" class="bg-transparent w-full border-none text-2xl text-center py-2" disabled={editBoard[i] === board[i]} bind:value={editBoard[i]}>
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
</style>