<script lang="ts">
	import './Address.css'

	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { AddressProps } from './Address.d'
	import { uniqueId } from 'lodash-es'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { Fontello, Mail } from '..'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('address-'),
		class: classProp,
		baseName = 'Address',

		name,
		owner,
		street,
		town,
		phone,
		mobile,
		fax,
		email,
		web,

		...restProps
	}: AddressProps = $props()

	const bem = makeBEM(baseName)
</script>

<ol {id} class={[bem.block, classProp]} {...restProps}>
	{#if name}
		<li class={bem.element('name')}>{name}</li>
	{/if}
	{#if owner}
		<li class={bem.element('owner')}>{owner}</li>
	{/if}
	{#if street}
		<li class={bem.element('street')}>{street}</li>
	{/if}
	{#if town}
		<li class={bem.element('town')}>{town}</li>
	{/if}
	{#if phone}
		<li class={bem.element('phone')}>
			<Fontello name="phone" />&nbsp;<a href={'tel:' + phone} aria-label="Telefonnummer anrufen"
				>{phone}</a>
		</li>
	{/if}
	{#if mobile}
		<li class={bem.element('mobile')}>
			<Fontello name="phone" />&nbsp;<a href={'tel:' + mobile} aria-label="Mobilnummer anrufen"
				>{mobile}</a>
		</li>
	{/if}
	{#if fax}
		<li class={bem.element('fax')}>
			<Fontello name="fax" />&nbsp;{fax}
		</li>
	{/if}
	{#if email}
		<li class={bem.element('email')}>
			<Mail to={email} aria-label="E-Mail schreiben" />
		</li>
	{/if}
	{#if web}
		<li class={bem.element('web')}>
			<Fontello name="globe" />&nbsp;{web}
		</li>
	{/if}
</ol>
