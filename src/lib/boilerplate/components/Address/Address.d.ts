import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type AddressProps = ComponentBaseProps & {
	children?: Snippet

	name?: string
	owner?: string
	street?: string
	town?: string
	phone?: string
	mobile?: string
	fax?: string
	email?: string
	web?: string
}
