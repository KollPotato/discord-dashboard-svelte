<script lang="ts">
	import { onMount } from "svelte";

	const saveTokenInLocalStorage = (token: string) => {
		localStorage.setItem("token", token);
	};

	const getTokenFromLocalStorage = (): string | null => {
		return localStorage.getItem("token");
	};

	const isTokenInLocalStorage = (): boolean => {
		return Boolean(getTokenFromLocalStorage());
	};

	const isTokenValid = async (token: string): Promise<boolean> => {
		const { username } = await fetchUser(token);

		if (username != undefined) return false;
		return true;
	};

	const fetchUser = async (token: string) => {
		const response = await fetch("https://discord.com/api/users/@me", {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return await response.json();
	};

	const getTokenFromUrl = (location: Location): string | null => {
		const fragment = new URLSearchParams(location.hash.slice(1));
		return fragment.get("access_token");
	};

	const fetchGuilds = async (token: string) => {
		const response = await fetch("https://discord.com/api/guilds/@me", {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return await response.json();
	};

	const getToken = async (): Promise<string | null> => {
		if (isTokenInLocalStorage()) return getTokenFromLocalStorage();
		return getTokenFromUrl(location);
	};

	onMount(async () => {
		const token = await getToken();

		if (token == null || !(await isTokenValid(token))) {
			location.pathname = "login";
			return;
		}

		saveTokenInLocalStorage(token);
	});
</script>

<p id="info" />
<svelte:head>
	<title>Dashboard</title>
</svelte:head>
