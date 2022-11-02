import type { User } from "./client";

export const DataStorage = (storage: Storage) => {
    const dataStorage = {
        get token(): string | null {
            return storage.getItem("token")
        },

        set token(token: string | null) {
            storage.setItem("token", JSON.stringify(token))
        },

        get user(): User | null {
            const user = storage.getItem("user")
            if (user === null) return null
            return JSON.parse(user)
        },

        set user(user: User | null) {
            storage.setItem("user", JSON.stringify(user))
        }
    }

    return  dataStorage
}
