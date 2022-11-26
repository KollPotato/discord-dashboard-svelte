export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')];

export const server_loads = [0];

export const dictionary = {
	"/": [5],
	"/dashboard": [6,[2]],
	"/dashboard/[slug]": [7,[2]],
	"/docs": [8],
	"/login": [~9,[3]],
	"/logout": [~10,[4]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};