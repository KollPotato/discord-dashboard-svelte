<script lang="ts">
    import type { PartialGuild } from "$lib/client";
    import { getPermissions } from "../discord";
    import Guild from "./Guild.svelte";

    export let guilds: Array<PartialGuild>;
    export let columns: number = 4;
    let filteredGuilds: PartialGuild[] = []

    $: guilds.forEach(guild => {
        if (getPermissions(guild.permissions).includes("ADMINISTRATOR")) {
            filteredGuilds.push(guild)
        }
    })
</script>

<div class="flex flex-col gap-2">
    {#each filteredGuilds as _, i}
        {#if i % columns === 0}
            <div class="flex flex-row gap-2">
                {#each Array(columns) as _, j}
                    {#if filteredGuilds[(i / columns) * columns + j]}
                        <Guild guild={filteredGuilds[(i / columns) * columns + j]} />
                    {/if}
                {/each}
            </div>
        {/if}
    {/each}
</div>
