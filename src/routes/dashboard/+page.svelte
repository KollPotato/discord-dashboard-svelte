<script lang="ts">
	import { page } from "$app/stores";
	import { Client } from "$lib/client";
	import Guilds from "$lib/components/Guilds.svelte";
	import { guilds, user } from "../../store";
	import { onMount } from "svelte";
	import { get } from "svelte/store";
    import { BOT_AUTH_URL, DASHBOARD_BASE_URL } from "$lib/constants";
    import { EN_US } from "$lib/lang";

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
		if (session.OAUTH_2 == null) {
			location.assign(BOT_AUTH_URL)
		}
		const { token_type, access_token } = session.OAUTH_2;
		const token = `${token_type} ${access_token}`;

		const client = new Client(token);

		await client.updateUserCache();
		await client.updateGuildsCache();
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
		<div class="flex flex-col gap-4 text-white items-center">
			<h1 class="text-white text-4xl">
				Hey, <span class="text-primary-400">{cachedUser.username}</span>!
			</h1>
			<p>{EN_US.dashboard.select}</p>
		</div>
		{/if}
		<Guilds guilds={cachedGuilds} />
	{/if}
</div>
