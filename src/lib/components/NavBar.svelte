<script lang="ts">
    import { page } from "$app/stores";
    import {
        BOT_AUTH_URL,
        BOT_INVITE_URL,
        BOT_SUPPORT_SERVER_URL,
    } from "$lib/constants";

    import Link from "./Link.svelte";
    import NavBarItem from "./NavBarItem.svelte";

    import { user } from "../../store";
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    import type { User } from "$lib/client";

    const links = [
        { text: "Dashboard", href: "/dashboard" },
        { text: "Docs", href: "/docs" },
        { text: "Discord", href: BOT_SUPPORT_SERVER_URL },
        { text: "Invite", href: BOT_INVITE_URL },
    ];

    $: cachedUser = get(user)
    user.subscribe(user => {
        cachedUser = user
    })
</script>

<nav
    class="z-10 flex w-screen text-white flex-row justify-between h-fit items-center p-6 pt-5"
>
    <Link href="/">
        <img class="w-24" src="/assets/logo.svg" alt="walty logo" />
    </Link>
    <ul class="flex flex-row gap-4 h-fit">
        {#each links as link}
            <NavBarItem>
                <Link
                    underline
                    active={$page.url.pathname == link.href}
                    href={link.href}
                >
                    {link.text}</Link
                >
            </NavBarItem>
        {/each}
        <NavBarItem>
            {#if cachedUser == null}
                <Link href={BOT_AUTH_URL}>Login</Link>
            {:else}
                <p class="select-none">{cachedUser.username}#{cachedUser.discriminator}</p>
            {/if}
        </NavBarItem>
    </ul>
</nav>
