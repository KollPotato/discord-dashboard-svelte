const BOT_INVITE_OPTIONS = {
  client_id: "979022384155742248",
  permissions: "8",
  scope: "bot"
};
const BOT_INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${BOT_INVITE_OPTIONS.client_id}&permissions=${BOT_INVITE_OPTIONS.permissions}&scope=${BOT_INVITE_OPTIONS.scope}`;
const BOT_AUTH_URL = "https://discord.com/api/oauth2/authorize?client_id=979022384155742248&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2Fdashboard&response_type=code&scope=identify%20guilds";
const BOT_SUPPORT_SERVER_URL = "https://discord.gg/Nq49k4kY6z";
export {
  BOT_SUPPORT_SERVER_URL as B,
  BOT_INVITE_URL as a,
  BOT_AUTH_URL as b
};
