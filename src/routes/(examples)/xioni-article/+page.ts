import { getArticles } from '#lib/boilerplate/xioni/cms/Articles.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load() {
	const { articles, meta } = await xioniLoader(getArticles(1383))

	return {
		articles,
		articlesMeta: meta
	}
}
