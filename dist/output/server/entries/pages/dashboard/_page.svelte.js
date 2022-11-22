import { c as create_ssr_component, d as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const prerender = false;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-bmju4y_START -->${$$result.title = `<title>Dashboard</title>`, ""}<meta name="${"description"}" content="${"Walty"}"><!-- HEAD_svelte-bmju4y_END -->`, ""}`;
});
export {
  Page as default
};
