import type { ComponentBaseProps } from '../../boilerplate.d'
import type { Snippet } from 'svelte'

export type MessageProps = ComponentBaseProps & {
	type?: 'error' | 'info' | 'success'
	title?: string | number
	inline?: boolean
	tag?: string
	closable?: boolean
	onclose?: () => void
	children?: Snippet
	code?: Snippet
}
