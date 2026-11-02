import { getEvent } from '#lib/boilerplate/xioni/cms/Events.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load({ params }) {
	const { event } = await xioniLoader(getEvent(+params.module, +params.id))

	return { event }
}
