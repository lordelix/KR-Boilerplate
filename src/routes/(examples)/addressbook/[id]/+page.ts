import { getEntry } from '#lib/boilerplate/xioni/cms/Addressbook.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load({ params }) {
	const { entry } = await xioniLoader(getEntry(1466, +params.id))

	return { entry }
}
