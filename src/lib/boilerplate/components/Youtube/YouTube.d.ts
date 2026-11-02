import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'

export type YouTubeProps = {
	videoId: string
	allow?: Array<'autoplay' | 'clipboard-write' | 'encrypted-media' | 'picture-in-picture'>
} & ComponentBaseProps
