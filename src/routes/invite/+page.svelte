<script>
    import { BOT_INVITE_URL } from "$lib/constants";
    import { onMount } from "svelte";

    onMount(() => location.assign(BOT_INVITE_URL));
</script>

<svelte:head>
    <title>Invite</title>
    <meta name="description" content="Invite bot to your server" />
</svelte:head>
