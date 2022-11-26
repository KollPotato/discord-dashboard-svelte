<script lang="ts">
    export let href: string;
    export let underline: boolean = false;
    export let active: boolean = false;
    export let pointer: boolean = false
</script>

<a
    class="link transition-colors {pointer ? 'cursor-pointer' : 'cursor-default'} {underline ? 'wow-underline' : '' } {active
        ? 'text-primary-400 active'
        : ''} h-fit"
    {href}
>
    <slot />
</a>

<style lang="scss">
    .link {
        display: inline-block;
        position: relative;
    }
    
    .link:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1.5px;
        bottom: 0;
        left: 0;
        background-color: #FFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .link.wow-underline.active:after {
        @apply bg-primary-500;
    }

    .link.wow-underline:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>
