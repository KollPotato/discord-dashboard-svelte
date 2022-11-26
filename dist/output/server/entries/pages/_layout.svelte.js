import { c as create_ssr_component, b as subscribe, g as get_store_value, v as validate_component, e as each, d as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { B as BOT_AUTH_URL, a as BOT_SUPPORT_SERVER_URL, b as BOT_INVITE_URL } from "../../chunks/constants.js";
import { L as Link } from "../../chunks/Link.js";
import { u as user } from "../../chunks/store.js";
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
  return `<nav class="${"z-10 flex w-screen text-white flex-row justify-between h-fit items-center p-6 pt-5"}">${validate_component(Link, "Link").$$render($$result, { pointer: true, href: "/" }, {}, {
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
            pointer: true,
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

        ${cachedUser == null ? `${validate_component(NavBarItem, "NavBarItem").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Link, "Link").$$render(
        $$result,
        {
          pointer: true,
          underline: true,
          href: BOT_AUTH_URL
        },
        {},
        {
          default: () => {
            return `Login`;
          }
        }
      )}`;
    }
  })}` : `<p class="${"select-none"}">${escape(cachedUser.username)}#${escape(cachedUser.discriminator)}</p>
            ${validate_component(NavBarItem, "NavBarItem").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Link, "Link").$$render(
        $$result,
        {
          pointer: true,
          underline: true,
          href: "/logout"
        },
        {},
        {
          default: () => {
            return `Log out`;
          }
        }
      )}`;
    }
  })}`}</ul></nav>`;
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
