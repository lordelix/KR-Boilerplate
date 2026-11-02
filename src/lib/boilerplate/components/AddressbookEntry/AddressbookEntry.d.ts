import type { ComponentBaseProps } from '#lib/boilerplate/boilerplate.js'
import type { XioniCMS } from '#lib/boilerplate/xioni/types.js'

export type AddressbookEntryProps = ComponentBaseProps & {
	tag?: string
	entry: XioniCMS.AddressbookEntry
}
