import type { XioniCMS } from '#lib/boilerplate/xioni/types.js'

export type XioniArticleTileProps = ComponentBaseProps & {
	article: XioniCMS.Article
	linkText?: string
	tag?: string
	link?: string
}
