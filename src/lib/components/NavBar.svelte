<script lang="ts">
    import { userStore } from "../../stores";

    let user: any = null;

    userStore.subscribe((value) => {
        user = value;
    });

    const handleLogoutClick = () => {};
</script>

<nav class="navbar">
    <img class="logo" src="/assets/logo.svg" alt="walty logo" />
    <ul class="nav-items">
        <li class="nav-item">
            <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/invite">Invite</a>
        </li>
        <li class="nav-item">
            {#if user == null }
                <a class="nav-link" href="/login">Login</a>
            {:else if user.username != undefined}
                <a class="nav-link" href="/profile"
                    >{user.username}#{user.discriminator}</a
                >
            {/if}
        </li>
    </ul>
</nav>

<style lang="scss">
    .navbar {
        z-index: 10;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        & > .nav-items {
            display: flex;
            user-select: none;
            flex-direction: row;
            gap: 16px;
            .nav-item {
                list-style-type: none;
                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }

    @media screen and (max-width: 300px) {
    }
</style>
