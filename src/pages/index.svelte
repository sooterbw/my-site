<script>
    import Profile from '../components/Profile.svelte';
    import Social from '../components/Social.svelte';
    import Games from '../components/Games.svelte';
    import { dark, play } from '../stores';

    let hoverPlay = false;
    console.log("%cOh, hey there!", "font-size:24px; font-weight:bold;")
</script>

<main>
    <div class="positioning {$play ? '' : 'w-full'}">
        {#if $play == false}
            <Profile {hoverPlay} />
            <Social />
        {:else}
            <Games />
        {/if}
    </div>
</main>

<style>
    .positioning {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>