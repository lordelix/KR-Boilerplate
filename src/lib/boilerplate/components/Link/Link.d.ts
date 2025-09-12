import type { Snippet } from 'svelte'

export type LinkProps = {
	class?: string | undefined
	children?: Snippet

	baseName?: string
	to?: string
	target?: '_blank' | '_self'
	fontello?: string
	rel?: 'follow' | 'nofollow noopener'
	label?: string

	onClick?: () => void
}
