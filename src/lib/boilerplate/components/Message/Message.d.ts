import type { Snippet } from 'svelte'
import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type MessageProps = ComponentBaseProps & {
	type?: 'error' | 'info' | 'success'
	title?: string | number
	inline?: boolean
	tag?: string
	closable?: boolean
	children?: Snippet
	code?: Snippet
	onClose?: () => unknown
}
