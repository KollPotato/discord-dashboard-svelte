<script>
    import { BOT_AUTH_URL } from "$lib/constants";
    import { isLoggedIn } from "$lib/client";
    import { onMount } from "svelte";

    onMount(() => {
        if (isLoggedIn(localStorage)) {
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
