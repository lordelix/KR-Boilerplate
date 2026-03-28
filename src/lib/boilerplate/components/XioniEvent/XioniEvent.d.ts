import type { XioniCMS } from '$lib/boilerplate/xioni/types'

export type XioniEventProps = ComponentBaseProps & {
	event: XioniCMS.Event
}
