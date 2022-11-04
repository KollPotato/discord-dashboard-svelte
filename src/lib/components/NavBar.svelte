<script lang="ts">
    import type { User } from "$lib/client";
    import { PATH_NAMES } from "$lib/constants";
    import { state, user } from "../../store";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    const handleLogoClick = () => (location.pathname = PATH_NAMES.index);

    let clientState = get(state);
    let activeUser: null | User = null;
    let displayName: string = "";

    onMount(async () => {
        activeUser = get(user);
        displayName = `${activeUser?.username}#${activeUser?.discriminator}`;
    });
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
            <a class="nav-link" href={clientState.loggedIn ? "/profile" : "/login"}
                >{clientState.loggedIn ? displayName : "Login"}</a
            >
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
