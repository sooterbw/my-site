<script>
    import { onMount } from 'svelte';
    import { dark, play } from '../stores.js';

    export let name;
    export let hoverPlay;

    let code = ['HTML5', 'CSS', 'JavaScript', 'Python', 'SQL', 'Svelte', 'Flask']
	let codeIndex = 0;

    $: codeIn = code[codeIndex % (code.length)]
    
    function toggleDark() {
        if($dark == false){
            dark.set(true);
        } else {
            dark.set(false)
        }
    }

    function togglePlay() {
        if($play == false){
            play.set(true);
        } else {
            play.set(false)
        }
    }

	onMount(() => {
		const interval = setInterval(() => {
			codeIndex += 1;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex flex-col relative {$dark ? 'bg-gray-800' : 'bg-gray-400'} rounded-lg md:w-2/5 w-5/6 m-auto py-5 items-center shadow-lg">
    <div on:click={toggleDark}>
    {#if $dark}
        <svg class="toggleTheme h-12 w-12 hover:text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    {:else}
        <svg class="toggleTheme h-12 w-12 text-black hover:text-gray-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    {/if}
    </div>
    <div class="playGame cursor-pointer" on:mouseenter={() => hoverPlay = true} on:mouseleave={() => hoverPlay = false} on:click={togglePlay}>
        {#if !hoverPlay}
        <svg class="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {:else}
        <svg class="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
        {/if}
    </div>
    <div class="imgContainer rounded-full m-auto h-32 w-32 overflow-hidden {$dark ? 'opacity-75' : 'none'}">
        <img src="img/ben_cover.jpg" alt="Ben Sooter"/>
    </div>
    <p class="text-2xl p-3 font-semibold">Ben Sooter</p>
    <hr class="w-2/5 {$dark ? 'border-gray-500' : 'border-gray-900'} m-auto">
    <p class="text-md py-1">Systems engineer and developer</p>
    <hr class="w-2/5 m-auto {$dark ? 'border-gray-500' : 'border-gray-900'}">
    <p class="text-xl font-bold py-5">I code with <span class="pb-2 px-2 pt-1 rounded {$dark ? 'bg-gray-900' : 'bg-gray-300'}">{codeIn}</span></p>
</div>

<style>
    .toggleTheme {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	.playGame {
		position: absolute;
		bottom: 5px;
		right: 5px;
	}

</style>