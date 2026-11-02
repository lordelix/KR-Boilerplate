import { getGallery } from '#lib/boilerplate/xioni/cms/Galleries.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load() {
	const { albums } = await xioniLoader(getGallery(1453))

	return { gallery: albums }
}
