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

<div class="flex flex-col h-full w-full {$dark ? 'bg-gray-800' : 'bg-gray-400'}">
    <div class="rounded-lg m-auto w-48 overflow-hidden">
        <img src="img/ben_cover.jpg" alt="Ben Sooter"/>
    </div>
    <p class="text-2xl p-3 font-semibold">Ben Sooter</p>
    <p class="text-md py-1">Systems engineer and developer</p>
    <p class="text-xl font-bold py-5">I code with <span class="pb-2 px-2 pt-1 rounded {$dark ? 'bg-gray-900' : 'bg-gray-300'}">{codeIn}</span></p>
</div>