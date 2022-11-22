export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

export const server_loads = [0];

export const dictionary = {
	"/": [3],
	"/dashboard": [~4,[2]],
	"/docs": [5]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};