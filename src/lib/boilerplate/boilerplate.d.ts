declare global {
	type ComponentBaseProps = {
		baseName?: string
		[key: string]: any
	}

	type Prettify<T> = {
		[K in keyof T]: T[K]
	} & {}
}

export {}
