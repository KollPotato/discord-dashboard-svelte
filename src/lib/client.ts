import { BASE_API_URL } from "./constants"

export interface Guild {

}

export interface User {
    accent_color: number
    avatar: null | string
    avatar_decoration: null | string
    banner: null | string
    banner_color: string
    discriminator: string
    flags: number
    id: string
    locale: string
    mfa_enabled: boolean
    premium_type: number
    public_flags: number
    username: string
}

export class AuthorizationError extends Error {
    constructor() {
        super("Could not make an API request to the Discord server, because authorization token is missing or is invalid")
    }
}

export const isLoggedIn = (storage: Storage): boolean => {
    let token = storage.getItem("token")
    if (token == null) return false
    return true
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