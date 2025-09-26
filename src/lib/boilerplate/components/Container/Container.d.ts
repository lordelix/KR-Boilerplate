import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type ContainerProps = ComponentBaseProps & {
	tag?: string
	children: Snippet
}
