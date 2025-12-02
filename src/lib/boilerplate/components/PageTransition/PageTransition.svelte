<script lang="ts">
	import { blur } from 'svelte/transition'
	import { page } from '$app/state'
	import type { PageTransitionProps } from './PageTransition'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		tag = 'div',
		class: className,
		baseName = 'PageTransition',
		children
	}: PageTransitionProps = $props()
</script>

{#key page.url.pathname}
	<svelte:element this={tag as string} class={[baseName, className]} in:blur={{ duration: 250 }}>
		{@render children?.()}
	</svelte:element>
{/key}
