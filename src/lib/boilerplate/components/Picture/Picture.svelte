<script lang="ts">
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { PictureProps } from './Picture'
	import './Picture.css'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		id,
		class: classProp,
		baseName = 'Picture',

		src,
		tablet,
		desktop,
		widescreen,
		align,
		placeholder,

		...restProps
	}: PictureProps = $props()

	const bem = makeBEM(baseName)

	// -----------------------------------------------------------------------------------------------

	const style = placeholder ? `background-image:url(${placeholder})` : undefined

	function extractProps(src: PictureProps['src']) {
		if (typeof src === 'string') {
			return {
				srcset: src
			}
		}

		return {
			srcset: src[0],
			width: src[1],
			height: src[2] || 'auto'
		}
	}

	const className = $derived([baseName, classProp, !align || bem.modifier(align)])
</script>

<picture>
	{#if widescreen}
		<source {...extractProps(widescreen)} media="(min-width: 1441px)" />
	{/if}
	{#if desktop}
		<source {...extractProps(desktop)} media="(min-width: 1025px)" />
	{/if}
	{#if tablet}
		<source {...extractProps(tablet)} media="(min-width: 621px)" />
	{/if}
	<img {...extractProps(src)} {style} {...restProps} class={className} />
</picture>
