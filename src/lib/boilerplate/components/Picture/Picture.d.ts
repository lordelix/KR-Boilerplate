type Source = [string, number, number] | [string, number] | string

export type PictureProps = {
	src: Source
	alt?: string
	tablet?: Source
	desktop?: Source
	widescreen?: Source
	align?: 'left' | 'right'
	placeholder?: string
} & ComponentBaseProps
