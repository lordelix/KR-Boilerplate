<script lang="ts">
	import './XioniEventTile.scss'

	import { format } from '$lib/boilerplate/utils/formatDate'
	import { goto } from '$app/navigation'
	import { LOCALE } from '$lib/boilerplate/constants'
	import { page } from '$app/state'

	import type { XioniEventTileProps } from './XioniEventTile.d'
	import type { XioniCMS } from '$lib/boilerplate/xioni/types'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Link from '../Link/Link.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id,
		class: className,
		baseName = 'XioniEventTile',

		event,
		linkText = 'Mehr erfahren',
		tag = 'div',
		link = `${$page.url.pathname}${event.slug}_${event.id}/`,
		...restProps
	}: XioniEventTileProps = $props()

	// -----------------------------------------------------------------------------------------------

	const { title, image, teaser, starts, ends, duration, organizer, tags } = event

	function tagsToString(tags: XioniCMS.Event['tags']) {
		return tags?.map(tag => tag.id).join(',')
	}
</script>

<svelte:element
	this={tag}
	itemscope
	data-tags={tagsToString(tags)}
	itemtype="https://schema.org/Event"
	{...restProps}
	class={[baseName, className]}>
	<meta itemprop="startDate" content={format(starts, 'yyyy-MM-dd')} />
	<meta itemprop="endDate" content={format(ends, 'yyyy-MM-dd')} />
	<meta itemprop="organizer" content={organizer} />
	{#if image}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			itemprop="image"
			class="{baseName}__image"
			src={image.srcset.small || image.src}
			alt={image.description || title}
			onclick={() => {
				if (link) goto(link)
			}} />
	{/if}
	<h2 itemprop="name" class="{baseName}__title">
		{title}
	</h2>
	<h3 class="{baseName}__date">
		<time datetime={starts.toLocaleDateString(LOCALE)}>
			{duration}
		</time>
	</h3>
	{#if teaser}
		<p itemprop="description" class="{baseName}__teaser">
			{@html teaser}
		</p>
	{/if}
	{#if link}
		<Link to={link} class="{baseName}__link $row-reverse" fontello="angle-right">
			{linkText}
		</Link>
	{/if}
</svelte:element>
