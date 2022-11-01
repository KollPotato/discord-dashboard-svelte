<script lang="ts">
    export let text: string;
</script>

<button
    class="button {$$restProps.class}"
    on:click
    on:mouseover
    on:focus
    on:mouseenter
    on:mouseleave
    {...$$restProps}>{text}</button
>

<style lang="scss">
    $blue: #4a67ff;

    .button {
        padding: 16px 14px;
        border-radius: 6px;
        border: none;
        outline: none;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
    }
    :global(.button.blue) {
        color: white;
        background-color: $blue;
    }
    :global(.button.blue-invert) {
        outline: solid $blue 3px;
        outline-offset: -3px;
        background-color: transparent;
        color: $blue;
    }
</style>
