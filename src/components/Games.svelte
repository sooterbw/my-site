<script>
    import { dark, play } from '../stores.js'
</script>

<div class="absolute top-0 left-0">
    <svg class="h-10 w-10 cursor-pointer {$dark ? 'hover:text-gray-400' : 'hover:text-gray-800'}" on:click='{() => play.set(false)}' fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
</div>
