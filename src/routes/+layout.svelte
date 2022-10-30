<script>
	import "../style.scss";
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		background-color: #2d2d36;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
