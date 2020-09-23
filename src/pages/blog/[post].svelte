<script>
    import { goto, params, layout } from '@sveltech/routify';
    import { posts } from './posts.js'
    import { dark } from '../../stores.js'

</script>

{#each $layout.children as node}
  <a href="{node.path}">{node.title}</a>
{/each}

<div class="flex flex-col relative {$dark ? 'bg-gray-800' : 'bg-gray-400'} rounded-lg md:w-2/5 w-5/6 mx-auto mt-5 p-5 items-center shadow-lg">
    {#each posts as post}
        {#if post.slug == $params.post}
            <h1>{post.title}</h1>
            {@html post.body}
        {/if}
    {/each}
</div>

<style>
    h1 {
        font-size: 2em;
    }

</style>