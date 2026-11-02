import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'

export type TextareaProps = {
	label?: string
	name: string
	placeholder?: string
	required?: boolean
	rows?: number | string
	value: string
} & ComponentBaseProps
