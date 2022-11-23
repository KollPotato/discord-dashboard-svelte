import { e as env } from "../../../chunks/env-private.js";
import { C as CLIENT_ID, c as BOT_AUTH_OPTIONS } from "../../../chunks/constants.js";
const encodeBody = (body, type) => {
  const encodeBodyMap = {
    "json": (body2) => {
      return JSON.stringify(body2);
    },
    "x-www-form-urlencoded": (body2) => {
      return Object.keys(body2).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(body2[key])}`).join("&");
    }
  };
  return encodeBodyMap[type](body);
};
const load = async ({ url, fetch, locals }) => {
  const code = url.searchParams.get("code");
  if (code == null)
    return;
  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: encodeBody({
      client_id: CLIENT_ID,
      client_secret: env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: BOT_AUTH_OPTIONS.redirect_uri,
      scope: BOT_AUTH_OPTIONS.scope
    }, "x-www-form-urlencoded")
  });
  const json = await response.clone().json();
  if (json.error !== void 0)
    return;
  await locals.session.set({ OAUTH_2: json });
};
export {
  load
};
