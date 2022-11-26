import { c as create_ssr_component, d as escape, h as add_attribute } from "./index.js";
const Link_svelte_svelte_type_style_lang = "";
const css = {
  code: '.link.svelte-1lrl40a{display:inline-block;position:relative}.link.svelte-1lrl40a:after{content:"";position:absolute;width:100%;transform:scaleX(0);height:1.5px;bottom:0;left:0;background-color:#FFF;transform-origin:bottom right;transition:transform 0.25s ease-out}.link.wow-underline.active.svelte-1lrl40a:after{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.link.wow-underline.svelte-1lrl40a:hover:after{transform:scaleX(1);transform-origin:bottom left}',
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { underline = false } = $$props;
  let { active = false } = $$props;
  let { pointer = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.pointer === void 0 && $$bindings.pointer && pointer !== void 0)
    $$bindings.pointer(pointer);
  $$result.css.add(css);
  return `<a class="${"link transition-colors " + escape(pointer ? "cursor-pointer" : "cursor-default", true) + " " + escape(underline ? "wow-underline" : "", true) + " " + escape(active ? "text-indigo-400 active" : "", true) + " h-fit svelte-1lrl40a"}"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}
</a>`;
});
export {
  Link as L
};
