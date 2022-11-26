import { r as redirect, a as env } from "../../../chunks/env-private.js";
import { C as CLIENT_ID, D as DASHBOARD_BASE_URL, c as BOT_AUTH_OPTIONS, B as BOT_AUTH_URL } from "../../../chunks/constants.js";
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
  if (code == null && locals.session.data.OAUTH_2 == void 0) {
    console.log("Log: code is null and session is empty, redirecting");
    throw redirect(303, BOT_AUTH_URL);
  } else if (code == null)
    return;
  console.log("Log: code is in search parameters, granting access token");
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
      redirect_uri: `${DASHBOARD_BASE_URL}/login`,
      scope: BOT_AUTH_OPTIONS.scope
    }, "x-www-form-urlencoded")
  });
  const json = await response.clone().json();
  console.log(json);
  if (json.error !== void 0)
    return;
  console.log("Log: acccess token granted, saving in session cookie");
  await locals.session.set({ OAUTH_2: json });
  throw redirect(308, `${DASHBOARD_BASE_URL}/dashboard`);
};
export {
  load
};
