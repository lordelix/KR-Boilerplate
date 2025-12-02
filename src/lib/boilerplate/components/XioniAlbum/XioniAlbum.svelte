<script lang="ts">
	import './XioniAlbum.scss'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Lightbox from '../Lightbox/Lightbox.svelte'
	import type { XioniAlbumProps } from './XioniAlbum'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniAlbum',

		images = [],
		...restProps
	}: XioniAlbumProps = $props()
</script>

<Lightbox>
	<ul class={[baseName, classProp]} {...restProps}>
		{#each images as { src, srcset, description }}
			<li class="{baseName}__item">
				<img
					class="{baseName}__image"
					src={srcset?.small}
					data-lightbox={src}
					loading="lazy"
					alt={description} />
			</li>
		{/each}
	</ul>
</Lightbox>
