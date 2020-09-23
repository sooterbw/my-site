<script>
    import { fade } from 'svelte/transition';
    import { dark, play } from '../../stores.js';

    let gridCount = 5;
    let cellCount = [...Array(gridCount**2).keys()];
    let lvl = 1;

    function togglePlay() {
        if($play == false) {
            play.set(true);
        } else {
            play.set(false)
        }
    }

</script>

<div class="m-auto p-2 rounded-md bg-gray-500" in:fade>
    <div class="flex justify-between text-xl font-bold">
        <p>Level {lvl}</p>
        <p class="cursor-pointer" on:click={togglePlay}>Exit</p>
    </div>
    <div class="game" style="--grid-count: {gridCount}">
        {#each cellCount as count}
            <div class="cell">{count + 1}</div>
        {/each }
    </div>
</div>

<style>
    .game {
        display: grid;
        grid-template-rows: repeat(var(--grid-count), 1fr);
        grid-template-columns: repeat(var(--grid-count), 1fr);
    }

    .cell {
        height: 100px;
        width: 100px;
        background-color: blue;
    }
</style>