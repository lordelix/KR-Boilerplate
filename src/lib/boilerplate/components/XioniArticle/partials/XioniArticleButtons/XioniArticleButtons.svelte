<script lang="ts">
	import type { XioniArticleButtonsProps } from './XioniArticleButtons'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { Button, ButtonRow } from '$lib/boilerplate/components'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniArticleButtons',

		pdf,
		website
	}: XioniArticleButtonsProps = $props()

	const bem = $derived(makeBEM(baseName))
	const pdfTitle = $derived(pdf?.title?.trim() || 'Weitere Informationen')

	// -----------------------------------------------------------------------------------------------
</script>

<ButtonRow class={[bem.block, classProp]}>
	{#if pdf}
		<Button to={pdf.src} class={bem.element('pdf')} fontello="file-pdf">
			{pdfTitle}
		</Button>
	{/if}

	{#if website}
		<Button to={website.toString()} class={bem.element('website')} fontello="link">
			{website.host}
		</Button>
	{/if}
</ButtonRow>
