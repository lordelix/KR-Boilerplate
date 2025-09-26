<script lang="ts">
	import './Figure.css'
	import type { FigureProps } from './Figure.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		src,
		alt,
		width,
		height,
		caption,
		loading,
		placeholder,

		baseName = 'Figure',
		class: className,
		...restProps
	}: FigureProps = $props()

	// -----------------------------------------------------------------------------------------------

	const style = placeholder ? `background-image:url(${placeholder})` : undefined
</script>

<figure {...restProps} class={[baseName, className]}>
	<img
		class="{baseName}__image"
		{src}
		{alt}
		{width}
		{height}
		{style}
		loading={placeholder ? 'lazy' : loading} />
	{#if caption}
		<figcaption class="{baseName}__caption">
			{caption}
		</figcaption>
	{/if}
</figure>
