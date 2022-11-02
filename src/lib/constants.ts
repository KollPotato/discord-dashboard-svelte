export const BASE_URL = "https://discord.com"
export const API_VERSION = 9
export const BASE_API_URL = `${BASE_URL}/api/v${API_VERSION}`
export const BOT_INVITE_OPTIONS = {
    client_id: "979022384155742248",
    permissions: "8",
    scope: "bot"
}
export const BOT_INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${BOT_INVITE_OPTIONS.client_id}&permissions=${BOT_INVITE_OPTIONS.permissions}&scope=${BOT_INVITE_OPTIONS.scope}`
export const BOT_AUTH_URL = "https://discord.com/api/oauth2/authorize?client_id=979022384155742248&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2Fdashboard&response_type=token&scope=identify%20guilds"
export const PATH_NAMES = {
    index: "",
    dashboard: "dashboard",
    logout: "logout",
    login: "login"
}