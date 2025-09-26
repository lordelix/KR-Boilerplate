import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { Snippet } from 'svelte'

export type XioniEventProps = ComponentBaseProps & {
	event: XioniCMS.Event
	children?: Snippet
	onRegistrationClick?: () => void
}
