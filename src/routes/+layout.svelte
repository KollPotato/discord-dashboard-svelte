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

<style lang="scss">
	.app {
		background-color: #212227;
		position: relative;
		overflow: hidden;
		min-height: 100%;
		height: 100%;
	}

	main {
		position: relative;
		min-height: 100%;
		height: 100%;
	}
</style>
