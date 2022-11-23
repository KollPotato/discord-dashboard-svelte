export const DASHBOARD_BASE_URL = "http://127.0.0.1:5173"
export const BASE_URL = "https://discord.com"
export const API_VERSION = 9
export const BASE_API_URL = `${BASE_URL}/api/v${API_VERSION}`

export const BOT_INVITE_OPTIONS = {
    permissions: "8",
    scope: encodeURIComponent("bot")
}

export const BOT_AUTH_OPTIONS = {
    scope: encodeURIComponent("identify guilds"),
    response_type: "code",
    redirect_uri: encodeURIComponent(`${DASHBOARD_BASE_URL}/dashboard`)
}

console.log(BOT_AUTH_OPTIONS.redirect_uri)

export const CLIENT_ID = "979022384155742248"
export const BOT_INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${BOT_INVITE_OPTIONS.permissions}&scope=${BOT_INVITE_OPTIONS.scope}`
export const BOT_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${BOT_AUTH_OPTIONS.redirect_uri}&response_type=${BOT_AUTH_OPTIONS.response_type}&scope=${BOT_AUTH_OPTIONS.scope}`
export const BOT_SUPPORT_SERVER_URL = "https://discord.gg/Nq49k4kY6z"