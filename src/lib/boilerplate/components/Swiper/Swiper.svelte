<script lang="ts">
	import './Swiper.scss'

	import { onMount } from 'svelte'
	import { uniqueId } from 'lodash-es'

	import Glide from '@glidejs/glide'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Fontello from '../Fontello/Fontello.svelte'
	import type { SwiperProps } from './Swiper'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'Swiper',

		images = [],
		nav = true,
		options,

		children,
		...restProps
	}: SwiperProps = $props()

	let slider: HTMLElement
	let swiper: Glide

	const id = uniqueId('swiper-')
	const glideOptions = {
		autoplay: 0,
		focusAt: 'center',
		gap: 0,
		perView: 1,
		animationDuration: 1500,
		startAt: 0,
		type: 'slider',
		// svelte-ignore state_referenced_locally
		...options
	} as Glide.Options

	onMount(() => {
		swiper = new Glide('#' + id, glideOptions)
		slider
			.querySelectorAll('.glide__slides > *')
			.forEach(slide => slide.classList.add('glide__slide'))
		swiper.mount()
	})
</script>

<div {id} class={[baseName, classProp, 'glide']} bind:this={slider} {...restProps}>
	<div class="glide__track" data-glide-el="track">
		<div class="glide__slides">
			{#if images.length}
				{#each images as { src, alt } (src)}
					<img {src} {alt} />
				{/each}
			{:else}
				{@render children?.()}
			{/if}
		</div>
	</div>
	{#if nav}
		<button
			aria-label="Vorheriges Bild zeigen"
			class={`${baseName}__button ${baseName}__button--prev`}
			onclick={() => swiper.go('<')}>
			<Fontello baseName={`${baseName}__button-icon`} name="left-open" />
		</button>
		<button
			aria-label="Nächstes Bild zeigen"
			class={`${baseName}__button ${baseName}__button--next`}
			onclick={() => swiper.go('>')}>
			<Fontello baseName={`${baseName}__button-icon`} name="right-open" />
		</button>
	{/if}
</div>
