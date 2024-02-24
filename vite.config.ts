import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(__dirname, 'dist', '~partytown'),
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
