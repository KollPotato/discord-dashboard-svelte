<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import "../style.scss";
	import { page } from "$app/stores"

</script>

<div class="app flex flex-col w-full h-full">
	<NavBar />
	<main class="body w-full h-full">
		<slot />
	</main>
</div>


<style>
	.body {
		display: flex;
		flex-direction: row;
	}
</style>