import { guilds, user } from "../store"
import { DISCORD_BASE_API_URL, DISCORD_BASE_URL } from "./constants"

export interface PartialGuild {
    id: string
    name: string
    icon: string
    features: Array<string>
    owner: boolean
    permissions: string
}

export interface User {
    id: string
    username: string
    discriminator: string
    avatar: string
    accent_color: number
    avatar_decoration: string
    banner: string
    banner_color: string
    flags: number
    locale: string
    mfa_enabled: boolean
    premium_type: number
    public_flags: number
}

export class AuthorizationError extends Error {
    constructor() {
        super("Could not make an API request to the Discord server, because authorization token is missing or is invalid")
    }
}

export class RateLimitingError extends Error {
    constructor() {
        super("Could not make an API request to the Discord server, because you are being rate limited")
    }
}

export class Client {
    constructor(public readonly token: string) { }

    async fetch(url: string): Promise<Response> {
        const response = await fetch(url, {
            headers: {
                authorization: this.token
            }
        })

        if (response.status == 401) throw AuthorizationError
        else if (response.status == 429) throw RateLimitingError

        return response
    }

    async fetchUser(): Promise<User> {
        const response = await this.fetch(`${DISCORD_BASE_API_URL}/users/@me`)

        return response.json()
    }

    async fetchGuilds(): Promise<PartialGuild[]> {
        const response = await this.fetch(`${DISCORD_BASE_API_URL}/users/@me/guilds`)

        return response.json()
    }

    async updateUserCache() {
        user.set(await this.fetchUser())
    }

    async updateGuildsCache() {
        guilds.set(await this.fetchGuilds())
    }
}
