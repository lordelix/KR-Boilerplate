import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type XioniArticleMetaProps = {
	author?: XioniCMS.Article['author']
	date?: XioniCMS.Article['date']
} & ComponentBaseProps
