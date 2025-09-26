import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { XioniApiErrorResponse } from '$lib/boilerplate/xioni/types'
import type { Snippet } from 'svelte'

export type FormProps = ComponentBaseProps & {
	moduleId: number | string

	// Slots
	children?: Snippet
	done?: Snippet

	// Events
	onSuccess?: Function
	onError?: (error: XioniApiErrorResponse) => any
}
