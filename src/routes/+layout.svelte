<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import "../style.scss";
</script>

<div class="app flex flex-col w-full h-full">
	<NavBar />
	<main class="body w-full p-4">
		<slot />
	</main>
</div>

<style>
	.body {
		display: flex;
		flex-direction: row;
	}
</style>
