<script lang="ts">
	import './XioniMenuCard.scss'
	import type { XioniMenuCardProps } from './XioniMenuCard.d'

	// --- Props -------------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'XioniMenuCard',
		menuCard,
		...restProps
	}: XioniMenuCardProps = $props()
</script>

<ol itemscope itemtype="https://schema.org/Menu" class={[baseName, classProp]} {...restProps}>
	{#each menuCard as group, i (i)}
		<li
			itemprop="hasMenuSection"
			itemscope
			itemtype="https://schema.org/MenuSection"
			class="{baseName}__group">
			<h3 itemprop="name" class="{baseName}__group-name">{group.name}</h3>
			{#if group.description}
				<p itemprop="description" class="{baseName}__group-description">
					{@html group.description}
				</p>
			{/if}
			<ul class="{baseName}__dishes">
				{#each group.items as item, j (j)}
					<li
						itemprop="hasMenuItem"
						itemscope
						itemtype="https://schema.org/MenuItem"
						class="{baseName}__dish">
						<h4 itemprop="name" class="{baseName}__dish-title">{item.name}</h4>
						{#if item.price.value > 0}
							<div
								itemprop="offers"
								itemscope
								itemtype="https://schema.org/Offer"
								class="{baseName}__dish-price">
								<meta itemprop="price" content={String(item.price.value)} />
								{item.price.formatted}
							</div>
						{/if}
						{#if item.image}
							<img
								src={item.image.src}
								alt={item.image.alt}
								class="{baseName}__dish-image"
								loading="lazy" />
						{/if}
						{#if item.description}
							<p itemprop="description" class="{baseName}__dish-description">
								{@html item.description}
							</p>
						{/if}
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ol>
