<script lang="ts">
	import './XioniArticleMeta.css'

	import { format } from 'date-fns'
	import { de } from 'date-fns/locale'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { Fontello } from '$lib/boilerplate/components'
	import type { XioniArticleMetaProps } from './XioniArticleMeta'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniArticleMeta',

		author,
		date,

		...restProps
	}: XioniArticleMetaProps = $props()
</script>

<ul class={[baseName, classProp]} {...restProps}>
	{#if author}
		<li class="{baseName}__author">
			<Fontello name="user" />
			<span>Von {author}</span>
		</li>
	{/if}
	{#if date}
		<li class="{baseName}__date">
			<Fontello name="calendar-empty" />
			<time>{format(date, 'PPP', { locale: de })}</time>
		</li>
	{/if}
</ul>
