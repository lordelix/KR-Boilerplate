import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'
import type { Snippet } from 'svelte'

export type AccordionProps = ComponentBaseProps & {
	children?: Snippet
}
