import type { XioniCMS } from '#lib/boilerplate/xioni/types.js'

export type XioniEventProps = ComponentBaseProps & {
	event: XioniCMS.Event
}
