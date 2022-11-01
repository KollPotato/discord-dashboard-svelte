<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        localStorage.removeItem("token");
        location.pathname = "/"
    });
</script>
