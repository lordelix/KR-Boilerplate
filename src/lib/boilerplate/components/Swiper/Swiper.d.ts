import type Glide from '@glidejs/glide'
import type { Snippet } from 'svelte'

export type SwiperProps = {
	images?: { src: string; alt: string }[]
	nav?: boolean
	options?: Prettify<Glide.Options>
	children?: Snippet
} & ComponentBaseProps
