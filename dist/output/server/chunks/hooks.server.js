import { handleSession } from "svelte-kit-cookie-session";
const handle = handleSession({
  secret: "528397e036a57f3474bf528f577e3782",
  expires: 60
});
export {
  handle
};
