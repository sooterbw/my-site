<script>
    import { onMount } from 'svelte';
    import { createBoard } from './sudoku.js';

    const board = createBoard();
</script>

<div class="flex h-screen w-screen justify-center items-center">
    <div class="sudoku border border-black">
        {#each board as square, i}
            <div class="text-2xl h-full w-full {(i==2 | i==5) ? 'border-r' : 'border-none'}">{square}</div>
        {/each}
    </div>
</div>

<style>
    .sudoku {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        justify-content: center;
        justify-items: center;
        align-items: center;
        width: 500px;
        height: 500px;
    }
</style>