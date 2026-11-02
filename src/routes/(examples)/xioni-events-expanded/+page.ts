import { getEvents } from '#lib/boilerplate/xioni/cms/Events.js'
import xioniLoader from '#lib/boilerplate/xioni/utils/xioniLoader.js'

export const prerender = false

export async function load() {
	const { events } = await xioniLoader(getEvents(1289, { endsAfter: new Date() }))

	return { events }
}
