export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

export const server_loads = [0];

export const dictionary = {
	"/": [4],
	"/dashboard": [~5,[2]],
	"/docs": [6],
	"/logout": [~7,[3]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};