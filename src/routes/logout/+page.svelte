<script lang="ts">
    import { PATH_NAMES } from "$lib/constants";
    import { onMount } from "svelte";

    onMount(() => {
        localStorage.removeItem("token");
        location.pathname = PATH_NAMES.index
    });
</script>
