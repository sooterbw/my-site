<script>
    import { goto, params } from '@sveltech/routify';
    import { posts } from './posts.js'
</script>

{#each posts as post}
    {#if post.slug == $params.post}
        <p>{post.title}</p>
        {@html post.body}
    {/if}
{/each}