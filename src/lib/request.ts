export type BodyType = "json" | "x-www-form-urlencoded"

export const encodeBody = (body: any, type: BodyType) => {
    const encodeBodyMap = {
        "json": (body: Object | string | number | null) => {
            return JSON.stringify(body)
        },
        "x-www-form-urlencoded": (body: {[key: string]: any}) => {
            return Object.keys(body).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key as keyof typeof body])}`).join("&")
        }
    }

    return encodeBodyMap[type](body)
}