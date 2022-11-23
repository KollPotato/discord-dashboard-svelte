import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component, d as subscribe, g as get_store_value } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { g as guilds, u as user } from "../../../chunks/store.js";
const Guild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guild } = $$props;
  let iconURL = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=40`;
  if (guild.name.length > 18) {
    guild.name = guild.name.slice(0, 14) + "...";
  }
  if ($$props.guild === void 0 && $$bindings.guild && guild !== void 0)
    $$bindings.guild(guild);
  return `<div class="${"text-white text-ellipsis w-60 p-4 rounded-xl items-center gap-3 bg-[#282930] flex flex-row"}"><img class="${"rounded-xl w-10 h-10"}"${add_attribute("src", iconURL, 0)} alt="${"guild icon"}">
    <div class="${"flex flex-col"}"><p class="${""}">${escape(guild.name)}</p>
        <p class="${"text-[#60626D] font-medium text-sm"}">${escape(guild.id)}</p></div></div>`;
});
const Guilds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guilds: guilds2 } = $$props;
  let { columns = 4 } = $$props;
  if ($$props.guilds === void 0 && $$bindings.guilds && guilds2 !== void 0)
    $$bindings.guilds(guilds2);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  return `<div class="${"flex flex-col gap-2"}">${each(guilds2, (_, i) => {
    return `${i % columns === 0 ? `<div class="${"flex flex-row gap-2"}">${each(Array(columns), (_2, j) => {
      return `${guilds2[i / columns * columns + j] ? `${validate_component(Guild, "Guild").$$render($$result, { guild: guilds2[i / columns * columns + j] }, {}, {})}` : ``}`;
    })}
            </div>` : ``}`;
  })}</div>`;
});
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cachedGuilds;
  let cachedUser;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
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
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-bmju4y_START -->${$$result.title = `<title>Dashboard</title>`, ""}<meta name="${"description"}" content="${"Walty"}"><!-- HEAD_svelte-bmju4y_END -->`, ""}

<div class="${"relative w-full justify-center top-[50px] flex flex-col items-center gap-8"}">${cachedGuilds != null ? `${cachedUser != null ? `<h1 class="${"text-white text-4xl"}">Hey, ${escape(cachedUser.username)}!</h1>` : ``}
		${validate_component(Guilds, "Guilds").$$render($$result, { guilds: cachedGuilds }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
