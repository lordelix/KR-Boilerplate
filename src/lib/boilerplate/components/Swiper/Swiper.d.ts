import type Glide from '@glidejs/glide'
import type { Snippet } from 'svelte'

export type SwiperProps = {
	images?: { src: string; alt: string }[]
	nav?: boolean
	options?: Parial<Glide.Options>
	children?: Snippet
} & ComponentBaseProps
