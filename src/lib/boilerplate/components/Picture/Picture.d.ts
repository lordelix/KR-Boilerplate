type Source = [string, number, number] | [string, number] | string

export type PictureProps = {
	src: Source
	tablet?: Source
	desktop?: Source
	widescreen?: Source
	align?: 'left' | 'right'
	placeholder?: string
} & ComponentBaseProps
