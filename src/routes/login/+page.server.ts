import { encodeBody } from "$lib/request";
import type { PageServerLoad } from "./$types";
import { env } from '$env/dynamic/private'
import { BOT_AUTH_OPTIONS, BOT_AUTH_URL, CLIENT_ID, DASHBOARD_BASE_URL } from "$lib/constants";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url, fetch, locals }) => {
    const code = url.searchParams.get("code")

    if (code == null && locals.session.data.OAUTH_2 == undefined) {
        console.log("Log: code is null and session is empty, redirecting")
        throw redirect(303, BOT_AUTH_URL)
    }
    else if (code == null) return

    console.log("Log: code is in search parameters, granting access token")

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
            redirect_uri: `${DASHBOARD_BASE_URL}/login`,
            scope: BOT_AUTH_OPTIONS.scope
        }, "x-www-form-urlencoded")
    })

    const json = await response.clone().json()
    console.log(json)


    if (json.error !== undefined) return

    console.log("Log: acccess token granted, saving in session cookie")

    await locals.session.set({ OAUTH_2: json })
    throw redirect(308, `${DASHBOARD_BASE_URL}/dashboard`)
}
