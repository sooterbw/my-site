<script>
    import { onMount } from 'svelte';
    import { dark, admin } from '../stores.js';

    let code = ['HTML5', 'CSS', 'JavaScript', 'Python', 'SQL', 'Svelte', 'Flask']
	let codeIndex = 0;

    $: codeIn = code[codeIndex % (code.length)]

	onMount(() => {
		const interval = setInterval(() => {
			codeIndex += 1;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex items-center h-full w-full {$dark ? 'bg-gray-800' : 'bg-gray-400'}">
    <div class="flex flex-col">
        <p class="text-2xl font-semibold">Ben Sooter</p>
        <p class="text-md">Systems engineer and developer</p>
        <p class="text-xl font-bold">I code with <span class="pb-2 px-2 pt-1 rounded {$dark ? 'bg-gray-900' : 'bg-gray-300'}">{codeIn}</span></p>
    </div>
    <div class="rounded-lg w-48 overflow-hidden">
        <img src="img/ben_cover.jpg" alt="Ben Sooter"/>
    </div>
</div>