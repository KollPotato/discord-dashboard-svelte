import { BASE_API_URL, PATH_NAMES } from "./constants"

export interface Guild {
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
    avatar: null | string
    accent_color: number
    avatar_decoration: null | string
    banner: null | string
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

export const logout = (location: Location) => {
    location.pathname = PATH_NAMES.logout
}

export interface ClientState {
    loggedIn: boolean
}

export class Client {
    constructor(public readonly token: string) { }

    async fetch(url: string): Promise<Response> {
        const response = await fetch(url, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })

        const json = await (response.clone()).json()

        if (response.status == 401) throw AuthorizationError

        else if (json.code == 4008) throw RateLimitingError

        return response
    }

    async fetchUser(): Promise<User> {
        const response = await this.fetch(`${BASE_API_URL}/users/@me`)

        return response.json()
    }

    async fetchGuilds(): Promise<Array<Guild>> {
        const response = await this.fetch(`${BASE_API_URL}/users/@me/guilds`)

        return response.json()
    }
}