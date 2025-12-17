import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'
import type { XioniCMS } from '$lib/boilerplate/xioni/types'
import type { Snippet } from 'svelte'

export type XioniEventProps = {
	event: XioniCMS.Event
} & ComponentBaseProps
