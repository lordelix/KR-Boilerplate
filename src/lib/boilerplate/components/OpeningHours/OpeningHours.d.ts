import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { HTMLAttributes } from 'svelte/elements'

export type OpeningHoursProps = ComponentBaseProps & {
	hours: string
	signOpen?: string
	signClosed?: string
	interactive?: boolean
}
