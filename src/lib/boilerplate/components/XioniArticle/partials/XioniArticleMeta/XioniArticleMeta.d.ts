import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'

export type XioniArticleMetaProps = {
	author?: XioniCMS.Article['author']
	date?: XioniCMS.Article['date']
} & ComponentBaseProps
