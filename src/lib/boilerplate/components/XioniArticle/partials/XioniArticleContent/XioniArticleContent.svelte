<script lang="ts">
	import './XioniArticleContent.scss'

	import type { XioniCMS } from '$lib/boilerplate/xioni/types'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { Figure } from '$lib/boilerplate/components'
	import type { XioniArticleContent } from './XioniArticleContent'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniArticleContent',

		title,
		image,
		text
	}: XioniArticleContent = $props()

	const bem = makeBEM(baseName)
	const figureBem = makeBEM(baseName + 'Image')

	// -----------------------------------------------------------------------------------------------
</script>

{#if title}
	<h3 class={bem.element('title')}>
		{title}
	</h3>
{/if}
{#if text || image}
	<p class={bem.element('text')}>
		{#if image}
			<Figure
				baseName={figureBem.block}
				class={figureBem.modifier(image.align)}
				src={image.src}
				alt={image.description}
				caption={image.description} />
		{/if}
		{#if text}
			{@html text}
		{/if}
	</p>
{/if}
