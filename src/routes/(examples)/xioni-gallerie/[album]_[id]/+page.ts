import { getAlbum } from '#lib/boilerplate/xioni/cms/Galleries.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load({ params }) {
	const { album } = await xioniLoader(getAlbum(1453, +params.id))

	return { album }
}
