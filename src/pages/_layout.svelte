<script>
    import { dark, admin } from '../stores.js';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let cheatCode = [];

    document.onkeypress = (event) => {
        let char = (typeof event !== 'undefined') ? event.keyCode : event.which

        if (cheatCode.length > 9) {
			[, ...cheatCode] = cheatCode
        }
        
        cheatCode = [...cheatCode, String.fromCharCode(char)]

        if (cheatCode.toString() === 'w,w,s,s,a,d,a,d,b,a') {
            admin.set(true)
        }
    }

    let logout = () => {
        admin.set(false)
    }
</script>

<svelte:window />
<div class="relative h-screen {$dark ? 'bg-gray-900 text-gray-500' : 'bg-gray-300 text-black'}">
    {#if $admin}
    <div class="adminPanel h-full flex flex-col justify-between p-2 {$dark ? 'bg-gray-800' : 'bg-gray-400'} text-center" transition:fly="{{delay: 250, duration:300, x:-100, easing: quintOut}}">
        <div class="flex flex-col space-y-2">
            <img class="h-10 w-10" src="img/bs.gif" alt="BS Logo">
            <svg class="h-10 w-10 cursor-pointer {$dark ? 'hover:text-gray-400' : 'hover:text-gray-800'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </div>
        <div>
            <svg class="h-10 w-10 cursor-pointer {$dark ? 'hover:text-gray-400' : 'hover:text-gray-800'}" on:click={logout} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        </div>
    </div>
    {/if}
    <slot />
</div>

<style>
    .adminPanel {
        position: absolute;
        top: 0px;
        left: 0px;
    }
</style>
