import type { HTMLInputAttributes } from 'svelte/elements'

export enum InputType {
	DATE = 'date',
	EMAIL = 'email',
	FILE = 'file',
	NUMBER = 'number',
	TEL = 'tel',
	TEXT = 'text'
}

export type InputProps = ComponentBaseProps & {
	label?: string
	max?: number
	min?: number
	name?: string
	placeholder?: string
	readonly?: boolean
	required?: boolean
	type?: InputType
	value?: string
	error?: string
	multiple?: boolean
}
