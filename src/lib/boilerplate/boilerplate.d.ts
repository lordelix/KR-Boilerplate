declare global {
	type ComponentBaseProps = {
		baseName?: string
		[key: string]: unknown
	}

	type Prettify<T> = {
		[K in keyof T]: T[K]
	} & {}
}

export {}
