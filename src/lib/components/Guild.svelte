<script lang="ts">
    import type { PartialGuild } from "$lib/client";
    import { DASHBOARD_BASE_URL } from "$lib/constants";
    import Link from "./Link.svelte";
    import ToolTip from "./ToolTip.svelte";

    export let guild: PartialGuild
    let iconURL = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=40`
    let guildName = guild.name
    if (guild.icon == null) {
        iconURL = `${DASHBOARD_BASE_URL}/assets/discord.png`
    }

    $: if (guild.name.length >= 18) {
        guildName = guild.name.slice(0, 14) + "..."
    }

</script>

<Link href="/dashboard/{guild.id}">
    <div class="text-white select-none text-ellipsis w-60 p-4 rounded-xl items-center gap-3 bg-[#282930] flex flex-row">
        <img class="rounded-xl w-10 h-10" src={iconURL} alt="guild icon">
        <div class="flex flex-col">
            <ToolTip position="top" text="{guild.name}">
                <p>{ guildName }</p>
            </ToolTip>
            <p class="text-[#60626D] font-medium text-sm">{ guild.id }</p>
        </div>
    </div>
</Link>