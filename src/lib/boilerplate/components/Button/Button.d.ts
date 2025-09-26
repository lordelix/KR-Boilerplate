import type { FontelloProps } from '../Fontello/Fontello'

export type ButtonProps = ComponentBaseProps & {
	children?: Snippet

	onClick?: Function

	variant?: 'primary' | 'secondary'
	disabled?: boolean
	fontello?: FontelloProps['name']
	isLoading?: boolean
	rel?: 'follow' | 'nofollow noopener'
	target?: '_blank'
	to?: string
}
