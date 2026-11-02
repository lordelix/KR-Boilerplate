import { getCategories } from '#lib/boilerplate/xioni/cms/Addressbook.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export const load = async () => {
	const { categories } = await xioniLoader(getCategories(1320, { parts: ['entries'] }))

	return { categories }
}
