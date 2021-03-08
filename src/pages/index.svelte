<script>
    import Nav from '../components/Nav.svelte';
    import Profile from '../components/Profile.svelte';
    import Social from '../components/Social.svelte';
    import { dark, play } from '../stores';

    console.log("%cOh, hey there!", "font-size:24px; font-weight:bold;")
</script>

<main>
    <div class="w-full h-screen">
        <Nav />
        <Profile />
        <!-- <Social /> -->
    </div>
</main>