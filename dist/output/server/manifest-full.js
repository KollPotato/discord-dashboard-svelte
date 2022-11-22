export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/logo.svg","favicon.png","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-754ffec4.js","imports":["_app/immutable/start-754ffec4.js","_app/immutable/chunks/index-e8ce05bb.js","_app/immutable/chunks/singletons-adb40031.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
