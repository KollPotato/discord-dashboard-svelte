// @ts-nocheck
import { encodeBody } from "$lib/request";
import type { PageServerLoad } from "./$types";
import { env } from '$env/dynamic/private'
import { BOT_AUTH_OPTIONS, CLIENT_ID } from "$lib/constants";

export const load = async ({ url, fetch, locals }: Parameters<PageServerLoad>[0]) => {
    const code = url.searchParams.get("code")

    if (code == null) return

    const response = await fetch("https://discord.com/api/oauth2/token", {
        method: "post",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: encodeBody({
            client_id: CLIENT_ID,
            client_secret: env.CLIENT_SECRET,
            grant_type: "authorization_code",
            code: code,
            redirect_uri: BOT_AUTH_OPTIONS.redirect_uri,
            scope: BOT_AUTH_OPTIONS.scope
        }, "x-www-form-urlencoded")
    })

    const json = await response.clone().json()

    if (json.error !== undefined) return

    await locals.session.set({ OAUTH_2: json })
}
