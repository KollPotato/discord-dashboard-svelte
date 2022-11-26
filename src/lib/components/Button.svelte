<script lang="ts">
    export let invert: boolean = false;
    export let href: string | null = null;

    const invertStyle =
        "outline-primary-600 outline-3 -outline-offset-2 outline-none";
    const sharedStyle =
        "select-none rounded-md p-4 text-center transition-colors";
    const style = invert
        ? `${sharedStyle} ${invertStyle} hover:outline-primary-700`
        : `${sharedStyle} bg-primary-600 hover:bg-primary-700`;
</script>

{#if href == null}
    <button {...$$restProps} on:click class={style}>
        <slot />
    </button>
{:else}
    <a {...$$restProps} {href} class={style}>
        <slot />
    </a>
{/if}
