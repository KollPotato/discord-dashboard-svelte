<script lang="ts">
    export let invert: boolean = false;
    export let href: string | null = null;
</script>

{#if href == null}
    <button
        {...$$restProps}
        on:click
        class="{invert
            ? 'outline-primary-500 outline-3 -outline-offset-2 outline-none'
            : 'bg-primary-500'} rounded-md p-4 select-none"
    >
        <slot />
    </button>
{:else}
    <a
        {...$$restProps}
        href="{href}"
        class="{invert
            ? 'outline-primary-500 outline-3 -outline-offset-2 outline-none hover:outline-primary-600'
            : 'bg-primary-500 hover:bg-primary-600'} transition-colors rounded-md p-4 text-center"
    >
        <slot />
    </a>
{/if}
