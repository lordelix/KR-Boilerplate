import type { XioniCMS } from '$lib/boilerplate/xioni/types'

export type XioniArticleTileProps = ComponentBaseProps & {
	article: XioniCMS.Article
	linkText?: string
	tag?: string
	link?: string
}
