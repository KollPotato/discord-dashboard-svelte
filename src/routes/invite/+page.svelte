<script>
    import { INVITE_URL } from "$lib/data";
    import { onMount } from "svelte";

    onMount(() => location.assign(INVITE_URL));
</script>

<svelte:head>
    <title>Invite</title>
    <meta name="description" content="Invite bot to your server" />
</svelte:head>
