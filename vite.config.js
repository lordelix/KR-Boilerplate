import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import autoImport from 'sveltekit-autoimport'

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},
	plugins: [
		autoImport({
			configFile: false,
			components: [
				{
					name: './src/lib/boilerplate/components',
					flat: true
				},
				{
					name: './src/lib/components',
					flat: true
				}
			],
			include: ['./src/**/*.svelte']
		}),
		sveltekit({
			preprocess: vitePreprocess(),
			compilerOptions: {
				runes: true
			},
			adapter: adapter({
				pages: 'htdocs',
				assets: 'htdocs',
				fallback: '200.html',
				strict: false,
				precompress: false
			}),
			alias: {
				$lib: './src/lib',
				$styles: './src/lib/styles/',
				$routes: './src/routes.js',
				$stammdaten: './src/lib/stammdaten.js'
			}
		})
	],
	server: {
		port: 3000
	}
})
