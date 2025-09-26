<script lang="ts">
	import './OpeningHours.css'

	import type { OpeningHoursProps } from './OpeningHours.d'
	import OpeningHours from '$lib/boilerplate/utils/OpeningHours'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Modal from '../Modal/Modal.svelte'
	import { uniqueId } from 'lodash-es'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('opening-hours-'),
		baseName = 'OpeningHours',
		class: classProp,

		hours,
		signOpen,
		signClosed,
		interactive,
		...restProps
	}: OpeningHoursProps = $props()

	// -----------------------------------------------------------------------------------------------

	// svelte-ignore non_reactive_update
	let modal: Modal // Ref

	const { openNow, nextChange, distanceToNextChange, table } = new OpeningHours(hours)

	const signText = $derived(
		openNow ? `Wir schließen ${distanceToNextChange}` : `Wir öffnen ${distanceToNextChange}`
	)
</script>

<div
	{...restProps}
	class={[
		baseName,
		classProp,
		{ [baseName + '--open']: openNow, [baseName + '--closed']: !openNow }
	]}>
	{#if openNow && signOpen}
		<img class={`${baseName}__sign`} src={signOpen} alt="Wir haben geöffnet" />
	{:else if !openNow && signClosed}
		<img class={`${baseName}__sign`} src={signClosed} alt="Wir haben geschlossen" />
	{/if}

	<span class={`${baseName}__distance`}>{signText}</span>
	<span class={`${baseName}__next-change`}>{nextChange}</span>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	{#if interactive}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span class={`${baseName}__trigger`} onclick={() => modal.open()}>Öffnungszeiten</span>
	{/if}
</div>

{#if interactive}
	<Modal bind:this={modal} class={baseName + '__modal'} title="Unsere Öffnungszeiten">
		<div class={baseName + '__modal-body'}>
			{#each table as day}
				{day} <br />
			{/each}
		</div>
	</Modal>
{/if}
