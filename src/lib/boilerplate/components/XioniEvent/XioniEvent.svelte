<script lang="ts">
	import './XioniEvent.scss'

	import { Button, ButtonRow, Grid, Picture } from '..'
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

	const images = $derived(event.images || [])
	const gallery = $derived(image ? [image, ...images.filter(img => img.src !== image.src)] : images)

	let selectedIndex = $state(0)
	let showAllThumbnails = $state(false)
	const selectedImage = $derived(gallery[selectedIndex] ?? gallery[0])

	const maxImages = 5
	const hasOverflow = $derived(!showAllThumbnails && gallery.length > maxImages)
	const thumbnails = $derived(hasOverflow ? gallery.slice(0, maxImages - 1) : gallery)

	$effect(() => {
		void event.id
		selectedIndex = 0
		showAllThumbnails = false
	})
</script>

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
			<meta itemprop="address" content={address} />
		</div>
	{/if}

	{#if selectedImage}
		<div class={bem.element('image-wrapper')}>
			<figure class={bem.element('figure')}>
				{#key selectedImage.src}
					<Picture
						class={baseName + '__image'}
						src={selectedImage.src}
						tablet={selectedImage.src}
						alt={selectedImage.description}
						itemprop="image" />
				{/key}
				{#if selectedImage.description}
					<figcaption class={bem.element('caption')} aria-hidden="true">
						{selectedImage.description}
					</figcaption>
				{/if}
			</figure>
			{#if gallery.length > 1}
				<Grid gap>
					{#each thumbnails as { src, description }, index (src)}
						<Grid size="1-5" class="$mt">
							<button
								type="button"
								class={[
									baseName + '__picture-row-button',
									index === selectedIndex && baseName + '__picture-row-button--active'
								]}
								aria-pressed={index === selectedIndex}
								aria-label={`Bild ${index + 1} anzeigen${description ? `: ${description}` : ''}`}
								onclick={() => (selectedIndex = index)}>
								<img class={baseName + '__picture-row-image'} {src} alt="" loading="lazy" />
							</button>
						</Grid>
					{/each}
					{#if hasOverflow}
						<Grid size="1-5" class="$mt">
							<button
								type="button"
								class={baseName + '__picture-row-overflow-indicator'}
								aria-label="Alle Bilder anzeigen"
								onclick={() => (showAllThumbnails = true)}>
								+{gallery.length - thumbnails.length}
							</button>
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
