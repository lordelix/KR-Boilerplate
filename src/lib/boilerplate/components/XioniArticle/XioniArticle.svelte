<script lang="ts">
	import './XioniArticle.scss'
	import { formatISO } from 'date-fns'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Figure from '../Figure/Figure.svelte'
	import Buttons from './partials/XioniArticleButtons/XioniArticleButtons.svelte'
	import Meta from './partials/XioniArticleMeta/XioniArticleMeta.svelte'
	import Content from './partials/XioniArticleContent/XioniArticleContent.svelte'
	import type { XioniArticleProps } from './XioniArticle'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	const {
		class: classProp,
		baseName = 'XioniArticle',
		article,
		children,
		...restProps
	}: XioniArticleProps = $props()

	const { author, date, content, image, pdf, teaser, title, website } = $derived(article)
</script>

<article
	itemscope
	itemtype="https://schema.org/Article"
	class={[baseName, classProp]}
	{...restProps}>
	{#if image}
		<meta itemprop="image" content={image.src} />
		<Figure
			baseName="{baseName}Image"
			src={image.src}
			caption={image.description || undefined}
			alt={title} />
	{/if}
	<h1 itemprop="headline" class="{baseName}__title">
		{title}
	</h1>
	{#if author}
		<meta itemprop="author" content={author} />
	{/if}
	{#if date}
		<meta itemprop="datePublished" content={formatISO(date)} />
	{/if}
	{#if author || date}
		<Meta {author} {date} />
	{/if}
	<p itemprop="description" class="{baseName}__teaser">
		{@html teaser}
	</p>
	{#if content?.length}
		<div class="{baseName}__content">
			{#each content as { text, title, image }, i (i)}
				<Content {text} {title} {image} />
			{/each}
		</div>
	{/if}
	{#if pdf || website}
		<Buttons {pdf} {website} />
	{/if}
	{@render children?.()}
</article>
