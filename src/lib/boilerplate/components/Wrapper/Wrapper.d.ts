import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'
import type { Snippet } from 'svelte'

export type WrapperProps = {
	tag?: string
	responsive?: boolean
	size?: 'smaller' | 'small' | 'large'
	children: Snippet
} & ComponentBaseProps
