<script>
	import { BOT_AUTH_URL, BOT_INVITE_URL } from "$lib/constants";
	import Button from "$lib/components/Button.svelte";
    import { EN_US } from "$lib/lang";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Walty" />
</svelte:head>

<div class="grid text-white relative place-items-center w-full ">
	<div class="flex flex-col gap-6 items-center">
		<h1 id="title" class="text-5xl">
			Hey, I am <span id="name" class="text-primary-400">Walty</span>
		</h1>
		<p id="description" class="w-fit">{EN_US.bot.description}</p>
		<div class="flex w-full flex-col gap-2">
			<Button href={BOT_AUTH_URL}>Login</Button>
			<Button href={BOT_INVITE_URL} invert>Invite</Button>
		</div>
	</div>
</div>
