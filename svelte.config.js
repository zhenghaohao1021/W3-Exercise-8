import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Svelte 5 runes mode for every component in this project
		runes: true
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
