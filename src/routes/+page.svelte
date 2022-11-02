<script>
	import Button from "$lib/components/Button.svelte";
	import { BOT_AUTH_URL, BOT_INVITE_URL } from "$lib/constants";
	import { isLoggedIn } from "$lib/client";
	import { onMount } from "svelte";

	const handleLoginClick = () => location.assign(BOT_AUTH_URL);
	const handleInviteClick = () => location.assign(BOT_INVITE_URL);
	const handleDashboardClick = () => {};

	let loggedIn = false;

	onMount(() => (loggedIn = isLoggedIn(localStorage)));
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="center">
	<div class="card">
		<h1 class="title">Walty</h1>
		<p class="description">Super duper mega ultra Discord bot</p>
		<div class="buttons">
			<Button
				on:click={loggedIn ? handleDashboardClick : handleLoginClick}
				class="button blue"
				text={loggedIn ? "Dashboard" : "Invite"}
			/>
			<Button
				on:click={handleInviteClick}
				class="button blue-invert"
				text="Invite"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 85%;
	}
	.card {
		display: flex;
		flex-direction: column;
		width: fit-content;
		color: white;
		.title {
			text-align: center;
			font-size: 72px;
			font-weight: 300;
			user-select: none;
			margin-bottom: -4px;
		}
		.description {
			font-weight: 300;
			font-size: 16px;
			user-select: none;
			margin-bottom: 24px;
			text-align: center;
		}
		.buttons {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	}

	@media screen and (max-width: 520px) {
		.card {
			width: 80%;
		}
	}
</style>
