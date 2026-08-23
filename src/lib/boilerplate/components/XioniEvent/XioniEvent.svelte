<script lang="ts">
	import './XioniEvent.scss'

	import { Button, ButtonRow, Grid, Lightbox, Picture } from '..'
	import { formatFromTo } from '$lib/boilerplate/utils/formatDate'
	import { formatISO } from 'date-fns'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { XioniEventProps } from './XioniEvent'

	let {
		baseName = 'XioniEvent',
		class: className,
		event,
		children,
		...restProps
	}: XioniEventProps = $props()

	// -----------------------------------------------------------------------------------------------

	const bem = $derived(makeBEM(baseName))

	const {
		teaser,
		description,
		ends,
		address,
		image,
		pdf,
		flags,
		starts,
		title,
		ownerURL,
		ticketshopURL,
		organizer
	} = $derived(event)

	let lightbox = $state<Lightbox>()
	const imagesRaw = $derived(event.images || [])
	const images = $derived(
		imagesRaw.map(img => ({
			src: img.src,
			alt: img.description ?? ''
		}))
	)
	const maxImages = 5
	const imageRow = $derived.by(() => {
		if (imagesRaw.length === maxImages) {
			return [...imagesRaw].splice(0, maxImages)
		} else if ([...imagesRaw].length > maxImages) {
			return [...imagesRaw].splice(0, maxImages - 1)
		} else {
			return imagesRaw
		}
	})
</script>

{#if images.length}
	<Lightbox bind:this={lightbox} {images} />
{/if}

<div
	itemscope
	itemtype="https://schema.org/Event"
	{...restProps}
	class={[bem.block, className]}
	data-flags={flags?.join()}>
	<meta itemprop="startDate" content={formatISO(starts)} />
	<meta itemprop="endDate" content={formatISO(ends)} />
	{#if organizer}
		<div itemprop="organizer" itemscope itemtype="https://schema.org/Organization">
			<meta itemprop="name" content={organizer} />
		</div>
	{/if}
	{#if address}
		<div itemprop="location" itemscope itemtype="https://schema.org/Place">
			<meta itemprop="name" content={address} />
		</div>
	{/if}

	{#if image || images?.length}
		<div class={bem.element('image-wrapper')}>
			{#if image}
				<Picture
					class={baseName + '__image'}
					src={image.src}
					tablet={image.src}
					alt={image.description}
					itemprop="image" />
			{/if}
			{#if images.length}
				<Grid gap>
					{#each imageRow as { src, description }, index (src)}
						<Grid size="1-5" class="$mt">
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
							<img
								class={baseName + '__piucture-row-image $pointer'}
								{src}
								alt={description}
								loading="lazy"
								onclick={() => lightbox?.open(index)} />
						</Grid>
					{/each}
					{#if images.length > maxImages}
						<Grid size="1-5" class="$mt">
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								class={baseName + '__piucture-row-overflow-indicator $pointer'}
								onclick={() => lightbox?.open(4)}>
								+{images.length - maxImages}
							</div>
						</Grid>
					{/if}
				</Grid>
			{/if}
		</div>
	{/if}

	<h2 itemprop="name" class={baseName + '__title'}>
		{title}
	</h2>

	<h3 class={baseName + '__date'}>
		<time datetime={formatISO(starts)}>
			{@html formatFromTo(starts, ends)}
		</time>
	</h3>

	{#if teaser}
		<p class={baseName + '__teaser'}>
			{@html teaser}
		</p>
	{/if}

	{#if description}
		<p itemprop="description" class={baseName + '__description'}>
			{@html description}
		</p>
	{/if}

	<ButtonRow class={baseName + '__metadata'}>
		{#if ticketshopURL}
			<Button to={ticketshopURL.toString()} fontello="ticket">Zum Ticketshop</Button>
		{/if}

		{#if ownerURL}
			<Button fontello="globe" to={ownerURL.toString()}>{ownerURL.hostname}</Button>
		{/if}

		{#if pdf}
			<Button fontello="file-pdf" to={pdf.src}>{pdf.title}</Button>
		{/if}
	</ButtonRow>
	{@render children?.()}
</div>
