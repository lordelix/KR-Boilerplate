<script lang="ts">
	import './AddressbookEntry.scss'
	import type { AddressbookEntryProps } from './AddressbookEntry.d'
	import { Address } from '..'
	import { uniqueId } from 'lodash-es'
	import mapAddressbookEntryToAddress from '$lib/boilerplate/utils/mapAddressbookEntryToAddress'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('addressbook-entry-'),
		class: classProp,
		baseName = 'AddressbookEntry',

		tag = 'div',
		entry,

		...restProps
	}: AddressbookEntryProps = $props()
</script>

<svelte:element this={tag} {id} class={[baseName, classProp]} {...restProps}>
	<div class="{baseName}__title">
		{entry.title}
	</div>
	<div class="{baseName}__subtitle">
		{entry.subtitle}
	</div>
	<div class="{baseName}__description">
		{@html entry.description}
	</div>
	<Address {...mapAddressbookEntryToAddress(entry)} class="{baseName}__address" />
</svelte:element>
