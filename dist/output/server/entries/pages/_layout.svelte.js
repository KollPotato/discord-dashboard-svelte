import { c as create_ssr_component, e as escape, b as add_attribute, d as subscribe, g as get_store_value, v as validate_component, f as each } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { B as BOT_AUTH_URL, a as BOT_SUPPORT_SERVER_URL, b as BOT_INVITE_URL } from "../../chunks/constants.js";
import { u as user } from "../../chunks/store.js";
const Link_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.link.svelte-wd3t0q{display:inline-block;position:relative}.link.svelte-wd3t0q:after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1.5px;bottom:0;left:0;background-color:#FFF;transform-origin:bottom right;transition:transform 0.25s ease-out}.link.wow-underline.text-primary-400.svelte-wd3t0q:after{background-color:rgb(125 130 255)}.link.wow-underline.svelte-wd3t0q:hover:after{transform:scaleX(1);transform-origin:bottom left}',
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { underline = false } = $$props;
  let { active = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `<a class="${"link transition-colors " + escape(underline ? "wow-underline" : "", true) + " " + escape(active ? "text-primary-400" : "", true) + " h-fit svelte-wd3t0q"}"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}
</a>`;
});
const NavBarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li class="${"h-fit"}">${slots.default ? slots.default({}) : ``}</li>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cachedUser;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    { text: "Dashboard", href: "/dashboard" },
    { text: "Docs", href: "/docs" },
    {
      text: "Discord",
      href: BOT_SUPPORT_SERVER_URL
    },
    { text: "Invite", href: BOT_INVITE_URL }
  ];
  user.subscribe((user2) => {
    cachedUser = user2;
  });
  cachedUser = get_store_value(user);
  $$unsubscribe_page();
  return `<nav class="${"z-10 flex w-screen text-white flex-row justify-between h-fit items-center p-6 pt-5"}">${validate_component(Link, "Link").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `<img class="${"w-24"}" src="${"/assets/logo.svg"}" alt="${"walty logo"}">`;
    }
  })}
    <ul class="${"flex flex-row gap-4 h-fit"}">${each(links, (link) => {
    return `${validate_component(NavBarItem, "NavBarItem").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Link, "Link").$$render(
          $$result,
          {
            underline: true,
            active: $page.url.pathname == link.href,
            href: link.href
          },
          {},
          {
            default: () => {
              return `${escape(link.text)}`;
            }
          }
        )}
            `;
      }
    })}`;
  })}
        ${validate_component(NavBarItem, "NavBarItem").$$render($$result, {}, {}, {
    default: () => {
      return `${cachedUser == null ? `${validate_component(Link, "Link").$$render($$result, { href: BOT_AUTH_URL }, {}, {
        default: () => {
          return `Login`;
        }
      })}` : `<p class="${"select-none"}">${escape(cachedUser.username)}#${escape(cachedUser.discriminator)}</p>`}`;
    }
  })}</ul></nav>`;
});
const style = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".body.svelte-rv2fpx{display:flex;flex-direction:row}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app flex flex-col w-full h-full"}">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}
	<main class="${"body w-full p-4 svelte-rv2fpx"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
