import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, g as get_store_value, d as escape, v as validate_component } from "../../chunks/index.js";
import { B as BOT_AUTH_URL, b as BOT_INVITE_URL } from "../../chunks/constants.js";
import { u as user } from "../../chunks/store.js";
const invertStyle = "outline-indigo-600 outline-3 -outline-offset-2 outline-none";
const sharedStyle = "select-none rounded-md p-4 text-center transition-colors";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["invert", "href"]);
  let { invert = false } = $$props;
  let { href = null } = $$props;
  const style = invert ? `${sharedStyle} ${invertStyle} hover:outline-indigo-700` : `${sharedStyle} bg-indigo-600 hover:bg-indigo-700`;
  if ($$props.invert === void 0 && $$bindings.invert && invert !== void 0)
    $$bindings.invert(invert);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${href == null ? `<button${spread([escape_object($$restProps), { class: escape_attribute_value(style) }], {})}>${slots.default ? slots.default({}) : ``}</button>` : `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(style) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const EN_US = {
  bot: {
    description: "Super duper mega ultra cool Discord bot"
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cachedUser;
  user.subscribe((user2) => {
    cachedUser = user2;
  });
  cachedUser = get_store_value(user);
  return `${$$result.head += `<!-- HEAD_svelte-1wbeg2h_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Walty"}"><!-- HEAD_svelte-1wbeg2h_END -->`, ""}


<div class="${"grid text-white relative top-[70%] place-items-center w-full"}"><div class="${"flex flex-col gap-6 items-center"}"><h1 id="${"title"}" class="${"text-5xl"}">Hey, I am <span id="${"name"}" class="${"text-indigo-400"}">Walty</span></h1>
		<p id="${"description"}" class="${"w-fit"}">${escape(EN_US.bot.description)}</p>
		<div class="${"flex w-full flex-col gap-2"}">${cachedUser != null ? `${validate_component(Button, "Button").$$render($$result, { href: "/dashboard" }, {}, {
    default: () => {
      return `Dashboard`;
    }
  })}` : `${validate_component(Button, "Button").$$render($$result, { href: BOT_AUTH_URL }, {}, {
    default: () => {
      return `Login`;
    }
  })}`}
			${validate_component(Button, "Button").$$render($$result, { href: BOT_INVITE_URL, invert: true }, {}, {
    default: () => {
      return `Invite`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};
