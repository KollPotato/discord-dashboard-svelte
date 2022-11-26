import { c as create_ssr_component } from "../../../chunks/index.js";
import "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return ``;
});
export {
  Page as default
};
