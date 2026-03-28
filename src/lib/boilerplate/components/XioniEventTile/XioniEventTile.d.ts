import type { XioniCMS } from '$lib/boilerplate/xioni/types'

export type XioniEventTileProps = ComponentBaseProps & {
	event: XioniCMS.Event
	linkText?: string
	tag?: string
	link?: string
}
