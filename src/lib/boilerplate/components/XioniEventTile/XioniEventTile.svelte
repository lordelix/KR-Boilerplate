<script lang="ts">
	import './XioniEventTile.scss'

	import { formatISO } from 'date-fns'
	import { goto } from '$app/navigation'
	import { Link } from '..'
	import { page } from '$app/state'
	import type { XioniCMS } from '$lib/boilerplate/xioni/types'
	import type { XioniEventTileProps } from './XioniEventTile.d'

	let {
		class: className,
		baseName = 'XioniEventTile',
		event,
		linkText = 'Mehr erfahren',
		tag = 'div',
		link = `${page.url.pathname}${event.slug}_${event.id}/`,
		children,
		...restProps
	}: XioniEventTileProps = $props()

	// -----------------------------------------------------------------------------------------------

	const { title, image, teaser, starts, ends, duration, organizer, address, tags } = $derived(event)

	function tagsToString(tags: XioniCMS.Event['tags']) {
		return tags?.map(tag => tag.id).join(',')
	}
</script>

<svelte:element
	this={tag}
	itemscope
	data-tags={tagsToString(tags)}
	itemtype="https://schema.org/Event"
	class={[baseName, className]}
	{...restProps}>
	<meta itemprop="startDate" content={formatISO(starts)} />
	<meta itemprop="endDate" content={formatISO(ends)} />
	{#if organizer}
		<div itemprop="organizer" itemscope itemtype="https://schema.org/Organization">
			<meta itemprop="name" content={organizer} />
		</div>
	{/if}
	{#if address}
		<div itemprop="location" itemscope itemtype="https://schema.org/Place">
			<meta itemprop="address" content={address} />
		</div>
	{/if}

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
		<time datetime={formatISO(starts)}>
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
	{@render children?.()}
</svelte:element>
