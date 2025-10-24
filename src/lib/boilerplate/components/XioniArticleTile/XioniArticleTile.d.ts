import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { XioniCMS } from '$lib/boilerplate/xioni/types'

export type XioniArticleTileProps = {
	article: XioniCMS.Article
	linkText?: string
	tag?: string
	link?: string
} & ComponentBaseProps
