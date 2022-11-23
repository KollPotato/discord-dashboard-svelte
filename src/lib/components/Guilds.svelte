<script lang="ts">
    import type { PartialGuild } from "$lib/client";
    import Guild from "./Guild.svelte";

    export let guilds: Array<PartialGuild>;
    export let columns: number = 4;
</script>

<div class="flex flex-col gap-2">
    {#each guilds as _, i}
        {#if i % columns === 0}
            <div class="flex flex-row gap-2">
                {#each Array(columns) as _, j}
                    {#if guilds[(i / columns) * columns + j]}
                        <Guild guild={guilds[(i / columns) * columns + j]} />
                    {/if}
                {/each}
            </div>
        {/if}
    {/each}
</div>
