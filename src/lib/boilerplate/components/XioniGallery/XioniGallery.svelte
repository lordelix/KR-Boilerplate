<script lang="ts">
	import { page } from '$app/stores'

	import type { XioniGalleryProps } from './XioniGallery.d'

	// --- Props -------------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniGallery',

		gallery,
		baseLink = $page.url.pathname,

		...restProps
	}: XioniGalleryProps = $props()

	// -----------------------------------------------------------------------------------------------

	function makeLink(slug: string, id: number | string) {
		return baseLink + slug + '_' + id
	}
</script>

<ul class={[baseName, classProp]} {...restProps}>
	{#each gallery as { id, title, slug }}
		<li class="{baseName}__item">
			<a class="{baseName}__item-link" href={makeLink(slug, id)}>{title}</a>
		</li>
	{/each}
</ul>
