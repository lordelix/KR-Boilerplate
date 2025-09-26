import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type NavBurgerProps = ComponentBaseProps & {
	active?: boolean
	onClick?: Function
}
