import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type CheckboxProps = ComponentBaseProps & {
	checked?: boolean
	label?: string
	name?: string
	required?: boolean
	value?: string
	onChange?: () => any
}
