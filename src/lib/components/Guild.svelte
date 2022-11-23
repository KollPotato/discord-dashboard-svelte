<script lang="ts">
    import type { PartialGuild } from "$lib/client";
    import { DASHBOARD_BASE_URL } from "$lib/constants";
    import { onMount } from "svelte";

    export let guild: PartialGuild
    let iconURL = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=40`

    onMount(async () => {
        const response = await fetch(iconURL, {
            method: "get"
        })
        if (response.status == 404) {
            iconURL = `${DASHBOARD_BASE_URL}/assets/discord.png`
        }
    })

    $: if (guild.name.length > 18) {
        guild.name = guild.name.slice(0, 14) + "..."
    }
</script>

<div class="text-white text-ellipsis w-60 p-4 rounded-xl items-center gap-3 bg-[#282930] flex flex-row">
    <img class="rounded-xl w-10 h-10" src={iconURL} alt="guild icon">
    <div class="flex flex-col">
        <p class="">{ guild.name }</p>
        <p class="text-[#60626D] font-medium text-sm">{ guild.id }</p>
    </div>
</div>