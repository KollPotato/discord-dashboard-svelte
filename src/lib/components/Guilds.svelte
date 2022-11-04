<script lang="ts">
    import type { Guild as GuildT } from "$lib/client";
    import Guild from "./Guild.svelte";

    export let rows: number = 3;
    export let guilds: Array<GuildT> | null = [];
</script>

<div class="guilds">
    {#if guilds != null}
        {#each guilds as guild, index}
            {#if index % rows === 0 && guild.owner === true}
                <div class="row">
                    {#each Array(rows) as _, row_index}
                        <Guild
                            id={guilds[index + row_index].id}
                            icon={guilds[index + row_index].icon}
                            name={guilds[index + row_index].name}
                        />
                    {/each}
                </div>
            {/if}
        {/each}
    {/if}
</div>

<style lang="scss">
    .guilds {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .row {
            gap: 10px;
            display: flex;
            flex-direction: row;
        }
    }
</style>
