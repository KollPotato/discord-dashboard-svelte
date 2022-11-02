import { BASE_API_URL, PATH_NAMES } from "./constants"
import { DataStorage } from "./data"

export interface Guild {}

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

export const isLoggedIn = (storage: Storage): boolean => {
    const { token } = DataStorage(storage)
    if (token == null) return false
    return true
}

export const logout = (location: Location) => {
    location.pathname = PATH_NAMES.logout
}

export class Client {
    constructor(public readonly token: string) { }

    async fetch(url: string): Promise<Response> {
        const respone = await fetch(url, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })

        if (respone.status == 401) throw AuthorizationError

        return respone
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