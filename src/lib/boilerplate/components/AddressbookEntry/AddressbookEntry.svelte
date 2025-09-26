<script lang="ts">
	import './AddressbookEntry.scss'
	import type { AddressbookEntryProps } from './AddressbookEntry'
	import { Address } from '..'
	import { uniqueId } from 'lodash-es'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('addressbook-entry-'),
		class: classProp,

		tag = 'div',
		baseName = 'AddressbookEntry',
		entry
	}: AddressbookEntryProps = $props()

	let address = $derived({
		street: entry.address || undefined,
		town: entry.city || undefined,
		phone: entry.phone || undefined,
		mobile: entry.mobile || undefined,
		fax: entry.fax || undefined,
		email: entry.email || undefined,
		web: entry.web ? entry.web.toString() : undefined
	})

	let hasAddress = $derived(Object.entries(address).some(e => !!e))
</script>

<svelte:element this={tag} {id} class={[baseName, classProp]}>
	<div class="{baseName}__title">
		{entry.title}
	</div>
	<div class="{baseName}__subtitle">
		{entry.subtitle}
	</div>
	<div class="{baseName}__description">
		{@html entry.description}
	</div>
	{#if hasAddress}
		<Address {...address} class="{baseName}__address">
			<li class="Address__room">
				{entry.room}
			</li>
		</Address>
	{/if}
</svelte:element>
