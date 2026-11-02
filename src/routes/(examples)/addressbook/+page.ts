import { getEntries } from '#lib/boilerplate/xioni/cms/Addressbook.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export const load = async () => {
	const { entries } = await xioniLoader(getEntries(1466))

	return { entries }
}
