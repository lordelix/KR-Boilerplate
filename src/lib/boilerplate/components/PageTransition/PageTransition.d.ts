import type { Snippet } from 'svelte'

export type PageTransitionProps = {
	tag?: string
	baseName?: string
	class?: string
	children: Snippet
}
