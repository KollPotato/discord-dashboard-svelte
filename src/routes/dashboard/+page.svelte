<script lang="ts">
	import { userStore } from "../../stores";
	import { onMount } from "svelte";

	const getTokenFromURL = (url: string): string | null => {
		const fragment = new URLSearchParams(url.slice(1));
		return fragment.get("access_token");
	};

	const fetchUser = async (token: string) => {
		const response = await fetch("https://discord.com/api/v9/users/@me", {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return await response.json();
	};

	onMount(async () => {
		const token = getTokenFromURL(location.href);

		if (token == null) return;

		userStore.set(await fetchUser(token));

		userStore.subscribe((value) => {
			console.log(value)
		})
	});
</script>

<p id="info" />

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
