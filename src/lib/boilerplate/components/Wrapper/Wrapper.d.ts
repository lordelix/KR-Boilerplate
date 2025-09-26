import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { Snippet } from 'svelte'

export type WrapperProps = ComponentBaseProps & {
	tag?: string
	responsive?: boolean
	size?: 'smaller' | 'small' | 'large'
	children: Snippet
}
