import type { HTMLAttributes } from 'svelte/elements'

export type RadioProps = ComponentBaseProps & {
	checked?: boolean
	value: string
	group?: string
	label?: string
	name?: string
	required?: boolean
}
