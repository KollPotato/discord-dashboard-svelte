<script lang="ts">
    import { page } from "$app/stores";
    import { Client } from "$lib/client";
    import { BOT_AUTH_URL } from "$lib/constants";
    import { onMount } from "svelte";

	export const prerender = false;

	onMount(() => {
		const session = $page.data.session

		if (session == undefined) {
			location.assign(BOT_AUTH_URL)
			return
		}

		const { token_type, access_token } = session.OAUTH_2
		const token = `${token_type} ${access_token}`

		console.log(token)

		const client = new Client(token)
		client.updateUserCache()
		client.updateGuildsCache()
	})
	
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Walty" />
</svelte:head>
