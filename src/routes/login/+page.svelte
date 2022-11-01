<script>
    import { AUTH_URL } from "$lib/data";
    import { onMount } from "svelte";

    onMount(() => location.assign(AUTH_URL));
</script>

<svelte:head>
    <title>Login</title>
    <meta name="description" content="Login page to acces dashboard" />
</svelte:head>
