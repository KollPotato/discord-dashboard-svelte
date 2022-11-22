import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_object, e as escape, l as escape_attribute_value, v as validate_component } from "../../chunks/index.js";
import { b as BOT_AUTH_URL, a as BOT_INVITE_URL } from "../../chunks/constants.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["invert", "href"]);
  let { invert = false } = $$props;
  let { href = null } = $$props;
  if ($$props.invert === void 0 && $$bindings.invert && invert !== void 0)
    $$bindings.invert(invert);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${href == null ? `<button${spread(
    [
      escape_object($$restProps),
      {
        class: escape(
          invert ? "outline-primary-500 outline-3 -outline-offset-2 outline-none" : "bg-primary-500",
          true
        ) + " rounded-md p-4 select-none"
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>` : `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape(
          invert ? "outline-primary-500 outline-3 -outline-offset-2 outline-none hover:outline-primary-600" : "bg-primary-500 hover:bg-primary-600",
          true
        ) + " transition-colors rounded-md p-4 text-center"
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1wbeg2h_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Walty"}"><!-- HEAD_svelte-1wbeg2h_END -->`, ""}

<div class="${"grid text-white relative place-items-center w-full "}"><div class="${"flex flex-col gap-6 items-center"}"><h1 id="${"title"}" class="${"text-5xl"}">Hey, I am <span id="${"name"}" class="${"text-primary-400"}">Walty</span></h1>
		<p id="${"description"}" class="${"w-fit"}">Super duper mega ultra cool Discord bot</p>
		<div class="${"flex w-full flex-col gap-2"}">${validate_component(Button, "Button").$$render($$result, { href: BOT_AUTH_URL }, {}, {
    default: () => {
      return `Login`;
    }
  })}
			${validate_component(Button, "Button").$$render($$result, { href: BOT_INVITE_URL, invert: true }, {}, {
    default: () => {
      return `Invite`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};
