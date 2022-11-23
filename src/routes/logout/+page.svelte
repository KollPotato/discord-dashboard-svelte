<script>
    import { DASHBOARD_BASE_URL } from "$lib/constants";
    import { guilds, user } from "../../store";
    import { onMount } from "svelte";

    export const prerender = false

    onMount(() => {
        user.set(null)
        guilds.set(null)
        location.assign(DASHBOARD_BASE_URL)
    })
</script>