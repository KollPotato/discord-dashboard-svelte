<script lang="ts">
    export let id: string
    export let name: string
    export let icon: string

    if (name.length >= 18) {
        name = name.slice(0, 14) + "..."
    }

    const getIconURL = (id: string, icon: string): string => {
        const url = `https://cdn.discordapp.com/icons/${id}/${icon}.png`
        if (icon == null) return "https://media.pocketgamer.biz/2021/5/110514/discord-new-logo-2021-r225x.jpg"
        return url
    }

</script>

<div class="guild">
    <img class="icon" src="{ getIconURL(id, icon) }" alt="discord server">
    <div class="info">
        <p class="name">{ name }</p>
        <p class="id">{ id }</p>
    </div>
</div>

<style lang="scss">
    .guild {
        display: flex;
        flex-direction: row;
        color: white;
        gap: 16px;
        align-items: center;
        font-size: 16px;
        background-color: #282930;
        width: 280px;
        padding: 20px;
        border-radius: 8px;

        .icon {
            user-select: none;
            width: 48px;
            height: 48px;
            border-radius: 8px;
        }

        .info {
            user-select: none;
            display: flex;
            flex-direction: column;

            .id {
                color: #60626D;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
</style>