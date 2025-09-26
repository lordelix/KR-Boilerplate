import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { XioniCMS } from '$lib/boilerplate/xioni/types'

export type XioniGalleryProps = ComponentBaseProps & {
	gallery: XioniCMS.Gallery
	baseLink?: string
}
