<script lang="ts">
	import { page } from "$app/stores";
	import { BOT_AUTH_URL } from "$lib/constants";
	import { AuthorizationError, Client } from "$lib/client";
	import Guilds from "$lib/components/Guilds.svelte";
	import { guilds, user } from "../../store";
	import { onMount } from "svelte";
	import { get } from "svelte/store";

	export const prerender = false;
	$: cachedGuilds = get(guilds);
	guilds.subscribe((guilds) => {
		cachedGuilds = guilds;
	});

	$: cachedUser = get(user);
	user.subscribe((user) => {
		cachedUser = user;
	});
	$: session = $page.data.session;

	onMount(async () => {
		const { token_type, access_token } = session.OAUTH_2;
		const token = `${token_type} ${access_token}`;

		console.log(token);

		const client = new Client(token);

		try {
			await client.updateUserCache();
			await client.updateGuildsCache();
		} catch (e) {}
	});
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Walty" />
</svelte:head>

<div
	class="relative w-full justify-center top-[50px] flex flex-col items-center gap-8"
>
	{#if cachedGuilds != null}
		{#if cachedUser != null}
			<h1 class="text-white text-4xl">
				Hey, <span class="text-primary-400">{cachedUser.username}</span
				>!
			</h1>
		{/if}
		<Guilds guilds={cachedGuilds} />
	{/if}
</div>
