import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type XioniArticleButtonsProps = ComponentBaseProps & {
	pdf?: XioniCMS.Article['pdf']
	website?: XioniCMS.Article['website']
}
