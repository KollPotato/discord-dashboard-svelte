import { c as create_ssr_component, d as escape, v as validate_component, h as add_attribute, e as each, b as subscribe, g as get_store_value } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { g as guilds, u as user } from "../../../chunks/store.js";
import { D as DASHBOARD_BASE_URL } from "../../../chunks/constants.js";
import { L as Link } from "../../../chunks/Link.js";
const permissions = {
  CREATE_INSTANT_INVITE: 1,
  KICK_MEMBERS: 2,
  BAN_MEMBERS: 4,
  ADMINISTRATOR: 8,
  MANAGE_CHANNELS: 16,
  MANAGE_GUILD: 32,
  ADD_REACTIONS: 64,
  VIEW_AUDIT_LOG: 128,
  PRIORITY_SPEAKER: 256,
  STREAM: 512,
  VIEW_CHANNEL: 1024,
  SEND_MESSAGES: 2048,
  SEND_TTS_MESSAGES: 4096,
  MANAGE_MESSAGES: 8192,
  EMBED_LINKS: 16384,
  ATTACH_FILES: 32768,
  READ_MESSAGE_HISTORY: 65536,
  MENTION_EVERYONE: 131072,
  USE_EXTERNAL_EMOJIS: 262144,
  VIEW_GUILD_INSIGHTS: 524288,
  CONNECT: 1048576,
  SPEAK: 2097152,
  MUTE_MEMBERS: 4194304,
  DEAFEN_MEMBERS: 8388608,
  MOVE_MEMBERS: 16777216,
  USE_VAD: 33554432,
  CHANGE_NICKNAME: 67108864,
  MANAGE_NICKNAMES: 134217728,
  MANAGE_ROLES: 268435456,
  MANAGE_WEBHOOKS: 536870912,
  MANAGE_EMOJIS_AND_STICKERS: 1073741824,
  USE_APPLICATION_COMMANDS: 34359738368,
  REQUEST_TO_SPEAK: 4294967296,
  MANAGE_THREADS: 17179869184,
  USE_PUBLIC_THREADS: 34359738368,
  USE_PRIVATE_THREADS: 68719476736,
  USE_EXTERNAL_STICKERS: 137438953472
};
const getPermissions = (permissionsBitField) => {
  let currentPermissions = [];
  permissionsBitField = Number(permissionsBitField);
  const permissionUpper = Math.floor(permissionsBitField / 4294967296);
  const permissionLower = Math.floor(permissionsBitField % 4294967296);
  for (const key in permissions) {
    if (permissions[key] >= 4294967296 && permissionUpper & Math.floor(permissions[key] / 4294967296) || permissions[key] < 4294967296 && permissionLower & permissions[key]) {
      currentPermissions.push(key);
    } else {
      continue;
    }
  }
  return currentPermissions;
};
const ToolTip_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tooltip-box.svelte-1ica9i0{display:inline-block;width:-moz-fit-content;width:fit-content\n}.tooltip.svelte-1ica9i0{position:absolute;display:block;width:auto;min-width:-moz-max-content;min-width:max-content;transform-origin:bottom;--tw-scale-x:0;--tw-scale-y:0;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(24 25 28 / var(--tw-bg-opacity));padding:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:75ms\n}",
  map: null
};
const ToolTip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { position = "top" } = $$props;
  const positionMap = {
    top: "-mt-16",
    left: "",
    right: "",
    bottom: ""
  };
  const positionStyle = positionMap[position];
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css);
  return `<div class="${"tooltip-box group svelte-1ica9i0"}">${slots.default ? slots.default({}) : ``}
    <div class="${"tooltip group-hover:scale-100 " + escape(positionStyle, true) + " svelte-1ica9i0"}">${escape(text)}</div>
</div>`;
});
const Guild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guild } = $$props;
  let iconURL = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=40`;
  let guildName = guild.name;
  if (guild.icon == null) {
    iconURL = `${DASHBOARD_BASE_URL}/assets/discord.png`;
  }
  if ($$props.guild === void 0 && $$bindings.guild && guild !== void 0)
    $$bindings.guild(guild);
  {
    if (guild.name.length >= 18) {
      guildName = guild.name.slice(0, 14) + "...";
    }
  }
  return `${validate_component(Link, "Link").$$render($$result, { href: "/dashboard/" + guild.id }, {}, {
    default: () => {
      return `<div class="${"text-white select-none text-ellipsis w-60 p-4 rounded-xl items-center gap-3 bg-[#282930] flex flex-row"}"><img class="${"rounded-xl w-10 h-10"}"${add_attribute("src", iconURL, 0)} alt="${"guild icon"}">
        <div class="${"flex flex-col"}">${validate_component(ToolTip, "ToolTip").$$render($$result, { position: "top", text: guild.name }, {}, {
        default: () => {
          return `<p>${escape(guildName)}</p>`;
        }
      })}
            <p class="${"text-[#60626D] font-medium text-sm"}">${escape(guild.id)}</p></div></div>`;
    }
  })}`;
});
const Guilds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guilds: guilds2 } = $$props;
  let { columns = 4 } = $$props;
  let filteredGuilds = [];
  if ($$props.guilds === void 0 && $$bindings.guilds && guilds2 !== void 0)
    $$bindings.guilds(guilds2);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  {
    guilds2.forEach((guild) => {
      if (getPermissions(guild.permissions).includes("ADMINISTRATOR")) {
        filteredGuilds.push(guild);
      }
    });
  }
  return `<div class="${"flex flex-col gap-2"}">${each(filteredGuilds, (_, i) => {
    return `${i % columns === 0 ? `<div class="${"flex flex-row gap-2"}">${each(Array(columns), (_2, j) => {
      return `${filteredGuilds[i / columns * columns + j] ? `${validate_component(Guild, "Guild").$$render(
        $$result,
        {
          guild: filteredGuilds[i / columns * columns + j]
        },
        {},
        {}
      )}` : ``}`;
    })}
            </div>` : ``}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cachedGuilds;
  let cachedUser;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const prerender = false;
  guilds.subscribe((guilds2) => {
    cachedGuilds = guilds2;
  });
  user.subscribe((user2) => {
    cachedUser = user2;
  });
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  cachedGuilds = get_store_value(guilds);
  cachedUser = get_store_value(user);
  $page.data.session;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-bmju4y_START -->${$$result.title = `<title>Dashboard</title>`, ""}<meta name="${"description"}" content="${"Walty"}"><!-- HEAD_svelte-bmju4y_END -->`, ""}

<div class="${"relative w-full justify-center top-[50px] flex flex-col items-center gap-8"}">${cachedGuilds != null ? `${cachedUser != null ? `<div class="${"flex flex-col gap-4 text-white items-center"}"><h1 class="${"text-white text-4xl"}">Hey, <span class="${"text-indigo-500"}">${escape(cachedUser.username)}</span>!
			</h1>
			<p>Select a guild to continue</p></div>` : ``}
		${validate_component(Guilds, "Guilds").$$render($$result, { guilds: cachedGuilds }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
