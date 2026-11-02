import { getMenuCard } from '#lib/boilerplate/xioni/cms/MenuCards.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load() {
	const { menuCard } = await xioniLoader(getMenuCard(1540))

	return { menuCard }
}
