<script lang="ts">
    import { Client } from "$lib/client";
	import { BOT_AUTH_URL } from "$lib/constants"
	import { onMount } from "svelte";

	const getTokenFromURL = (url: string): string | null => {
		const fragment = new URLSearchParams(url.slice(1));
		return fragment.get("access_token");
	};

	onMount(async () => {
		let token = getTokenFromURL(location.href) || localStorage.getItem("token")

		if (token == null) {
			location.assign(BOT_AUTH_URL)
			return
		}

		window.history.replaceState({}, document.title, "/dashboard");

		const client = new Client(token)
		const user = await client.fetchUser()

		localStorage.setItem("token", client.token)

	});
</script>

<p id="info" />

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
