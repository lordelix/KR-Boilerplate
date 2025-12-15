import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'

export type WrapperProps = {
	tag?: string
	responsive?: boolean
	size?: 'smaller' | 'small' | 'large'
	children?: Snippet
} & ComponentBaseProps &
	HTMLAttributes<HTMLElement>
