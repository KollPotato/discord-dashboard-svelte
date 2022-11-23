import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/dashboard/_page.svelte-9e9b9f0f.js';
export { server };
export const imports = ["_app/immutable/components/pages/dashboard/_page.svelte-9e9b9f0f.js","_app/immutable/chunks/index-e8ce05bb.js","_app/immutable/chunks/stores-aa7a9cac.js","_app/immutable/chunks/singletons-7e2e0964.js","_app/immutable/chunks/index-b9bbb9a2.js","_app/immutable/chunks/store-c4ebe61c.js"];
export const stylesheets = ["_app/immutable/assets/_page-b6f71929.css"];
export const fonts = [];
