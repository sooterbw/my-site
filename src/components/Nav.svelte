<script>
    import { dark } from '../stores.js';

    let toggleDark = () => {
        $dark = !$dark;
    }
</script>

<div class="fixed flex justify-between w-full p-2">
    <img class="w-12 h-12" src="img/bs.gif" alt="BS Logo">
    <div class="flex items-center space-x-4">
        <ul class="flex space-x-4 text-xl font-semibold">
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div on:click={toggleDark}>
            {#if $dark}
            <svg class="h-8 w-8 hover:text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {:else}
            <svg class="h-8 w-8 hover:text-gray-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {/if}
        </div>
    </div>
</div>

