<script lang="ts">
	import './XioniArticleTile.scss'
	import { format } from '$lib/boilerplate/utils/formatDate'
	import { formatISO } from 'date-fns'
	import { goto } from '$app/navigation'
	import { page } from '$app/state'
	import Fontello from '../Fontello/Fontello.svelte'
	import Link from '../Link/Link.svelte'
	import type { XioniArticleTileProps } from './XioniArticleTile'

	let {
		baseName = 'XioniArticleTile',
		class: classProp,
		article,
		linkText = 'Weiterlesen',
		tag = 'div',
		link = `${page.url.pathname}${article.slug}_${article.id}`,
		children,
		...restProps
	}: XioniArticleTileProps = $props()

	const { title, date, image, teaser, author } = $derived(article)
</script>

<svelte:element
	this={tag}
	itemscope
	itemtype="https://schema.org/Article"
	class={[baseName, classProp]}
	{...restProps}>
	{#if image}
		<meta itemprop="image" content={image.src} />
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			class="{baseName}__image"
			class:$pointer={!!link}
			src={image.srcset?.small}
			alt={image.description}
			onclick={() => {
				if (link) goto(link)
			}} />
	{/if}
	<h2 itemprop="headline" class="{baseName}__title">
		{title}
	</h2>
	{#if author}
		<div itemprop="author" itemscope itemtype="https://schema.org/Person">
			<meta itemprop="name" content={author} />
		</div>
	{/if}
	{#if author || date}
		<ul class="{baseName}__metadata">
			{#if author}
				<li class="{baseName}__author">
					<Fontello name="user" />
					Von {author}
				</li>
			{/if}
			{#if date}
				<li class="{baseName}__date">
					<Fontello name="calendar-empty" />
					<time itemprop="datePublished" datetime={formatISO(date)}>
						{format(date, 'd. LLLL y')}
					</time>
				</li>
			{/if}
		</ul>
	{/if}
	<p itemprop="description" class="{baseName}__teaser">
		{@html teaser}
	</p>
	{#if link}
		<Link to={link} class="{baseName}__link $flex $pointer $row-reverse" fontello="angle-right">
			{linkText}
		</Link>
	{/if}
	{@render children?.()}
</svelte:element>
