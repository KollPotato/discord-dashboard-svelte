const DASHBOARD_BASE_URL = "http://127.0.0.1:5173";
const BOT_INVITE_OPTIONS = {
  permissions: "8",
  scope: encodeURIComponent("bot")
};
const BOT_AUTH_OPTIONS = {
  scope: encodeURIComponent("identify guilds"),
  response_type: "code",
  redirect_uri: encodeURIComponent(`${DASHBOARD_BASE_URL}/login`)
};
const CLIENT_ID = "979022384155742248";
const BOT_INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${BOT_INVITE_OPTIONS.permissions}&scope=${BOT_INVITE_OPTIONS.scope}`;
const BOT_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${BOT_AUTH_OPTIONS.redirect_uri}&response_type=${BOT_AUTH_OPTIONS.response_type}&scope=${BOT_AUTH_OPTIONS.scope}`;
const BOT_SUPPORT_SERVER_URL = "https://discord.gg/Nq49k4kY6z";
export {
  BOT_AUTH_URL as B,
  CLIENT_ID as C,
  DASHBOARD_BASE_URL as D,
  BOT_SUPPORT_SERVER_URL as a,
  BOT_INVITE_URL as b,
  BOT_AUTH_OPTIONS as c
};
