<script lang="ts">
	import { Client, type Guild, type User } from "$lib/client";
	import Guilds from "$lib/components/Guilds.svelte";
	import { BOT_AUTH_URL } from "$lib/constants";
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	import { guilds, state, token, user } from "../../store";

	const getTokenFromURL = (url: string): string | null => {
		const fragment = new URLSearchParams(url.slice(1));
		return fragment.get("access_token");
	};

	let activeUser: null | User = null;
	let activeGuilds: Guild[] | null = [];

	onMount(async () => {
		const tokenFromURL =
			getTokenFromURL(location.href) || localStorage.getItem("token");

		token.set(tokenFromURL);
		const savedToken = get(token);

		window.history.replaceState({}, document.title, "/dashboard");

		if (savedToken == null) {
			location.assign(BOT_AUTH_URL);
			return;
		}

		const client = new Client(savedToken);

		if (get(user) == null) {
			const fetchedUser = await client.fetchUser();
			user.set(fetchedUser);
		}

		if (get(guilds) == null) {
			const fetchedGuilds = await client.fetchGuilds();
			guilds.set(fetchedGuilds);
		}

		state.set({ loggedIn: true }) 
		
		activeGuilds = get(guilds);
		activeUser = get(user);
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="center">
	<div class="card">
		<div class="info">
			{#if activeUser != null}
				<h1 class="title">Hi, {activeUser.username}!</h1>
				{:else}
				<h1 class="title">Hi!</h1>
			{/if}
			<p class="tip">Select a guild to continue</p>
		</div>
		<Guilds guilds={activeGuilds} />
	</div>
</div>

<style lang="scss">
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 40px;
		.card {
			gap: 40px;
			position: relative;
			margin-top: 10vh;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			.info {
				user-select: none;
				display: flex;
				flex-direction: column;
				align-items: center;
				.title {
					font-weight: 400;
					font-size: 60px;
				}
			}
		}
	}
</style>
