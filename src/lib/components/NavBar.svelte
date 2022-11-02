<script lang="ts" >
    import { Client, isLoggedIn, logout } from "$lib/client";
    import { PATH_NAMES } from "$lib/constants";
    import { onMount } from "svelte";

    const handleLogoClick = () => location.pathname = PATH_NAMES.index
    const handleLogoutClick = () => location.pathname = PATH_NAMES.logout

    let loggedIn = false
    let client = null


    onMount(() => {
        if (!isLoggedIn(localStorage)) {
            logout(location)
            return
        }
        
        
        loggedIn = true

        const token = localStorage.getItem("token")
        if (token == null) return

        const client = new Client(token)
        user = client.fetchUser()

    })
</script>

<nav class="navbar">
    <img
        on:click={handleLogoClick}
        on:keypress={handleLogoClick}
        class="logo"
        src="/assets/logo.svg"
        alt="walty logo"
    />
    <ul class="nav-items">
        <li class="nav-item">
            <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/invite">Invite</a>
        </li>
        <li class="nav-item">
            {#if loggedIn}
                <a class="nav-link" href="/login">Login</a>
            {:else}
                <a class="nav-link" href="/profile">{user.username}#{user.discriminator}</a>
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
        .logo {
            cursor: pointer;
        }
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
