<script lang="ts">
    export let text: string;
</script>

<div class="dropdown">
    <p>{text}</p>
    <div class="dropdown-content">
        <slot />
    </div>
</div>

<style>
    .dropdown {
        color: white;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #2E2E36;
        border-radius: 4px;
        min-width: 140px;
        margin-top: 4px;
        padding: 12px 16px;
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
