<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import "../style.scss";
</script>

<div class="app">
	<NavBar />
	
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		background-color: #212227;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
