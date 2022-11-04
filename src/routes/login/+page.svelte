<script>
    import { BOT_AUTH_URL } from "$lib/constants";
    import { state } from "../../store";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    onMount(() => {
        if (get(state).loggedIn) {
            location.pathname = "/dashboard"
            return
        }
        
        location.assign(BOT_AUTH_URL)
    });
</script>

<svelte:head>
    <title>Login</title>
    <meta name="description" content="Login page to acces dashboard" />
</svelte:head>
