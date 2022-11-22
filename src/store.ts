import { browser } from "$app/environment"
import type { PartialGuild, User } from "$lib/client"
import { writable } from "svelte/store"

export const user = writable(null as User | null, (set) => {
    if (!browser) return
    const cachedUser = localStorage.getItem("user")

    if (cachedUser == null) {
        set(null)
        return
    }

    set(JSON.parse(cachedUser))
})

user.subscribe((user: User | null) => {
    if (user == null) return
    if (!browser) return
    localStorage.setItem("user", JSON.stringify(user))
})

export const guilds = writable(null as PartialGuild[] | null, (set) => {
    if (!browser) return
    const cachedGuilds = localStorage.getItem("guilds")

    if (cachedGuilds == null) {
        set(null)
        return
    }

    set(JSON.parse(cachedGuilds))
})

guilds.subscribe((guilds: PartialGuild[] | null) => {
    if (guilds == null) return
    if (!browser) return
    localStorage.setItem("guilds", JSON.stringify(guilds))
})