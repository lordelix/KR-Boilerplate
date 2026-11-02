import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'

export type AccordionSlideProps = ComponentBaseProps & {
	children?: Snippet
	title: string
	open?: boolean
}
