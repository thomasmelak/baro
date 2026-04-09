import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { relative, sep } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		},
		fragments: 'html',
		css: 'external'
	},
	vitePlugin: {
		prebundleSvelteLibraries: true
	},
	preprocess: vitePreprocess(),
	kit: {
		router: {
			type: 'pathname'
		},
		output: {
			bundleStrategy: 'single'
		},

		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
